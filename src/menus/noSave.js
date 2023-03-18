import promptToCotinue from "../utils/promptToContinue.js"
import printTitle from "../utils/printTitle.js"
import home from "./home.js"

const noSave = async () => {
  console.clear()
  printTitle("NO SAVE!")
  await promptToCotinue()
  return home()
}
export default noSave
