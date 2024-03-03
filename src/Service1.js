import React from 'react'
import "./styleCSS/service1.css"
import PetitLogo from "./images/logo.png"
import GrandLogo from "./images/LogoComplet.png"

export default function Service2() {
  let changeColorInp=()=>{
    let divB=document.getElementById("inp-img-serv1")
    divB.style.border="solid 1px var(--violet)"
    divB.style.boxShadow="1px 1px 5px var(--violet)"
    divB.style.transition="0.6s"

  }
  let resetColor=()=>{
    let divB=document.getElementById("inp-img-serv1")
    divB.style.border="solid 1px #909090"
    divB.style.boxShadow="none"

  }
  return (
    <div >
      <div>
        
            <div id='grand-logo'>
                    <img src={GrandLogo} width={"500px"} height={"500px"} />
            </div>
            <div id='titre-p-serv1'>
                <p>Project Description</p>
            </div>
            <div id='contenu-p-serv1'>
              <div id='inp-img-serv1'>
                <textarea onBlur={resetColor} onFocus={changeColorInp} id='input-srv1' type="text" placeholder="Ajoutez votre projet" />
                <img src={PetitLogo} id="logo-serv1"/>
              </div>
            <div>
      
    </div>
            </div>
      </div>
    </div>
    
  )
}
