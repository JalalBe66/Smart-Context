import React, { useState } from 'react';
import "./styleCSS/Contact.css"
import step1 from "./images/step1.png"
import step2 from "./images/step2.png"
import step3 from "./images/step3.png"
import step4 from "./images/step4.png"
import step5 from "./images/step5.png"
import step6 from "./images/step6.png"
import step7 from "./images/step7.png"
import step8 from "./images/step8.png"
import step9 from "./images/step9.png"
import step10 from "./images/step10.png"
import test11 from "./images/test11.png"
import result from "./images/result.png"
import "./styleCSS/test.css"

let Test=()=>{
  return (
    <div style={{ marginBottom:"15%"}}>
      <iframe src="https://www.16personalities.com/fr/test-de-personnalite" title="Contenu externe" width="100%" height="800px"  />
      <h1 style={{textAlign:"center",marginBottom:"8%",color:"var(--blackV)",fontSize:"40px",marginTop:"10%",fontWeight:"bolder"}}>If The Test Page Doesn't Work</h1>
      <h1 style={{marginBottom:"5%" ,fontWeight:'bolder',marginLeft:"3%"}}>Steps to  display the 16 Personalities website on this page</h1>
      <p className='txtS' style={{marginLeft:"3%"}}>To display the 16 Personalities website on this page, follow these steps. Otherwise, you can access the site using this link </p>
      <div style={{display:'flex',flexDirection:"column",textAlign:"center",alignItems:"center"}}>
      
    <img className='imgS' height="400px" width="40%" src={step1} alt=""/>

    <p className='txtS'>Click on the lin "get extension for Microsoft Edge " </p>
    <img className='imgS' height="400px" width="40%" src={step2} alt=""/>

    <p className='txtS'>Search for the Requestly extension and get it. </p>
    <img className='imgS' height="400px" width="40%" src={step3} alt=""/>

    <p className='txtS'>Click on the button skip for now </p>
    <img className='imgS' height="400px" width="40%" src={step4} alt=""/>

    <p className='txtS'>Select an answer and move to the next step.</p>
    <img className='imgS' height="400px" width="40%" src={step5} alt=""/>

    <p className='txtS'>Click on the button modify HTTP headers </p>
    <img className='imgS' height="400px" width="40%" src={step6} alt=""/>
    <p className='txtS'>Click on the link response headers</p>
    <img className='imgS' height="400px" width="40%" src={step7} alt=""/>

    <p className='txtS'>Click on the link override Response Headre </p>
    <img className='imgS' height="400px" width="40%" src={step8} alt=""/>

    <p className='txtS'>For the response header, choose 'X-Frame-Options' and for the value, write 'Allow' </p>
    <img className='imgS' height="400px" width="40%" src={step9} alt=""/>

    <p className='txtS'>Click on the button save rule </p>
    <img className='imgS' height="400px" width="40%" src={step10} alt=""/>

    <p className='txtS'>Copy this link "https://www.16personalities.com/fr/test-de-personnalite" and click on 'Test rule'</p>
    <img className='imgS' height="400px" width="40%" src={test11} alt=""/>
    <p className='txtS'>The expected result</p>
    <img className='imgS' src={result} alt=""/>
      </div>

    


    </div>
  );
}
export default Test
