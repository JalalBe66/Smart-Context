import React from 'react'
import GrandLogo from "./images/logo.png"
import Question from "./images/entrevue.png"
import Plume from "./images/ecrit.png"
import "./styleCSS/accueil.css"
import { Link } from 'react-router-dom'
export default function Accueil() {
    return (
        <>
            <div id='accueil-container'>
                <div id='grand-logo'>
                    <img src={GrandLogo} width={"330px"} />
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
