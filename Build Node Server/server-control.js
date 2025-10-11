// server-control.js
import { fileRead } from "./libs/read-file.js";

export const server = async (req, res) => {
  if (req.url === "/" && req.method === "GET") {
    // Serve HTML
    const html = await fileRead("../../public/index4.html");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html);

  } else if (req.url === "/style.css" && req.method === "GET") {
    // Serve CSS
    const css = await fileRead("../../public/style.css");
    res.writeHead(200, { "Content-Type": "text/css" });
    res.end(css);

  } else {
    // Handle 404
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>404 Not Found</h1>");
  }
};
