var h = require('hyperscript');
var generate_1 = require('./generate/generate');
generate_1.generateAPIDocs('src').filter(function (doc) { return doc.generatedDoc; }).subscribe(function (docs) { return console.log(docs.generatedDoc.outerHTML); });
