import React from 'react'
// import GrandLogo from "../images/LogoComplet.png"
import "../styleCSS/questions.css"
import { useLocation } from 'react-router-dom';
import "../styleCSS/service2.css"
export default function Confirm(){
    const location = useLocation();

    const {resultText} = location.state || {resultText};
    return(
        <div  style={{ marginBottom: "20%" }}>
        <div>
          <div>
            <div id='titre-p-serv2'>
              <p style={{ color: "var(--violet)" }}>Result Of The Personality Test</p>
            </div>
          </div>
        </div>
        <div  className="Container-barre-serv2">
          <div className="question1-container">
            <p id='title-q1'>{resultText} (prompt)</p>

          </div>

        </div>
      </div>
    )
        
    
}