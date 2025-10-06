import { log } from 'node:console';
import { readFile } from 'node:fs';
import { dirname, join } from 'node:path';
import {fileURLToPath} from 'node:url'

const __filename=fileURLToPath(import.meta.url);
const __dirname=dirname(__filename);

const fileRead=(path,yourFunction=(d)=>{log(d)})=>{
    readFile(join(__dirname,path),{encoding:'utf-8'},(err,data)=>{
        yourFunction(data);
        
    });
};

fileRead('../read.txt');