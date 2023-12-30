import React from 'react'
import "../styleCSS/footer.css"
import FaceBook from "../images/facebook.png"
import Linkedin from "../images/linkedin.png"
import Twitter from "../images/twitter.png"
import Instagram from "../images/instagram.png"
export default function Footer() {
    return (
    <div id='bigContaine'>
        <div id='text-top'>
            <h1>L'apprentissage Par Services D'ingénierie</h1>
        </div>
        <div id='desc'>
            <p>Mettre en ouvre un constructivisme dans la formation en ingénierie et d’adapter les styles d’ensignement aux style d'apprentissage des étudiants </p>
        </div>
        <div id="social-media">
            <div className="media-elem"><img src={FaceBook} /></div>
            <div className='media-elem'><img src={Instagram} /></div>
            <div className='media-elem'><img src={Twitter} /></div>
            <div className='media-elem'><img src={Linkedin}/></div>
        </div>
    </div>
    )
}
