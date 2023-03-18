import getRandomNumber from "../utils/getRandomNumber.js"
import read from "../utils/read.js"
import select from "../utils/select.js"
import printStats from "../utils/printStats.js"
import printTitle from "../utils/printTitle.js"
import fight from "./fight.js"
import home from "./home.js"
import saveGame from "./saveGame.js"
import shop from "./shop.js"

const selectChoices = ["Fight ⚔", "Shop 💵", "Save Game 💾", "Back To Home ↩"]

export let player

const startGame = async (isNewPlayer = true, isSameGame = false) => {
  const selectChoicesFunctions = [fight, shop, saveGame, home]
  console.clear()
  printTitle("STATS")

  !isSameGame
    ? isNewPlayer
      ? (player = {
          strength: getRandomNumber(10, 60),
          health: getRandomNumber(50, 300),
          speed: getRandomNumber(10, 30),
          intelligence: getRandomNumber(5, 20),
          money: 0,
        })
      : (player = await read())
    : null

  printStats(player)

  const choice = await select(...selectChoices)

  if (choice < 1 || choice > selectChoices.length || isNaN(choice)) {
    return startGame(isNewPlayer, true)
  }

  await selectChoicesFunctions[choice - 1]()
}

export default startGame
