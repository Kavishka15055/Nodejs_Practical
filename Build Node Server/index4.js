import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { createServer } from 'node:http';
import { log } from 'node:console';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

log("__filename:", __filename);
log("__dirname:", __dirname);

const PORT = process.env.PORT || 4000
createServer((req,res)=>{

}).listen(PORT,()=> log(`Server running ${PORT}`))