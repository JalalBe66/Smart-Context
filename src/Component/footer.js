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
            <h1>Engineering Service Learning </h1>
        </div>
        <div id='desc'>
            <p>Implementing constructivism in engineering education and adapting teaching styles to students' learning styles. </p>
        </div>
        <div id="social-media">
            <div className="media-elem"><img src={FaceBook} /></div>
        </div>
    </div>
    )
}
