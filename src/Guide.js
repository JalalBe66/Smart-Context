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
    <>

        <h1 align="center">Guide du Site Web</h1>

            <h2 >Homepage</h2>
        <div class="guide-section">
          <div id='imgAc'>
            <img src={homepage1} width={"300px"} alt="Capture d'écran 1"/>
            <img src={homepage2} width={"300px"} alt="Capture d'écran 1"/>
            <img src={homepage3} width={"300px"} alt="Capture d'écran 1"/>
            
          </div>
            
            <p style={{marginRight:"5%",marginTop:"3%",marginLeft:"5%"}}>The homepage showcases the site's activity. It provides just enough information to entice the reader to navigate through the various pages to learn more. It must be well-crafted, attractive, and offer quality content. The homepage should also meet certain design and usability standards to convert visitors.</p>
        </div>

            <h2>Services pages</h2>
        <div class="guide-section">
          <div id='imgAc'>
            <img src={ser1} width={"300px"} />
            <img src={ser2} width={"300px"} />            
          </div>
            <p style={{marginRight:"5%",marginTop:"3%",marginLeft:"5%"}}>
            Pour recevoir la meilleure assistance pour votre projet, vous avez deux options. Vous pouvez soit fournir des informations générales sur les objectifs, les contraintes et les attentes de votre projet, ce qui nous permettra d'offrir une réponse adaptée à vos besoins globaux. Alternativement, pour une réponse plus précise et exacte, vous pouvez répondre aux questions spécifiques sur notre site web, en fournissant des informations détaillées qui nous permettent de proposer une assistance personnalisée et complète. Votre coopération en fournissant le plus de détails possible nous aidera à mieux vous servir.</p>
        </div>

            <h2>Test Page</h2>
        <div class="guide-section">
            <img src={test} width={"300px"} />
            <p style={{marginRight:"5%",marginTop:"3%",marginLeft:"5%"}}>Discover more about yourself with our interactive personality test. This page allows you to explore various aspects of your personality through a series of engaging questions. By completing the test, you'll gain insights into your character traits, strengths, and preferences. Whether for personal growth or just for fun, our personality test provides a fascinating glimpse into what makes you unique.</p>
        </div>

            <h2>Result test Page </h2>
        <div class="guide-section">
            <img src={testresult} width={"300px"} />
            <p style={{marginRight:"5%",marginTop:"3%",marginLeft:"5%"}}>A personality results page could be designed where users enter the name of a student and their personality traits to receive a final team role assignment. This interactive page would provide a user-friendly interface where users input the required information and receive personalized feedback based on these inputs. For instance, after entering multiple students and their personality traits, the system could assign specific roles within a hypothetical team, highlighting how their individual skills could complement each other to achieve common goals.</p>
        </div>

    </>
  )
}
