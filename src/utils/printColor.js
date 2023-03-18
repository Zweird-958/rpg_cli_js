import chalk from "chalk"

const printColor = (color, ...message) => {
  return console.log(chalk[color](message))
}
export default printColor
