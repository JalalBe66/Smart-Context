import React from 'react'
import GrandLogo from "./images/LogoComplet.png"
import Q1 from "./question1"
import "./styleCSS/service2.css"
export default function Service1() {
  return (
    <div style={{marginTop:"10%" , marginBottom:"20%"}}>
        <div>
            <div>
            <div id='grand-logo'>
                    <img src={GrandLogo} width={"500px"} height={"500px"} />
                </div>
                <div id='titre-p-serv2'>
                    <p>Respond For a Precise Answer</p>
                </div>
            </div>
        </div>
        <div class="Container-barre-serv2">
          <Q1/>
          <div id='buttons-serv2'>
            <button class="previous-button">Previous</button>
            <button class="next-button">Next</button>
          </div>
        </div>


    </div  >
  )
}