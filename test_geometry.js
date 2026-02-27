const fs = require('fs');
const JSDOM = require('jsdom').JSDOM;
const html = fs.readFileSync('index.html', 'utf8');
const dom = new JSDOM(html);
console.log("Sections count:", dom.window.document.querySelectorAll('section').length);
