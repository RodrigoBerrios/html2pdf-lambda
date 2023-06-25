# TemplateEJS

Project example for use EJS template to PDF using html2pdf-lambda.

## Getting Started

### Requirements

* [Install Serverless Framework](https://www.serverless.com/framework/docs/getting-started)
* [Config your AWS credentials](https://www.serverless.com/framework/docs/providers/aws/guide/credentials)

### Use

1. Install dependency

   ```sh
    npm install
   ```

2. Deploy project to AWS Lambda

    ```sh
      serverless deploy
    ```

3. Invoke deployed function

    ```bash
      serverless invoke --function generatePDF
    ```
