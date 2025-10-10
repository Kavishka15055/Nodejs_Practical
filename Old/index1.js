import { log } from "node:console";
import inquirer from "inquirer";
import { cardGen } from "../Nodejs_Practical/libs/htmlCardGen.js";
import filewrite from "../Nodejs_Practical/libs/writefile.js";
import fs from "fs";

const studentInfor = [];
let continueInput = true;

(async () => {
  let allCard = "";

  // Step 1: If index.html exists, read its content
  let oldCards = "";
  if (fs.existsSync("index.html")) {
    const oldHtml = fs.readFileSync("index.html", "utf-8");
    const match = oldHtml.match(/<main class="main">([\s\S]*?)<\/main>/);
    if (match && match[1]) {
      oldCards = match[1]; // Save old student cards
    }
  }

  // Step 2: Ask for new student data
  do {
    const data = await inquirer.prompt([
      {
        type: "input",
        name: "Name",
        message: "Enter student name:",
      },
      {
        type: "input",
        name: "Age",
        message: "Enter student age:",
      },
      {
        type: "input",
        name: "City",
        message: "Enter student city:",
      },
      {
        type: "list",
        name: "stuclass",
        message: "Select student class:",
        choices: [
          "Class 1",
          "Class 2",
          "Class 3",
          "Class 4",
          "Class 5",
          "Class 6",
          "Class 7",
          "Class 8",
          "Class 9",
          "Class 10",
          "Class 11",
          "Class 12",
        ],
      },
      {
        type: "checkbox",
        name: "Subjects",
        message: "Select student subjects:",
        choices: ["Science", "Commerce", "Arts"],
      },
      {
        type: "confirm",
        name: "Continue",
        message: "Do you want to add more student details?",
        default: true,
      },
    ]);

    studentInfor.push(data);
    continueInput = data.Continue;
  } while (continueInput);

  // Step 3: Generate new cards
  studentInfor.forEach(({ Name, Age, stuclass, Subjects }) => {
    allCard += cardGen(Name, Age, stuclass, Subjects);
  });

  // Step 4: Combine old and new cards
  const combinedCards = oldCards + allCard;

  // Step 5: Create the full HTML structure
  const finalHtml = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Student Info</title>
      <link href="./index.css" rel="stylesheet"/>
  </head>
  <body>
      <main class="main">
          ${combinedCards}
      </main>
  </body>
  </html>`;

  // Step 6: Write the updated file using your custom writer
  filewrite("index.html", finalHtml, (msg) => log("✅ " + msg));
})();
