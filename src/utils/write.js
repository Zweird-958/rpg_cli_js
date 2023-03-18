import { writeFile } from "node:fs/promises"
import { SAVE_PATH } from "../run.js"

const write = async (data) => {
  await writeFile(SAVE_PATH, JSON.stringify(data), { encoding: "utf-8" })
}

export default write
