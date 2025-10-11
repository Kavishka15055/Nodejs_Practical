import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import {readFile} from 'node:fs/promises'
import { log } from "node:console";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


export const fileRead = async (path)=>{
    try{
        const data= await readFile(join(__dirname,path))
        return data
    }catch(error){
        log(error);
        return '<h1>Server Error</h1>'
        
    }
}