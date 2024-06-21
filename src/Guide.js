// https://blog.hubspot.fr/website/page-accueil-site-web
import React from 'react'
import homepage1 from "./images/homepage.png"
import homepage2 from "./images/homepage2.png"
import "./styleCSS/guide.css"
export default function Guide() {
  return (
    <>

        <h1 align="center">Guide du Site Web</h1>

            <h2 >Homepage</h2>
        <div class="guide-section">
          <div id='imgAc'>
            <img src={homepage1} alt="Capture d'écran 1"/>
            <img src={homepage2} alt="Capture d'écran 1"/>
            <img src="capture1.jpg" alt="Capture d'écran 1"/>
          </div>
            
            <p>The homepage showcases the site's activity. It provides just enough information to entice the reader to navigate through the various pages to learn more. It must be well-crafted, attractive, and offer quality content. The homepage should also meet certain design and usability standards to convert visitors.</p>
        </div>

            <h2>Capture d'écran 2</h2>
        <div class="guide-section">
            <img src="capture2.jpg" alt="Capture d'écran 2"/>
            <p>Description de la deuxième capture d'écran. Fournissez des détails sur cette étape ou fonctionnalité spécifique.</p>
        </div>

            <h2>Capture d'écran 3</h2>
        <div class="guide-section">
            <img src="capture3.jpg" alt="Capture d'écran 3"/>
            <p>Description de la troisième capture d'écran. Ajoutez des informations supplémentaires si nécessaire.</p>
        </div>

    </>
  )
}
