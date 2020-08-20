
const inquirer= require("inquirer");
const fs = require("fs");

inquirer.prompt([
    {
        type: "input",
        message: "What is the title of your README?",
        name: "title"
    },
    {
        type: "input",
        message: "What do you like to put into the description of your README?",
        name: "description"
      },

      {
        type: "input",
        message: "What are the steps required for installation?",
        name: "installation"
      },
      {
        type: "input",
        message: "What are the instructions on how to use this?",
        name: "usage"
      },
      {
      
        type: "list",
        message: "What liscence is this under?",
        name: "liscence",
        choices: [
            `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`,
             `[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)`,
              `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`,
               `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`]
      },
      {
        type: "input",
        message: "how can people contribute?",
        name: "contribution"
      },
      {
        type: "input",
        message: "What tests have you written for this README?",
        name: "tests"
      },
      {
        type: "input",
        message: "Where can people go to ask questions?",
        name: "questions"
      },
      {
        type: "input",
        message: "What is your github username?",
        name: "github"
      },
      {
      type: "input",
      message: "What is your email?",
      name: "email"
    },

]).then(function(response) {
    const title = response.title;
    const description = response.description;
    const contents = response.contents;
    const installation = response.installation;
    const usage = response.usage;
    const liscence = response.liscence;
    const contribution = response.contribution;
    const test = response.tests;
    const questions = response.questions;
    const github = response.github;
    const email = response.email;
    
    const makeIT =
` ## ${title}

${liscence}
    
## table of contents 
* [description](#Description)
* [contribution](#Contribution)  
* [insitillation](#Instillation)
* [usage](#Usage)
* [testing](#Testing)

## Description: 
${description} 
    
    
## Contribution:
${contribution} 
    
## Questions?
* **Please check out:** ${questions}
* **Or you can reach to me on Github here:** [Github](https://github.com/${github})
* **Im also available via email here:** [Email me!](${email}) 

## Installation 
    
${installation} 
    
## Usage 
    
${usage}
    
## Testing 
    
${test}`; 


// write README 
fs.writeFile("README.MD", makeIT, function(err) {
        
    if (err) {
      return console.log(err);
    }
})

})


function init() {

}


init();