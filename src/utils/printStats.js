import STATS_EMOJIS from "./emojis.js"

const percentageStats = ["speed", "intelligence"]

const printStats = (character) => {
  console.log()
  for (const [key, value] of Object.entries(character)) {
    key in STATS_EMOJIS
      ? console.log(
          `${STATS_EMOJIS[key]} : ${
            percentageStats.includes(key) ? `${value}%` : value
          }`
        )
      : null
  }
}

export default printStats
