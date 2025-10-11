import { fileRead } from "./libs/read-file.js";

export const server =(req,res)=>{
    if(req.url === '/' && req.method === 'GET'){
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(fileRead('public/index4.html'));
    }
};