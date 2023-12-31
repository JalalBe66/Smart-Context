import React from 'react'
import "./styleCSS/service2.css"
import PetitLogo from "./images/logo.png"
import GrandLogo from "./images/LogoComplet.png"
export default function Service2() {
  return (
    <div>
      <div>
        
            <div id='grand-logo'>
                    <img src={GrandLogo} width={"330px"} />
            </div>
            <div id='disc-services2'>
                <p>Réponse aux Informations Générales:</p>
            </div>
            <div id='disc-contenu-S2'>
              <input type="text" placeholder="Ajouter Votre Projet" />
            <div>
            <img src={PetitLogo} id="lg"/>
      
    </div>
            </div>
      </div>
    </div>
    
  )
}
