//These bring in the modules
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown =require('./utils/generateMarkdown');

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
    choices: ["MIT", "GNU GPL v3", "Apache 2.0", "BSD 3-Clause", "None"],
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
function writeToFile(baseFileName, data) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const fileName = `${baseFileName.replace('.md', '')}-${timestamp}.md`;
    const directoryPath = path.join(__dirname, 'output');

    fs.mkdir(directoryPath, { recursive: true }, (err) => { // Ensure the directory exists
        if (err) {
            console.error("Failed to create directory:", err);
            return;
        }

        const filePath = path.join(directoryPath, fileName); // Create the full file path
        fs.writeFile(filePath, data, (err) => { // Write the file to the directory
            if (err) {
                console.error("Failed to write to file:", err);
                return;
            }
            console.log(`Successfully wrote to ${filePath}`);
        });
    });
}

// This function will initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const markdownContent = generateMarkdown(answers);
      writeToFile("README.md", markdownContent);
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });
}

// Function call to initialize app
init();
