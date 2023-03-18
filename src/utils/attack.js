const attack = (isDodged, isCritical, attackValue, character) => {
  const name = character.name ?? "You"
  if (!isDodged) {
    character.health -= attackValue
    console.log(
      `${
        isCritical ? "CRITICAL HIT! " : ""
      }${name} lost ${attackValue}HP ! 💥 (${name} ${character.health}HP)`
    )

    if (character.health <= 0) {
      return true
    }
  } else {
    console.log(`${name} dodged 💨`)
  }
}

export default attack
