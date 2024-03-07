// import React from "react"
// import { useState } from "react"
// import "../styleCSS/header.css"
// import Profile from "../images/user.png"
// import Menu from "../images/menu.png"
// import utilisateur from "../images/utilisateur.png"
// import burger from "../images/burger-bar.png"
// import { Link, NavLink } from "react-router-dom"
// export default function Header(){
//     const [showModal,setshowModal]=useState(false)
//     return(
//         <div id="bigContainer">
//             <div id="top-header">
//                 <div id="logo">
//                 </div>
//                 <div className="icone" >
                    
//                     <button id="btnBurger" onClick={() => { 
//                 setshowModal(true)
//                 }}>
//                         <img id="burger" src={burger} height={"32px"} style={{padding:"4px"}}/>
//                     </button>
//                     <img id="profile" src={utilisateur} height={"56px"} style={{padding:"4px"}}/> 
//                 </div>
                
                
//                 {/* <div id="conn-lang">
//                     <div id="connection">
//                         <div id="option">
//                             <img src={Menu} />
//                         </div>
//                         <div id="profile">
//                             <img src={Profile} />
//                         </div>
//                     </div>
//                 </div> */}
//             </div>
//             {showModal &&(<div id="bottom-header">
//                 <NavLink to="/"><div className="nav-link">Acceuil</div></NavLink>
//                 <div className="services">
//                             <div  className="service">
//                                 <p style={{color:"#717171",fontSize:"14px"}}>Service </p>
//                                 <div class="service-details">
//                                     <div id="service-elem-detail">
//                                         <Link to="Service1"><div>Service 1</div></Link>
//                                         <Link to="Service2"><div>Service 2</div></Link>
                                        
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                 <NavLink to="/FAQ"><div className="nav-link">FAQ</div></NavLink>
//                 <NavLink to="/Contact"><div className="nav-link">Contact</div></NavLink>
//             </div>
//             )}
//         </div>
//     )
// }



import React, { useState } from "react";
import "../styleCSS/header.css";
import Profile from "../images/user.png";
import Menu from "../images/menu.png";
import utilisateur from "../images/utilisateur.png";
import burger from "../images/burger-bar.png";
import close from "../images/annuler.png";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [showModal, setshowModal] = useState(false);

  const toggleMenu = () => {
    setshowModal(!showModal);
  };

  return (
<body>
<div id="bigContainer">
      <div id="top-header">
        <div id="logo"></div>
        <div className="icone">
          <button id="btnBurger" onClick={toggleMenu}>
            <img id="burger" src={burger} height={"32px"} style={{ padding: "4px" }} />
          </button>
          <img id="profile" src={utilisateur} height={"56px"} style={{ padding: "4px" }} />
        </div>
      </div>

      <div id="bottom-header">
          <NavLink to="/">
            <div className="nav-link">Acceuil</div>
          </NavLink>
          <div className="services">
            <div className="service">
              <p style={{ color: "#717171", fontSize: "14px" }}>Service </p>
              <div class="service-details">
                <div id="service-elem-detail">
                  <Link to="Service1">
                    <div>Service 1</div>
                  </Link>
                  <Link to="Service2">
                    <div>Service 2</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <NavLink to="/FAQ">
            <div className="nav-link">FAQ</div>
          </NavLink>
          <NavLink to="/Contact">
            <div className="nav-link">Contact</div>
          </NavLink>
        </div>

      {showModal && (
        <div id="fixed">
           <div id="first-child">
            <button id="btnBurger" onClick={() => { setshowModal(false) }}>
                <img src={close} height={"20px"}/>
            </button>
            </div> <br />
            
          <NavLink to="/">
            <div className="nav-link">Acceuil</div>
          </NavLink>
          <div className="services">
            <div className="service">
              <p >Service </p>
              <div class="service-details">
                <div id="service-elem-detail">
                  <Link to="Service1">
                    <div>Service 1</div>
                  </Link>
                  <Link to="Service2">
                    <div>Service 2</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <NavLink to="/FAQ">
            <div className="nav-link">FAQ</div>
          </NavLink>
          <NavLink to="/Contact">
            <div className="nav-link">Contact</div>
          </NavLink>
        </div>
      )}
    </div>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
    
  );
}

