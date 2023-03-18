import printColor from "../utils/printColor.js"
import printStats from "../utils/printStats.js"
import printTitle from "../utils/printTitle.js"
import promptToCotinue from "../utils/promptToContinue.js"
import select from "../utils/select.js"
import startGame, { player } from "./startGame.js"

const STAT_MULTIPLIER = 1.1

const shopChoices = [
  { stat: "strength", price: 100 },
  { stat: "health", price: 50 },
  { stat: "speed", price: 300, max: 90 },
  { stat: "intelligence", price: 400, max: 70 },
]

const prettyChoices = shopChoices.map(
  ({ stat, price }) =>
    `${stat.charAt(0).toUpperCase()}${stat.slice(1)} - ${price}$`
)

prettyChoices.push("Back ↩")

const shop = async () => {
  console.clear()
  printTitle("SHOP")
  printStats(player)

  const choice = await select(...prettyChoices)

  if (choice < 1 || choice > prettyChoices.length || isNaN(choice)) {
    return shop()
  } else if (choice == prettyChoices.length) {
    return startGame(false, true)
  }

  const { stat, price, max } = shopChoices[choice - 1]

  if (player.money >= price) {
    const newStatValue = player[stat] * STAT_MULTIPLIER
    if (max) {
      if (player[stat] >= max) {
        printColor(
          "red",
          `${stat.charAt(0).toUpperCase()}${stat.slice(
            1
          )} can't be increased more ! ❌`
        )
        await promptToCotinue()
        return shop()
      } else {
        player.money -= price
        newStatValue > max
          ? (player[stat] = max)
          : (player[stat] = Math.floor(newStatValue))
      }
    } else {
      player.money -= price
      player[stat] = Math.floor(newStatValue)
    }
    printColor(
      "green",
      `${stat.charAt(0).toUpperCase()}${stat.slice(1)} increased! ✔`
    )
  } else {
    printColor("red", "You need more money!")
  }
  await promptToCotinue()
  return shop()
}

export default shop
