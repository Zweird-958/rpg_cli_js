import { resolve } from "node:path"
import home from "./menus/home.js"

export const SAVE_PATH = resolve(process.env.HOME, ".save.json")

const run = () => {
  home()
}

export default run
