import printTitle from "../utils/printTitle.js"

const exitGame = () => {
  console.clear()
  printTitle("THANKS FOR PLAYING!")
  process.exit(0)
}

export default exitGame
