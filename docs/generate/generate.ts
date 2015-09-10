require('es6-shim');
import fs = require('fs');
import Rx = require('../../dist/cjs/Rx');
import path = require('path');
import util = require('util');
import markdox = require('markdox');
import h = require('hyperscript');
import beautify = require('js-beautify');

import {readDirectory} from './filereader'

const BASE_DIR = './src'

const normalizePath = (baseDir,filePath) => filePath.replace(path.resolve(baseDir) + '/', '');

const readSourceFiles = rootDir => readDirectory(path.resolve(rootDir)).filter(file => path.extname(file) == '.ts') //.map(normalizePath(rootDir))

const parseDocComments = file => {
  return new Rx.Observable(observer => {
    //load source file for display
    let sourceCode = fs.readFileSync(file, {encoding: 'utf-8'})
    markdox.parse(file, (err, docs) => {
      if(!err){
        observer.next({file, docs, sourceCode});
        observer.complete();
      }
      else{
        observer.throw(err);
      }
    })
  })
}


const getParams = (doc) => doc.tags.filter(tag => tag.type === 'param');
const getReturn = (doc) => doc.tags.find(tag => tag.type === 'return');

const generateParamString = (params) => {
  return params.map(param =>
    `${param.name}:${param.types.map(type => type.replace('.','')).join('|')}`).join(', ')
}
const generateReturnString = (returnTag) => {
  if(!returnTag){
    return '';
  }
  return `:${returnTag.types.map(type => type.replace('.','')).join()}`
}

const generateConstructorDoc = (doc) => {
  return h('div',{},[
    h('pre',{},[`constructor(${generateParamString(getParams(doc))})`])
  ])
}

const generateMethodDoc = (doc) => {
  console.log(doc.ctx)
  return h(`div#${doc.ctx.name}`, {},[
    h('pre',{},`${doc.ctx.name}(${generateParamString(getParams(doc))})${generateReturnString(getReturn(doc))}`),
    h('p', {}, doc.description.full)
   ])
}

const generateStaticDoc = (doc) => {
  return h('div', {},[
    h('pre', {},`static ${doc.tags.find(tag => tag.type === 'static').string}(${generateParamString(getParams(doc))})${generateReturnString(getReturn(doc))}`),
    h('p', {}, doc.description.full)
  ])
}

const generateOtherDoc = (doc) => {
  //check if its a static
  let isStatic = doc.tags.find(tag => tag.type === 'static');
  console.log(isStatic)
  if(isStatic){
    return generateStaticDoc(doc)
  }
}

const generateMemberDoc = (doc) => {
  switch(doc.ctx.type){
    case 'constructor':
      return generateConstructorDoc(doc);
      break;
    case 'method':
      return generateMethodDoc(doc);
      break;
    //further parse unknown types
    case undefined:
      return generateOtherDoc(doc);
      break;
    default:
      return;
  }
}

const generateClassDoc = (docs) => {
  let classDoc = docs.find(doc => doc.isClass);
  let className = classDoc.tags.find(tag => tag.type == 'class').string;
  let memberDocs = docs.filter(doc => !doc.isClass);

  return h('div',{},[
    h('h1',{},className),
    h('div',{},memberDocs.map(memberDoc => generateMemberDoc(memberDoc)))
  ])
}



const generateDocView = sourceFile => {
  let isClass = sourceFile.docs.find(doc => doc.isClass);
  if(isClass){
    sourceFile.generatedDoc = generateClassDoc(sourceFile.docs);
  }
  return sourceFile;
}

const writeDocToDir = (outputDir) => (doc) => {

  let writePath = path.join(process.cwd(),outputDir,doc.path + '.html');
  fs.writeFileSync(writePath,doc.generatedDoc);
  return doc;
}

const normalizeDocPathFrom = (srcPath) => (doc) => {
  let [root, filePath] = doc.file.split(srcPath);
  doc.file = filePath.substring(1,filePath.length);
  doc.path = filePath.substring(1,filePath.length - 3);
  return doc;
}

export const generateAPIDocs = (inputDir) => {
  return readSourceFiles(inputDir)
  //.filter(file => path.extname(file) === '.ts')
  .flatMap(parseDocComments)
  .map(normalizeDocPathFrom(inputDir))
  .map(generateDocView)
}