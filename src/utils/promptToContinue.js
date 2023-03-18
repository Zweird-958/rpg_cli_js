import prompt from "./prompt.js"

const promptToCotinue = async () => {
  const output = await prompt("Continue [Enter]")

  return output
}

export default promptToCotinue
