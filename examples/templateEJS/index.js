const html2pdf = require('html2pdf-lambda');
const ejs = require('ejs');
const path = require('path');

module.exports.handler = async (event) => {
  try {
    const templatePath = path.join(__dirname, `template.ejs`);

    const params = {
      name: 'html2pdf-lambda',
    };

    const template = await new Promise((resolve, reject) => {
      ejs.renderFile(templatePath, params, (err, data) => {
        if (err) reject(err);
        else resolve(data);
      });
    });

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
