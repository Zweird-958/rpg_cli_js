import prompt from "./prompt.js"

const promptWithChoices = async (lengthOfChoices) => {
  const output = await prompt(`\nEnter a choice (1-${lengthOfChoices}) : \n`)

  return output
}

export default promptWithChoices
