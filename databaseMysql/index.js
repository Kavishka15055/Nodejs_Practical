import { createConnection} from "mysql2";
import { log} from "node:console";

const db =createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "",
    database: "school"
});

db.connect((err)=>{
    if(err){
        log(err)
    }else{ 
        log("db connected")
        const sqlQuery="SELECT * FROM `student_details`";
        db.query(sqlQuery,(err,result)=>{
            if(err){
                log(err);
            }else{
                log(result);
            }
        })
    }
})