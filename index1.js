// import fileRead from "./libs/readfile.js"; // ✅ include .js extension
import { log } from "node:console";
// import filewrite from "./libs/writefile.js";
import inquirer from 'inquirer';
import { type } from "node:os";

// fileRead("read.txt", (data) => {
//     const whatToDo = String(data).split(" ");
//     const content = whatToDo.slice(1, whatToDo.length-1).join(' ');
//     const file=whatToDo[whatToDo.length - 1];
//     const command=whatToDo[0];
//     if (command === "write") {
//         filewrite(file,content,(d)=>log(d))
// }});
const studentInfor=[];
let a = true;

(async()=>{
do{
const data = await inquirer.prompt([
    {
        type:'input',
        name:'Name',
        message:'Enter student name'
    },
    {
        type:'input',
        name:'Age',
        message:'Enter student age'
    },
    {
        type:'input',
        name:'City',
        message:'Enter student city'
    },
    {
        type:'list',
        name:'Class',
        message:'Select student class',
        choices:['Class 1','Class 2','Class 3','Class 4','Class 5','Class 6','Class 7','Class 8','Class 9','Class 10','Class 11','Class 12']
    },
    {
        type:'list',
    name:'Subject',
    message:'Select student subject',
    choices:['Science','Commerce','Arts']
    },
    {
        type:'confirm',
        message:'Do you want to add more student details?',
        name:'Check',
    
    }

])
.then((data)=>{
    const {Check,...info}=data;
    studentInfor.push(info);
    if(!data.Check){
        a=false;
    }
})
.catch((err)=>log(err));
}while(a);
log(studentInfor);
})();






