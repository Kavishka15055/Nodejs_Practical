import { log } from 'node:console';
import { readFile } from 'node:fs';
import { dirname, join } from 'node:path';
import {fileURLToPath} from 'node:url'

const __filename=fileURLToPath(import.meta.url);
const __dirname=dirname(__filename);

const fileRead=()=>{
    readFile(join(__dirname,'../read.txt'),{encoding:'utf-8'},(err,data)=>{
        log(data);
    });
};

fileRead();