import { createInterface } from "node:readline/promises"

const prompt = async (message) => {
  const rl = createInterface(process.stdin)

  process.stdout.write(message)

  const output = await rl.question("")

  await rl.close()

  return output
}

export default prompt
