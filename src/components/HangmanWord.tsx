import React from 'react'


type HangmanWordProps = {
  guessedLetters: string[],
  wordToGuess: string,
  reveal?: boolean
}

const HangmanWord = ({guessedLetters, wordToGuess, reveal = false}: HangmanWordProps) => {



  return (
    <div style={{ 
      display: "flex",
      gap: ".25em",
      fontSize: "6rem",
      fontWeight: "bold",
      textTransform: "uppercase",
      fontFamily: "monospace",
      }}
    >
      {wordToGuess.split("").map((letter, index) => (
        <span style={{borderBottom: ".1em solid black"}} key={index}>
        
          <span style={{
            visibility: guessedLetters.includes(letter) || reveal ? "visible" : "hidden",
            color: !guessedLetters.includes(letter) && reveal ? "red" : "black" //if we lose to reveal the missing letters in red and the guessed ones in blackme
          }}>{letter}</span>
        </span>
      ))}
    </div>
  )
}

export default HangmanWord