import React from "react"
import { Link, NavLink } from "react-router-dom";
import logoComplet from "../images/logo.png"
import user from "../images/utilisateur.png"
import menu from "../images/menu.png"
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
                            <img src={logoComplet} height={"66px"} alt="Logo" />
                        </i>
                    </a>
                </NavLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>

            <div className="col-10"></div>

            <div className="col-1 profile-menu-container d-flex justify-content-end align-items-center">
                <div className="col-6 d-flex justify-content-end">
                    <button className="btnMenu" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
                        <i><img src={menu} height={"52px"}  alt="Menu" /></i>
                    </button>
                </div>
                
                <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                    <i><img src={user} height={"66px"} alt="User" /></i>
                </button>
                <form class="dropdown-menu p-4 custom-dropdown-form dropdown-menu-end">
                    <div class="mb-3">
                        <label for="exampleDropdownFormEmail2" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleDropdownFormPassword2" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleDropdownFormPassword2" placeholder="Password"/>
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="dropdownCheck2"/>
                        <label class="form-check-label" for="dropdownCheck2">Remember me</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Sign in</button>
                </form>
            </div>

            <div className="col-3"/>

            <div className="col-4 d-flex justify-content-center align-items-center">
                <div class="collapse navbar-collapse">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <NavLink to="/" className="nav-link" activeClassName="active" exact>
                                Acceuil
                            </NavLink>
                        </li>
                        <div className="col-3"/>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Services
                            </a>
                            <ul class="dropdown-menu">
                                <li>
                                    <Link to="/Service1" class="dropdown-item">
                                        Service 1
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/Service2" class="dropdown-item">
                                        Service 2
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <div className="col-3"/>
                        <li class="nav-item">
                            <NavLink to="/FAQ" className="nav-link">
                                FAQ
                            </NavLink>
                        </li>
                        <div className="col-3"/>
                        <li class="nav-item">
                            <NavLink to="/Contact" className="nav-link">
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    </div>

    <hr />
</nav>

{/* <button class="btnMenu btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
    <i><img src={menu} height={"66px"} /></i>
</button> */}

<div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Offcanvas with body scrolling</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <h1>Menu</h1>
    <div className="col-4">
    
        <ul class="navbar-nav flex-column me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <NavLink to="/">
                    <a class="nav-link active" aria-current="page" href="#">Acceuil</a>
                </NavLink>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Services
                </a>
                <ul class="dropdown-menu">
                    <li><Link to="Service1"><a class="dropdown-item" href="#">Service 1</a></Link></li>
                    <li><Link to="Service2"><a class="dropdown-item" href="#">Service 2</a></Link></li>
                </ul>
            </li>
            <li class="nav-item">
                <NavLink to="/FAQ">
                    <a class="nav-link" href="#">FAQ</a>
                </NavLink>
            </li>
            <li class="nav-item">
                <NavLink to="/Contact">
                    <a class="nav-link" href="#">Contact</a>
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