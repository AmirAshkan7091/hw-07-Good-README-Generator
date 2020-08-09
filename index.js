const fs = require("fs");
const inquirer = require("inquirer");
const questions = [

    {
        type: 'input',
        name: 'repoName',
        message: 'What is main header?',
     
    },

    {
        type: 'input',
        name: 'gitHubName',
        message: ' username  Github?',
     
    },

    {
        type: 'input',
        name: 'description',
        message: 'description of application',
     
    },
 
];

function init() {
inquirer.prompt(questions).then( (response) =>{


    fs.appendFile("README.md", ("# " + response.repoName )+ '\n', function(err) { 

        if (err) { 
        console.log(err)
        }
        else {
        console.log("Success")
        }
    
    })

fs.appendFile("README.md", ("write by: " + response.gitHubName) + '\n', function(err) { 

    if (err) { 
    console.log(err)
    }
    else {
    console.log("Success")
    }

})

fs.appendFile("README.md", ( response.description ) + '\n', function(err) { 

    if (err) { 
    console.log(err)
    }
    else {
    console.log("Success")
    }

})


})
}


init();


// console.log(response)
// console.log(response.gitHubName)
// console.log(response.repoName)
// console.log(response.description)
