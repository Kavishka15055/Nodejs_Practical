 
import { readFile } from 'node:fs';
import {dirname,join} from 'node:path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

readFile(join(__dirname,"myname.txt"),(err,data)=>{
    if(err){
        console.log(err);
    }
        console.log(data.toString());
}
);