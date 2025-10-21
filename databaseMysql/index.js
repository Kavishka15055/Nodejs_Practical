import { createConnection } from "mysql2";
import { log } from "node:console";

const db = createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "school"
});

db.connect((err) => {
  if (err) {
    log("Connection error:", err);
  } else {
    log("DB connected");

    const sqlQuery = `
      CREATE TABLE IF NOT EXISTS office_details (
        id INT AUTO_INCREMENT,
        name VARCHAR(50),
        phone VARCHAR(50),
        PRIMARY KEY (id)
      )
    `;

    db.query(sqlQuery, (err, result) => {
      if (err) {
        log("Query error:", err);
      } else {
        log("Table created or already exists:", result);
      }
      db.end();
    });
  }
});
