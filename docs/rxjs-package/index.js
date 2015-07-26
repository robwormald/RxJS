var Dgeni = require('dgeni');
var typescriptPackage = require('../typescript-package');
var linksPackage = require('../links-package');
var jsdocPackage = require('dgeni-packages/jsdoc');
var nunjucksPackage = require('dgeni-packages/nunjucks');
var gitPackage = require('dgeni-packages/git');
var path = require('canonical-path');


var rxJSDocPackage = new Dgeni.Package('rxjs-docs', [typescriptPackage, jsdocPackage, nunjucksPackage, linksPackage, gitPackage]);

rxJSDocPackage.config(function(readFilesProcessor, jsdocFileReader, readTypeScriptModules) {
  readFilesProcessor.fileReaders = [jsdocFileReader];
  readFilesProcessor.basePath = path.resolve(__dirname, '../..');
  readFilesProcessor.sourceFiles = [
    { include: 'guides/**/*.md', basePath: 'docs' },
    //{ include: 'docs/content/**/*.md', basePath: 'docs/content' }
  ];

  readTypeScriptModules.sourceFiles = [
    //'*/*.@(js|es6|ts)',
    '**/*.@(js|es6|ts)'
  ];
  readTypeScriptModules.basePath = path.resolve(readFilesProcessor.basePath, 'src');
}).config(function(writeFilesProcessor) {
  writeFilesProcessor.outputFolder  = 'dist/docs';
})
// Configure links
.config(function(getLinkInfo) {
  getLinkInfo.useFirstAmbiguousLink = true;
})
.config(function(templateFinder, templateEngine) {

  // Nunjucks and Angular conflict in their template bindings so change Nunjucks
  templateEngine.config.tags = {
    variableStart: '{$',
    variableEnd: '$}'
  };

  templateFinder.templateFolders
      .unshift(path.resolve(__dirname, 'templates'));

  templateFinder.templatePatterns = [
    '${ doc.template }',
    '${ doc.id }.${ doc.docType }.template.html',
    '${ doc.id }.template.html',
    '${ doc.docType }.template.html',
    'common.template.html'
  ];
})

// Configure the log service
.config(function(log) {
  log.level = 'warn';
})


.config(function(renderDocsProcessor, versionInfo) {
  renderDocsProcessor.extraData.versionInfo = versionInfo;
})
// Configure ids and paths
.config(function(computeIdsProcessor, computePathsProcessor) {

  computeIdsProcessor.idTemplates.push({
    docTypes: ['guide'],
    getId: function(doc) {
      return doc.fileInfo.relativePath
                    // path should be relative to `modules` folder
                    .replace(/.*\/?modules\//, '')
                    // path should not include `/docs/`
                    .replace(/\/docs\//, '/')
                    // path should not have a suffix
                    .replace(/\.\w*$/, '');
    },
    getAliases: function(doc) { return [doc.id]; }
  });

  computePathsProcessor.pathTemplates.push({
    docTypes: ['guide'],
    pathTemplate: '/${id}',
    outputPathTemplate: 'partials/guides/${id}.html'
  });
});
var dgeni = new Dgeni([rxJSDocPackage]);

dgeni.generate()
    .then(function(results){
        console.log(results)
    })
    .catch(function(err){
        console.log(err)
    })