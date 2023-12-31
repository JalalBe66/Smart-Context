import React from 'react'
import GrandLogo from "./images/LogoComplet.png"
import "./styleCSS/service2.css"
export default function Service1() {
  return (
    <div style={{marginTop:"10%"}}>
        <div>
            <div>
            <div id='grand-logo'>
                    <img src={GrandLogo} width={"500px"} height={"500px"} />
                </div>
                <div id='titre-p-serv2'>
                    <p>Répondez Pour Une Réponse Précise:</p>
                </div>
            </div>
        </div>
    </div>
  )
}