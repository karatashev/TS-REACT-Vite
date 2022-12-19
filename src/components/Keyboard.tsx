import React from "react";
import classes from "./Keyboard.module.css";

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

type KeyboardProps = {
  activeLetters: string[],
  inactiveLetters: string[],
  addGuessedLetter: (letter: string) => void,
  disabled?: boolean
}

const Keyboard = ({activeLetters, inactiveLetters, addGuessedLetter, disabled = false}: KeyboardProps) => {
  return (
    <div className={classes.keyboard}>
      {KEYS.map((key) => {
        const isActive = activeLetters.includes(key)
        const isInactive = inactiveLetters.includes(key)
        return (
          <button
          onClick={() => addGuessedLetter(key)} 
          className={`${classes.btn} ${isActive ? classes.active : ""} ${isInactive ? classes.inactive : " "}`} 
          key={key}
          disabled={isActive || isInactive || disabled}
          >
          {key}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard;
