import React from 'react'
import "./styleCSS/question1.css"
export default function question1() {
  return (
    <div class="question1-container">
        <p id='title-q1'>Problématique du projet:</p>
        <div id='inp-q1-container'>
            <input className="inp-q1" placeholder="Quelle est la problématique ou le défi que le projet vise à résoudre ?"/>
            <input className="inp-q1"placeholder="Quels sont les antécédents ou les événements qui ont conduit à l'identification de ce besoin ?"/>
        </div>
        <div id='progress-q1-container'>
            <div id='progress-line-q1'>

            </div>
            <p id='progress-num-q1'>0 %</p>
        </div>
     
 </div>
  )
}
