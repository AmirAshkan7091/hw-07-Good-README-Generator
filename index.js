const inquirer = require("inquirer");
const fs = require("fs");

inquirer.prompt([
    {
        type: "input",
        name:"Title",
        message:"Title?",
    },
    {
        type: "input",
        name:"Description",
        message:"Description?",
    },
    {
        type: "input",
        name:"Table of Contents",
        message:"Table of Contents?",
    },
    {
        type: "input",
        name:"Usage",
        message:"Usage?",
    },
    {
        type: "input",
        name:"Installation",
        message:"Installation?",
    },
    {
        type: "input",
        name:"License",
        message:"License?",
    },
    {
        type: "input",
        name:"Contributing",
        message:"Contributing?",
    },
    {
        type: "input",
        name:"Tests",
        message:"Tests?",
    },
    {
        type: "input",
        name:"Questions",
        message:"Questions?",
    }
]).then(responce => {
    let keke = responce.name.toLowerCase().split(' ').join('')+".md";
    fs.writeFile(keke,JSON.stringify(responce,null,'\t'),error => {
        if(error){
            return console.log(error);
        }
        console.log("Success!");
    })
})