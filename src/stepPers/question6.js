import React from 'react'
import GrandLogo from "../images/LogoComplet.png"
import "../styleCSS/questions.css"
import "../styleCSS/service2.css"
import {Component} from "react"
export default class question5 extends Component {
    constructor(props){
        super(props)
    }
    continue=e=>{
        e.preventDefault()
        this.props.nextStep()
    }
    back=e=>{
        e.preventDefault()
        this.props.prevStep()
    }
    render(){
        const {values,inputChange}=this.props
  return (
    
    <div style={{ marginBottom:"20%"}}>
        <div>
            <div>
            
                <div id='titre-p-serv2'>
                <p style={{color:"var(--violet)"}}>Result Of The Personnality Test</p>
                </div>
            </div>
        </div>
        <div class="Container-barre-serv2">
            <div class="question1-container">
                <p id='title-q'>Student 6</p>
                <div id='inp-q-container'>
                    <input name='question11' onChange={inputChange('question11')} value={values.question11} className="inp-q" placeholder="Name of student 6"/>
                    <input name='question12' onChange={inputChange('question12')} value={values.question12} className="inp-q" placeholder="Personality of student 6"/>
                </div>
            </div>
            <div id='buttons-serv2'>
                <button class="previous-button" onClick={this.back}>Previous</button>
                <button class="next-button" onClick={this.continue}>Next</button>
            </div>
        </div>
    </div>
)
}
}