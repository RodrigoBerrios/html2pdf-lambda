# html2pdf-lambda

> Plugin for convert HTML page to PDF generation library for AWS Lambda

**Note:** This plugin will convert html string into PDF. This will work with Node.js and Lambda
=======

## Installation

```sh
npm install html2pdf-lambda
```

## Usage

To convert `HTML` page to `PDF` using `generatePdf` method:

```js
const pdf = require('html2pdf-lambda');

module.exports.handler = async (event) => {
  const options = { format: 'A4' };

  const html = "<h1>Welcome to html2pdf-lambda</h1>";

  const pdfBuffer = pdf.generatePdf(html, options)

  console.log("PDF Buffer: ", pdfBuffer);

  return {
      statusCode: 200,
      body: JSON.stringify({
        pdf: pdfBuffer,
      }),
    };
}
```

### generatePdf ( [html], [options] )

**Parameters**

`html` <[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "String")> HTML file content of the PDF.

`options` <[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")> Options object should have the following properties:

- `args`  <[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "String")>> Additional arguments to pass to the browser instance. The list of Chromium flags can be found [here](http://peter.sh/experiments/chromium-command-line-switches/). This options will overwrite the default arguments.
- `path`  <[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "String")> The file path to save the PDF to. If  `path`  is a relative path, then it is resolved to  [current working directory](https://nodejs.org/api/process.html#process_process_cwd). If no path is provided, the PDF won't be saved anywhere.
- `scale`  <[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")> Scale of the webpage rendering. Defaults to  `1`. Scale amount must be between 0.1 and 2.
- `displayHeaderFooter`  <[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean")> Display header and footer. Defaults to  `false`.
- `headerTemplate`  <[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "String")> HTML template to print the header. Should be valid HTML markup with following classes used to inject printing values into them:
  - `date`  formatted date
  - `title`  document title
  - `url`  document location
  - `pageNumber`  current page number
  - `totalPages`  total pages in the document
- `footerTemplate`  <[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "String")> HTML template to print the footer. Should use the same format as the  `headerTemplate`.
- `printBackground`  <[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean")> Print background graphics. Defaults to  `false`.
- `landscape`  <[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean")> Paper orientation. Defaults to  `false`.
- `pageRanges`  <[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "String")> Paper ranges to print, e.g., '1-5, 8, 11-13'. Defaults to the empty string, which means print all pages.
- `format`  <[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "String")> Paper format. If set, takes priority over  `width`  or  `height`  options. Defaults to 'Letter'.
- `width`  <[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "String")|[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")> Paper width, accepts values labeled with units.
- `height`  <[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "String")|[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")> Paper height, accepts values labeled with units.
- `margin`  <[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")> Paper margins, defaults to none.
  - `top`  <[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "String")|[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")> Top margin, accepts values labeled with units.
  - `right`  <[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "String")|[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")> Right margin, accepts values labeled with units.
  - `bottom`  <[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "String")|[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")> Bottom margin, accepts values labeled with units.
  - `left`  <[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "String")|[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")> Left margin, accepts values labeled with units.
- `preferCSSPageSize`  <[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean")> Give any CSS  `@page`  size declared in the page priority over what is declared in  `width`  and  `height`  or  `format`  options. Defaults to  `false`, which will scale the content to fit the paper size.

**Return value**

Promise which resolves with PDF buffer.

**More Examples**

You can see more examples [here](https://github.com/ZafraDev/html2pdf-lambda/tree/main/examples "here").