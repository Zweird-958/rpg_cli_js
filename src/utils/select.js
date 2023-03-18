import promptWithChoices from "./promptWithChoices.js"

const select = async (...choices) => {
  console.log()
  choices.forEach((str, index) => {
    console.log(`${index + 1} - ${str}`)
  })

  const promptResult = await promptWithChoices(choices.length)

  return promptResult
}

export default select
