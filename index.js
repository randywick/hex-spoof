'use strict'


const MIN_TICK_SPEED = 1
const MAX_TICK_SPEED = 110
const MAX_TICK_MUTATION = 10
const LAG_SPIKE_CHANCE = 0.0009
const MAX_LAG_SPIKE_TIME = 4000


let tickSpeed = 50


function leftpad(value, len) {
  let result = value + ''

  while (result.length < len) {
    result = '0' + result
  }

  return result
}


function randomWord() {
  return leftpad((Math.floor(Math.random() * 65536)).toString(16), 4)
}


function readWord(word) {
  return [word.substr(0, 2), word.substr(2)]
    .map(hex => {
      const n = parseInt(hex, 16)
      return (n < 32 || n > 126) ? '.' : String.fromCharCode(n)
    })
    .join('')
}


function generateLine(n) {
  const words = []
  for (let i = 0; i < 8; i++) {
    words.push(randomWord())
  }

  const chars = words.map(readWord)
    .join('')

  return `${leftpad(n, 7)}: ${words.join(' ')}  ${chars}`
}


function mutateTickSpeed() {

  // 50/50 positive or negative
  const multiplier = Math.random() >= 0.5? -1 : 1

  const change = Math.floor(Math.random() * MAX_TICK_MUTATION) * multiplier
  const newSpeed = tickSpeed + change

  tickSpeed = Math.min(MAX_TICK_SPEED, Math.max(MIN_TICK_SPEED, (newSpeed)))
}


function tick(n) {
  console.log(generateLine(n.toString(16)))

  mutateTickSpeed()

  let delay = Math.random() <= LAG_SPIKE_CHANCE
    ? Math.floor(Math.random() * MAX_LAG_SPIKE_TIME)
    : tickSpeed

  setTimeout(() => tick(n + 1), delay)
}


tick(1)