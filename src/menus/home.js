import select from "../utils/select.js"
import printTitle from "../utils/printTitle.js"
import exitGame from "./exitGame.js"
import loadGame from "./loadGame.js"
import startGame from "./startGame.js"

const startChoices = ["Start Game 🏁", "Load Game 💾", "Exit Game ❌"]
const startChoicesFunctions = [startGame, loadGame, exitGame]

const home = async () => {
  console.clear()
  printTitle("HOME")
  const choice = await select(...startChoices)

  if (choice < 1 || choice > startChoices.length || isNaN(choice)) {
    return home(...startChoices)
  }

  await startChoicesFunctions[choice - 1]()
}

export default home
