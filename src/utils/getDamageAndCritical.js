import getRandomNumber from "./getRandomNumber.js"
import specialAttack from "./specialAttack.js"

const getDamageAndCritical = (character) => {
  const isCritical = specialAttack(character.intelligence)
  const characterAttack = Math.floor(
    (isCritical ? character.strength * 2 : character.strength) *
      getRandomNumber(0.5, 1.5)
  )
  return [characterAttack, isCritical]
}

export default getDamageAndCritical
