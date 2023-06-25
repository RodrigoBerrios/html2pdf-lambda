const html2pdf = require('html2pdf-lambda');
const fs = require('fs');

module.exports.handler = async (event) => {
  try {
    const template = fs.readFileSync('./template.html', 'utf8');

    const pdfGenerated = await html2pdf.generatePDF(template, {
      format: 'A4',
      margin: {
        top: '2.5cm', // default is 0, units: mm, cm, in, px
        right: '3cm',
        bottom: '2.5cm',
        left: '3cm',
      },
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        pdf: pdfGenerated.toString('base64'),
      }),
    };
  } catch (err) {
    console.log(err);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: err.message,
      }),
    };
  }
};
