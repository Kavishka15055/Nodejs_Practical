// libs/read-file.js
import { log } from "node:console";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const fileRead = async (path) => {
  try {
    const data = await readFile(join(__dirname, path), "utf-8");
    return data;
  } catch (error) {
    log(error);
    return "<h1>Server Error</h1>";
  }
};
