 
import {fileURLToPath} from 'node:url'
import {dirname, join} from 'node:path'
import { log } from 'node:console';
import { appendFile, readFile, writeFile } from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


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

appendFile(join(__dirname,'write.txt'),
`
new data added
`,
(err)=>{
    if(!err){
        
            log('document updated');
        }
    }
    
);