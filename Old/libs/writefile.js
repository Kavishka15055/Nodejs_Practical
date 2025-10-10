import {fileURLToPath} from "node:url"
import { dirname,join } from "node:path";
import { writeFile } from "node:fs";

const __filename=fileURLToPath(import.meta.url);
const __dirname=dirname(__filename);

const filewrite=(path,data,yourFun=()=>{})=>{
    writeFile(join(__dirname,"..",path),data,{encoding:'utf-8'},(err)=>{
        if(!err){
            yourFun('your file written successfully');
        }
    })

}

export default filewrite;