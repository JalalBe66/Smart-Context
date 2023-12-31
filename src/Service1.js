import React from 'react'
import GrandLogo from "./images/LogoComplet.png"
import "./styleCSS/service1.css"
export default function Service1() {
  return (
    <div>
        <div>
            <div>
            <div id='grand-logo'>
                    <img src={GrandLogo} width={"330px"} />
                </div>
                <div id='disc-services1'>
                    <p>Répondez Pour Une Réponse Précise:</p>
                </div>
            </div>
        </div>
    </div>
  )
}