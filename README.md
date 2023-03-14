Automated end-to-end testing of Amazon [some flows]

# Amazon Automation

## Installations



- Cypress with Javascript [Mocha/Chai] Framework
- Execute following command to install project dependencies
-     npm install

Install Dependencies


- Execute following command to install cypress

      npm install cypress

- Execute following command to install typescript

      npm install --save-dev typescript

Commands to run testcases

- Execute following command to run testcase manually from cypress test runner

      npx cypress open

- Execute following command to run all test cases headless

      npx cypress run


- After running the previous command, execute the below-mentioned commands for Mocha Report
- Below mentioned command will merge all json data to index.json

      npx mochawesome-merge ./cypress/report/*.json > index.json


- Lastly it will give you Mocha Report link

      marge index.json --reportDir public --assetsDir public/assets --reportPageTitle index.html

- Note if you are going to execute it more than once, Please Delete Report folder index.json. We can manage it in pipline (CI/CD)
# Forescout Amazon Assignment
