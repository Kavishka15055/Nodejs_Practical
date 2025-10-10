import { log } from "node:console";
import { createServer } from "node:http";
import { IncomingForm } from "formidable";
import { getDataHtml, postDatahtml } from "./user-data.js";
import { copyFile, rm, existsSync, mkdir } from "node:fs";

createServer((req, res) => {
  if (req.method === "POST") {
    const userData = new IncomingForm();

    userData.parse(req, (err, fields, files) => {
      if (err) {
        log(err);
        res.end(postDatahtml("Server Error!"));
      } else {
        log("User data fields:", fields);
        log("Uploaded file name:", files.userfiles[0].originalFilename);

        // ✅ Paths
        const fileSrcPath = files.userfiles[0].filepath;
        const fileDestPath = `upload/${files.userfiles[0].originalFilename}`;

        // ✅ Ensure upload folder exists
        if (!existsSync("upload")) {
          mkdir("upload", { recursive: true }, (err) => {
            if (err) {
              log("❌ Cannot create upload folder:", err);
              res.end(postDatahtml("Server Error!"));
              return;
            }
            moveFile();
          });
        } else {
          moveFile();
        }

        // ✅ Function to move file
        function moveFile() {
          copyFile(fileSrcPath, fileDestPath, (err) => {
            if (err) {
              log("❌ File copy error:", err);
              res.end(postDatahtml("Server Error!"));
              return;
            }

            // ✅ Remove temporary file
            rm(fileSrcPath, (err) => {
              if (err) {
                log("⚠️ Could not delete temp file:", err);
              } else {
                log("✅ File moved and temp file deleted");
              }
              res.end(postDatahtml("ok"));
            });
          });
        }
      }
    });
  } else if (req.method === "GET") {
    res.end(getDataHtml);
  }
}).listen(4000, () => log("🚀 Server running on http://localhost:4000"));
