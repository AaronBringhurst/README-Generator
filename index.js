//These bring in the modules
const inquirer=require('inquirer');
const fs=require('fs');

// This is an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please write the title of the project",
    },
    {
        type: "input",
        name: "description",
        message: "write a discripton of the project",
    },
    {
        type: "input",
        name: "tableOfContents",
        message: "",
    },
    {
        type: "input",
        name: "installation",
        message: "Write the instructions for installation",
    },
    {
        type: "input",
        name: "usage",
        message: "Write the usage information",
    },
    {
        type: "list",
        name: "license",
        message: "Chose a license of your project",
        choices: ["MIT", "GPL 3.0", "Apache 2.0", "BSD 3-Clause", "None"],
    },
    {
        type: "input",
        name: "contributing",
        message: "Write the contrubition guidelines",
    },
    {
        type: "input",
        name: "tests",
        message: "Write testing instructions if any",
    },
    {
        type: "input",
        name: "questions",
        message: "Add Contact Info",
    },
];

// This function writes a file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error('Failed to write to file:', err);
            return;
        }
        console.log(`Successfully wrote to ${fileName}`);
    });
}

// This function will initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        const markdownContent = generateMarkdown(answers);
        writeToFile("README.md", markdownContent);
    }).catch(error => {
        console.error('An error occurred:', error);
    });
}

// Function call to initialize app
init();
