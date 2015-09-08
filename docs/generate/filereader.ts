import fs = require('fs');
import Rx = require('../../dist/cjs/Rx');
import path = require('path');

//recursively reads a directory and returns an Observable of file paths
export const readDirectory = (directory:string): Rx.Observable<string> => {
  let [dirs, files] =  Rx.Observable.fromArray(fs.readdirSync(directory))
    .partition(file => fs.statSync(path.resolve(directory,file)).isDirectory());

  return files.map(file => path.resolve(directory, file))
     .merge(dirs.flatMap(dir => readDirectory(path.resolve(directory, dir))))
}
