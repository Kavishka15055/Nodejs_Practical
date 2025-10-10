import { log } from "node:console";
import { createServer } from "node:http";
import { IncomingForm } from "formidable";
import { getDataHtml, postDatahtml } from "./user-data.js";

createServer((req, res) => {
  if (req.method === "POST") {
    const userData = new IncomingForm();
    userData.parse(req,(err,fields,files)=>{
        if(err){
            log(err);
            res.end(postDatahtml('Server Error!'));
        }else{
            log("User data fields", fields);
            log("User data fields", files.userfiles[0].filepath);
            res.end(postDatahtml('ok'));
        }
    });
  } else if (req.method === "GET") {
    res.end(getDataHtml);
  }
}).listen(4000, () => log("Server running on http://localhost:4000"));
