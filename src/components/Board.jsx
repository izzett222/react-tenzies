import { useState } from 'react'
import Dice from './Dice'
import Confetti from 'react-confetti'
export default function Board() {
  const initialData = [
    { id: 1, selected: false, value: getRandomNumber() },
    { id: 2, selected: false, value: getRandomNumber() },
    { id: 3, selected: false, value: getRandomNumber() },
    { id: 4, selected: false, value: getRandomNumber() },
    { id: 5, selected: false, value: getRandomNumber() },
    { id: 6, selected: false, value: getRandomNumber() },
    { id: 7, selected: false, value: getRandomNumber() },
    { id: 8, selected: false, value: getRandomNumber() },
    { id: 9, selected: false, value: getRandomNumber() },
    { id: 10, selected: false, value: getRandomNumber() },
    { id: 11, selected: false, value: getRandomNumber() },
    { id: 12, selected: false, value: getRandomNumber() },
  ]
  const [dices, setDices] = useState(() => [...initialData])
  const gameCompleted = dices.reduce(
    (result, dice) => {
      if (!result.element) {
        result.element = dice.value
        return result
      } else if (result.element !== dice.value || !dice.selected) {
        result.done = false
        return result
      }
      return result
    },
    { element: null, done: true }
  )

  function getRandomNumber() {
    return Math.ceil(Math.random() * 6)
  }
  function roll() {
    setDices((oldDices) => {
      return oldDices.map((element) =>
        element.selected
          ? { ...element }
          : { ...element, value: getRandomNumber() }
      )
    })
  }
  function freezeDice(id) {
    setDices((oldDices) => {
      return oldDices.map((element) =>
        element.id === id
          ? { ...element, selected: !element.selected }
          : { ...element }
      )
    })
  }
  function reset() {
    setDices([...initialData])
  }
  return (
    <>
      {gameCompleted.done && <Confetti />}
      <div className="mt-4 grid w-full grid-cols-6 gap-[18px] hover:cursor-pointer">
        {dices.map((element, index) => {
          return (
            <Dice
              key={index}
              selected={element.selected}
              freeze={() => freezeDice(element.id)}
            >
              {element.value}
            </Dice>
          )
        })}
      </div>
      <button
        className="mt-4 rounded-[4px] bg-[#5035FF] px-5 py-2 text-white"
        onClick={gameCompleted.done ? reset : roll}
      >
        {gameCompleted.done ? 'reset game' : 'Roll'}
      </button>
    </>
  )
}
