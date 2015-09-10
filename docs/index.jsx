/** @jsx h */
var h = require('hyperscript');
import {generateAPIDocs} from './generate/generate'

const SITE_MAP = {
  pages: {
    index: [],
    api: [],
    guides: []
  }
}

const Page = (content) => {
  return (
    <html lang="en-US">
    <head>
     <title>ReactiveX</title>
   <link href="/css/bootstrap.min.css" rel="stylesheet" />
   <link href="/css/prism.css" rel="stylesheet" />
    <link rel="stylesheet" href="/css/syntax.css" />
   <script defer src="/js/CustomElements.min.js"></script>
    <script defer src="/js/rx-marbles.js"></script>
   </head>
  <body>
   {content}
  </body>
  </html>
  )
}

console.log(Page(<div>hello world</div>).outerHTML)