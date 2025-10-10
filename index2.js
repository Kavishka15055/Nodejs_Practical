import { log } from "node:console";
import { createServer } from "node:http";
import { pageSelect} from "./pageSelect.js" // ✅ ensure correct path

createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" }); // ✅ always set response type,,,aniwa onema nh meka
  pageSelect(req.url, res);
}).listen(4000, () => log("Server running on http://localhost:4000"));
