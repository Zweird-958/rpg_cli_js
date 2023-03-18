import read from "../utils/read.js"
import noSave from "./noSave.js"
import startGame from "./startGame.js"

const loadGame = async () => {
  const hasSave = await read()
  return hasSave ? startGame(false) : noSave()
}

export default loadGame
