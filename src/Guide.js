// https://blog.hubspot.fr/website/page-accueil-site-web
import React from 'react'
import homepage1 from "./images/homepage1.png"
import homepage2 from "./images/homepage2.png"
import homepage3 from "./images/homepage3.png"
import ser1 from "./images/ser1.png"
import ser2 from "./images/ser2.png"
import test from "./images/test.png"
import testresult from "./images/testresult.png"
import "./styleCSS/guide.css"
export default function Guide() {
  return (
    <div style={{display:"flex" , justifyContent:"center" , marginTop:"5%" , marginBottom:"5%"}}>

    <div style={{width:"85%", display:"flex" , flexDirection:"column" , justifyContent:"space-evenly"}}>

        <h1 align="center" style={{color:"var(--blackV)" , marginBottom:"5%"}}>Guide du Site Web</h1>

            <h2 style={{color:"var(--violet)"}}>Homepage</h2>
        <div class="guide-section">
          <div id='imgAc'> 
            <img src={homepage1} width={"300px"} alt="Capture d'écran 1"/>
            <img src={homepage2} width={"300px"} alt="Capture d'écran 1"/>
            <img src={homepage3} width={"300px"} alt="Capture d'écran 1"/>
            
          </div>
            
            <p style={{marginRight:"5%",marginTop:"3%",marginLeft:"5%"}}>The homepage showcases the site's activity. It provides just enough information to entice the reader to navigate through the various pages to learn more. It must be well-crafted, attractive, and offer quality content. The homepage should also meet certain design and usability standards to convert visitors.</p>
        </div>

            <h2 style={{color:"var(--violet)"}}>Services pages</h2>
        <div class="guide-section">
          <div id='imgAc'>
            <img src={ser1} width={"300px"} />
            <img src={ser2} width={"300px"} />            
          </div>
            <p style={{marginRight:"5%",marginTop:"3%",marginLeft:"5%"}}>
            To receive the best support for your project, you have two options. You can either provide general information on the objectives, constraints and expectations of your project, which will allow us to offer a response tailored to your overall needs. Alternatively, for a more precise and accurate response, you can answer specific questions on our website, providing detailed information that allows us to offer personalized and comprehensive support. Your cooperation in providing as much detail as possible will help us serve you better.</p>        </div>

            <h2 style={{color:"var(--violet)"}}>Test Page</h2>
        <div class="guide-section">
            <img src={test} width={"300px"} />
            <p style={{marginRight:"5%",marginTop:"3%",marginLeft:"5%"}}>Discover more about yourself with our interactive personality test. This page allows you to explore various aspects of your personality through a series of engaging questions. By completing the test, you'll gain insights into your character traits, strengths, and preferences. Whether for personal growth or just for fun, our personality test provides a fascinating glimpse into what makes you unique.</p>
        </div>

            <h2 style={{color:"var(--violet)"}}>Result test Page </h2>
        <div class="guide-section">
            <img src={testresult} width={"300px"} />
            <p style={{marginRight:"5%",marginTop:"3%",marginLeft:"5%"}}>A personality results page could be designed where users enter the name of a student and their personality traits to receive a final team role assignment. This interactive page would provide a user-friendly interface where users input the required information and receive personalized feedback based on these inputs. For instance, after entering multiple students and their personality traits, the system could assign specific roles within a hypothetical team, highlighting how their individual skills could complement each other to achieve common goals.</p>
        </div>

    </div>
    </div>
  )
}
