import attack from "../utils/attack.js"
import createMob from "../utils/createMob.js"
import getDamageAndCritical from "../utils/getDamageAndCritical.js"
import getRandomNumber from "../utils/getRandomNumber.js"
import printColor from "../utils/printColor.js"
import printStats from "../utils/printStats.js"
import printTitle from "../utils/printTitle.js"
import promptToCotinue from "../utils/promptToContinue.js"
import specialAttack from "../utils/specialAttack.js"
import home from "./home.js"
import startGame, { player } from "./startGame.js"

const fight = async () => {
  console.clear()
  printTitle("FIGHT")
  const mob = createMob()

  console.log(`${mob.name} 🧟`)
  printStats(mob)
  console.log()

  let round = 0

  const roundPromise = new Promise((resolve) => {
    const roundInterval = setInterval(() => {
      round += 1
      console.log()
      printTitle(`ROUND ${round}`)
      console.log()
      const [playerAttack, playerCritical] = getDamageAndCritical(player)
      const playerDodge = specialAttack(player.speed)
      const [mobAttack, mobCritical] = getDamageAndCritical(mob)
      const mobDodge = specialAttack(mob.speed)

      let isFinished = attack(mobDodge, mobCritical, playerAttack, mob)

      if (isFinished) {
        clearInterval(roundInterval)
        return resolve()
      }

      isFinished = attack(playerDodge, playerCritical, mobAttack, player)

      if (isFinished) {
        clearInterval(roundInterval)
        return resolve()
      }
    }, 1000)
  })

  roundPromise.then(async () => {
    const moneyEarned = getRandomNumber(5, 50)
    player.money += moneyEarned
    const { color, message } =
      mob.health <= 0
        ? {
            color: "green",
            message: `\n${mob.name} is dead! YOU WIN! 🏆\nYou earned ${moneyEarned} 💰`,
          }
        : { color: "red", message: "You are dead! 💀" }

    printColor(color, `${message}\n`)

    await promptToCotinue()
    if (player.health > 0) {
      return startGame(false, true)
    } else {
      return home()
    }
  })
}

export default fight
