const getRandomNumber = (min, max) => {
  const isInt = min % 1 === 0 && max % 1 === 0 ? true : false
  const result = Math.random() * (max - min + (isInt ? 1 : 0)) + min
  return isInt ? Math.floor(result) : Math.round(result * 10) / 10
}

export default getRandomNumber
