
var h = require('hyperscript');
import {generateAPIDocs} from './generate/generate'


generateAPIDocs('src').filter(doc => doc.generatedDoc).subscribe(docs => console.log(docs.generatedDoc.outerHTML))