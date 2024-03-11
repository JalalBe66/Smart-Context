import React from "react"
import { Link, NavLink } from "react-router-dom";
import logoComplet from "../images/logo.png"
import user from "../images/utilisateur.png"
import menu from "../images/menu.png"
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import "../styleCSS/newHeader.css"
function New(){
    return(
        <>
                {/* <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid second-header">
                        <div className="row first-header">
                        
                            <div className="col-10">
                            
                                <a class="navbar-brand" href="#"><i><img src={logoComplet} height={"66px"}/></i></a>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                            </div>
                            
                            
                            <div className="col-2">
                                anas
                            </div>
                                
                        <div className="row ">
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class=" navbar-nav me-auto mb-2 mb-lg-0">
                                     <div className="col-10"/>   
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                                    </li>
                                    <div className="col-4"/>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Services
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#">Action</a></li>
                                            <li><a class="dropdown-item" href="#">Another action</a></li>
                                        </ul>
                                    </li>
                                    <div className="col-4"/>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">FAQ</a>
                                    </li>
                                    <div className="col-4"/>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Contact</a>
                                    </li>
                        
                                </ul>
                            </div>
                        </div>    
                            
                                
                        </div>
                        
                    </div>
                </nav> */}
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
        <div className="row first-header">

            <div className="col-1 d-flex align-items-center">
                <NavLink to="/">
                    <a class="navbar-brand" href="#">
                        <i>
                            <img src={logoComplet} height={"66px"} />
                        </i>
                    </a>
                </NavLink>

            </div>
            <div className="col-10"></div>
            <div className="col-1 profile d-flex justify-content-end align-items-center">
  <a className="navbar-brand" href="#">
    <i><img src={user} height={"66px"} alt="User" /></i>
  </a>
  <button
    className="navbar-toggler"
    type="button"
    data-bs-toggle="offcanvas"
    data-bs-target="#offcanvasScrolling"
    aria-controls="offcanvasScrolling"
  >
    <span className="navbar-toggler-icon"></span>
  </button>
</div>
            <div className="col-12"/>
            <div className="col-5 d-flex justify-content-center align-items-center">
                <div class="collapse navbar-collapse">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <div className="col-5"/>
                        <li class="nav-item">
                            <NavLink to="/">
                                <a id="link" class="nav-link active" aria-current="page" href="#">Acceuil</a>
                            </NavLink>    
                        </li>
                        <div className="col-8"/>
                        <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Services
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li><Link to="Service1"><a  id="link-serv" class="dropdown-item" href="#">Service 1</a></Link></li>
                                            <li><Link  to="Service2"><a id="link-serv" class="dropdown-item" href="#">Service 2</a></Link></li>
                                        </ul>
                        </li>
                        <div className="col-8"/>
                        <li class="nav-item">
                            <NavLink to="/FAQ">    
                                <a id="link" class="nav-link" href="#">FAQ</a>
                            </NavLink>    
                        </li>
                        <div className="col-8"/>
                        <li class="nav-item">
                            <NavLink  to="/Contact">
                                <a id="link" class="nav-link" href="#">Contact</a>
                            </NavLink>    
                            
                        </li>
                    </ul>
                </div>
            </div>
                
        </div>
        
    </div>
    
    <hr/>
</nav>
{/* <button class="btnMenu btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
    <i><img src={menu} height={"66px"} /></i>
</button> */}

<div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  <div class="offcanvas-header">
    <h5 style={{color:"var(--violet)"}} class="offcanvas-title" id="offcanvasScrollingLabel">Menu</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    
    <div className="col-4">
    
        <ul class="navbar-nav flex-column me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <NavLink to="/">
                    <a id="link" class="nav-link active" aria-current="page" href="#">Acceuil</a>
                </NavLink>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Services
                </a>
                <ul class="dropdown-menu">
                    <li><Link  to="Service1"><a id="link-serv" class="dropdown-item" href="#">Service 1</a></Link></li>
                    <li><Link  to="Service2"><a id="link-serv" class="dropdown-item" href="#">Service 2</a></Link></li>
                </ul>
            </li>
            <li class="nav-item">
                <NavLink to="/FAQ">
                    <a id="link" class="nav-link" href="#">FAQ</a>
                </NavLink>
            </li>
            <li class="nav-item">
                <NavLink to="/Contact">
                    <a id="link" class="nav-link" href="#">Contact</a>
                </NavLink>
            </li>
        </ul>
    
</div>

  </div>
</div>












                
        </>
    )
}
export default New