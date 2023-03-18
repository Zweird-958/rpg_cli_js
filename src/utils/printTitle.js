import printColor from "./printColor.js"

const printTitle = (str) => {
  const numberOfChar = str.length % 2 === 0 ? 41 : 40
  const middle = Math.round((numberOfChar - str.length) / 2)

  let title = "|"
  for (let i = 1; i <= numberOfChar - 1; i += 1) {
    if (i === middle) {
      title += str
    } else if (i < middle || i >= middle + str.length) {
      title += " "
    }
  }
  title += "|"

  const topAndBottom = "+" + "-".repeat(numberOfChar - 1) + "+"
  const space = "|" + " ".repeat(numberOfChar - 1) + "|"

  printColor(
    "cyan",
    `${topAndBottom}\n${space}\n${title}\n${space}\n${topAndBottom}`
  )
}

export default printTitle
