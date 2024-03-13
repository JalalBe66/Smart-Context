import React from 'react'
import GrandLogo from "./images/logo.png"
import Question from "./images/entrevue.png"
import Plume from "./images/ecrit.png"
import IMG1 from "./images/img1.jpg"
import IMG2 from "./images/img2.jpg"
import IMG3 from "./images/img3.jpg"
import "./styleCSS/accueil.css"
import { Link } from 'react-router-dom'
export default function Accueil() {
    return (
        <>
            <div id='accueil-container'>
            <div id="carouselExampleIndicators"  style={{width:"100%",height:"575px",display:"flex" ,marginBottom:"10%"}} class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators ">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={IMG1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={IMG2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={IMG3} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span style={{backgroundColor:"black" , borderRadius:"50%" ,width:"35px", height:"35px"}}  class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span style={{backgroundColor:"black" , borderRadius:"50%" ,width:"35px", height:"35px"}} class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
                <div id='disc-title'>
                    DESCRIPTION
                </div>
                <div id='disc-contenu'>
                <p>Discover our innovative website based on service learning. Transform your needs and challenges into precise and well-defined solutions. Our intuitive platform guides you step by step to identify your specific needs and develop the necessary skills. Whether you are an individual seeking professional development or a company looking for effective solutions, our website provides you with the tools and resources to confidently meet challenges. Join us now to achieve your goals in a targeted and successful manner..</p>
                </div>
                <div id='fonct-title'>
                    FONCTIONNEMENT
                </div>
                <div id='fonct-contenu'>
                    <div class='serv'>
                        <div class='serv-icon'>
                            <img src={Plume} width={"70px"}/>
                        </div>
                        <div class='serv-title'>
                        Based on the general information about your project, here is the adapted response:
                        
                        
                        </div>
                        <div class='serv-contenu'>
                            <p>To receive a response that caters to your needs, please provide general information about your project. While this may not be as specific as answering specific questions, these details will help us understand your overall requirements. Please provide as many details as possible about the goals, constraints, and expectations of your project. We will do our best to provide you with a response that is tailored to your situation. Thank you!</p>
                        </div>
                        <div class='serv-button' ><Link className='serv-button-opt' to="Service1">Access the service</Link></div>
                    </div>
                    <div id='sep'></div>
                    <div class='serv'>
                        <div class='serv-icon'>
                        <img src={Question} width={"70"}/>
                        </div>
                        <div class='serv-title'>
                        Answer for a precise response:
                        <div style={{height:"65px"}}></div>
                        </div>
                        <div class='serv-contenu'>
                            <p>To obtain a precise and accurate response regarding your project, please answer the specific questions posed on our website. By providing detailed information about your project, we can offer you personalized and tailored assistance to meet your needs. Please carefully fill out the required fields and provide all relevant information. We are committed to providing you with a comprehensive response based on the information you provide. Thank you for your cooperation!</p>
                        </div>
                        <div class='serv-button'><Link className='serv-button-opt' to="Service2">Access the service</Link></div>
                    </div>
                </div>
            </div>
        </>
)
}
