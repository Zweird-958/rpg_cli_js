import { readFile } from "node:fs/promises"
import { SAVE_PATH } from "../run.js"

const read = async () => {
  const content = await readFile(SAVE_PATH, { flag: "a+", encoding: "utf-8" })

  return content ? JSON.parse(content) : false
}

export default read
