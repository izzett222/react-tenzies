import { useState } from "react";
import Dice from "./Dice";
import Confetti from "react-confetti";
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
  ];
  const [dices, setDices] = useState(() => [...initialData]);
  const gameCompleted = dices.reduce(
    (result, dice) => {
      if (!result.element) {
        result.element = dice.value;
        return result;
      } else if (result.element !== dice.value || !dice.selected) {
        result.done = false;
        return result;
      }
      return result;
    },
    { element: null, done: true }
  );

  function getRandomNumber() {
    return Math.ceil(Math.random() * 6);
  }
  function roll() {
    setDices((oldDices) => {
      return oldDices.map((el) =>
        el.selected ? { ...el } : { ...el, value: getRandomNumber() }
      );
    });
  }
  function freezeDice(id) {
    setDices((oldDices) => {
      return oldDices.map((el) =>
        el.id === id ? { ...el, selected: !el.selected } : { ...el }
      );
    });
  }
  function reset() {
    setDices([...initialData]);
  }
  return (
    <>
      {gameCompleted.done && <Confetti />}
      <div className="w-full grid grid-cols-6 gap-[18px] mt-4 hover:cursor-pointer">
        {dices.map((el, i) => {
          return (
            <Dice
              key={i}
              selected={el.selected}
              freeze={() => freezeDice(el.id)}
            >
              {el.value}
            </Dice>
          );
        })}
      </div>
      <button
        className="bg-[#5035FF] px-5 py-2 rounded-[4px] mt-4 text-white"
        onClick={gameCompleted.done ? reset : roll}
      >
        {gameCompleted.done ? "reset game" : "Roll"}
      </button>
    </>
  );
}
