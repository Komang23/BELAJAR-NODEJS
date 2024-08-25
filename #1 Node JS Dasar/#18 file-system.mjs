import fs from "fs/promises"

const buffer = await fs.readFile("#18 file-system.mjs")
console.info(buffer.toString());

await fs.writeFile("remp.text", "Hello Word")
