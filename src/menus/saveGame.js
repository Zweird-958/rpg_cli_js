import promptToCotinue from "../utils/promptToContinue.js"
import printTitle from "../utils/printTitle.js"
import write from "../utils/write.js"
import startGame, { player } from "./startGame.js"

const saveGame = async () => {
  console.clear()
  printTitle("GAME SAVED !")
  await write(player)
  await promptToCotinue()
  startGame(false, true)
}

export default saveGame
