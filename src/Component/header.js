import React from "react"
import "../styleCSS/header.css"
import Langue from "../images/langue.png"
import Profile from "../images/user.png"
import Menu from "../images/menu.png"
import { NavLink } from "react-router-dom"
export default function Header(){
    return(
        <div id="bigContainer">
            <div id="top-header">
                <div id="logo">
                </div>
                <div id="conn-lang">
                    <div id="langue">
                        <img src={Langue}  />
                    </div>
                    <div id="connection">
                        <div id="option">
                            <img src={Menu} />
                        </div>
                        <div id="profile">
                            <img src={Profile} />
                        </div>
                    </div>
                </div>
            </div>
            <div id="bottom-header">
                <NavLink to="/"><div className="nav-link">Acceuil</div></NavLink>
                <div className="nav-link">Services</div>
                <NavLink to="/FAQ"><div className="nav-link">FAQ</div></NavLink>
                <NavLink to="/Contact"><div className="nav-link">Contact</div></NavLink>
            </div>
        </div>
    )
}