import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { log } from "node:console";
// import { appendFile, readFile, writeFile } from "node:fs";
import { readFile, writeFile, appendFile, rmdir } from "node:fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/// Promise API

// readFile(join(__dirname, "read.txt"), {
//   encoding: "utf-8",
// })
//   .then((data) => log(data))
//   .catch((err) => log(err));


const filePath=join(__dirname,'write.txt');
const content=`Hello! I am Kavishka
This is my first file operation using promise API`;
writeFile(filePath,content,{encoding:'utf-8'})
.then(()=>{
    log('file written successfully');
})
.catch((err)=>{
    log("Error occured",err);
});





///// Call BAck API
// readFile(join(__dirname,'read.txt'),{
//     encoding: 'utf-8',
// },(err,data)=>{
//     if(!err){
//         log(data);
//     }
// });

// writeFile(join(__dirname,'write.txt'),"Sabaragamuwa University of Sri Lanlka",(err)=>{
//     if(err){
//         log(err);
//     }
// });

// appendFile(join(__dirname,'write.txt'),
// `
// new data added
// `,
// (err)=>{
//     if(!err){

//             log('document updated');
//         }
//     }

// );
