import React, { useState } from 'react';
import './Eightball.css';
//TODO:capitalize global constant
const defaultAnswers = [
  { msg: "It is certain.", color: "green" },
  { msg: "It is decidedly so.", color: "green" },
  { msg: "Without a doubt.", color: "green" },
  { msg: "Yes - definitely.", color: "green" },
  { msg: "You may rely on it.", color: "green" },
  { msg: "As I see it, yes.", color: "green" },
  { msg: "Most likely.", color: "green" },
  { msg: "Outlook good.", color: "green" },
  { msg: "Yes.", color: "green" },
  { msg: "Signs point to yes.", color: "goldenrod" },
  { msg: "Reply hazy, try again.", color: "goldenrod" },
  { msg: "Ask again later.", color: "goldenrod" },
  { msg: "Better not tell you now.", color: "goldenrod" },
  { msg: "Cannot predict now.", color: "goldenrod" },
  { msg: "Concentrate and ask again.", color: "goldenrod" },
  { msg: "Don't count on it.", color: "red" },
  { msg: "My reply is no.", color: "red" },
  { msg: "My sources say no.", color: "red" },
  { msg: "Outlook not so good.", color: "red" },
  { msg: "Very doubtful.", color: "red" },
]
//TODO:add docstring
function Eightball ( { answers = defaultAnswers }) {
//we actually have 1 piece of state w/ 2 pieces of info (maybe use an object)
//handle click only updates one thing
    //const [answer, setAnswer] = useState({msg: 'Think of a question', color: 'black})
  const [msg, setMsg] = useState('Think of a Question');
  const [color, setColor] = useState('black');


//TODO:docstring
  function handleClick(evt) {
    const idx = Math.floor(Math.random() * answers.length);

    setMsg(answers[idx].msg);
    setColor(answers[idx].color);

  }
  //if it cannot fit in one line, do separate lines for each
  return (
    <div
    className="Eightball"
    style={{backgroundColor: color} }
    onClick={handleClick}>
       <b> {msg} </b>
    </div>
  )
}

export default  Eightball;
