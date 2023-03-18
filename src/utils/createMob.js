import getRandomNumber from "./getRandomNumber.js"

const ALL_MOBS = [
  {
    name: "Goblin",
    strength: { min: 5, max: 30 },
    health: { min: 30, max: 80 },
    speed: { min: 1, max: 5 },
    intelligence: { min: 1, max: 3 },
  },
  {
    name: "Wizard",
    strength: { min: 20, max: 80 },
    health: { min: 100, max: 150 },
    speed: { min: 5, max: 15 },
    intelligence: { min: 2, max: 15 },
  },
  {
    name: "Panda",
    strength: { min: 40, max: 100 },
    health: { min: 100, max: 150 },
    speed: { min: 5, max: 10 },
    intelligence: { min: 10, max: 30 },
  },
  {
    name: "Cypher",
    strength: { min: 40, max: 60 },
    health: { min: 40, max: 100 },
    speed: { min: 12, max: 22 },
    intelligence: { min: 10, max: 20 },
  },
  {
    name: "Thor",
    strength: { min: 150, max: 200 },
    health: { min: 300, max: 500 },
    speed: { min: 20, max: 40 },
    intelligence: { min: 7, max: 30 },
  },
]

const createMob = () => {
  const mob = { ...ALL_MOBS[getRandomNumber(0, ALL_MOBS.length - 1)] }
  for (const [key, value] of Object.entries(mob)) {
    mob[key] = key !== "name" ? getRandomNumber(value.min, value.max) : mob[key]
  }
  return mob
}

export default createMob
