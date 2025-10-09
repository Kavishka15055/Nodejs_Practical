import { log } from "node:console";
import inquirer from "inquirer";
import { cardGen } from "./libs/htmlCardGen.js";
import filewrite from "./libs/writefile.js";

const studentInfor = [];
let continueInput = true;

(async () => {
  let allCard = "";

  // Collect all student data
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

  // Generate all HTML cards
  studentInfor.forEach(({ Name, Age, stuclass, Subjects }) => {
    allCard += cardGen(Name, Age, stuclass, Subjects);
  });

  // Create final HTML page content
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
          ${allCard}
      </main>
  </body>
  </html>`;

  // Use your custom filewrite() to save the file
  filewrite("index.html", finalHtml, (d) => log("✅ " + d));
})();
