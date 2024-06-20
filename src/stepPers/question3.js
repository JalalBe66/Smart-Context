import React from 'react'
import GrandLogo from "../images/LogoComplet.png"
import {Component} from "react"
import "../styleCSS/questions.css"
import "../styleCSS/service2.css"
export default class question3 extends Component {
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
        const {values,inputChange}=this.props;
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
                <p id='title-q'>Student 3</p>
                <div id='inp-q-container'>
                    <input name='question5' onChange={inputChange('question5')} value={values.question5} className="inp-q" placeholder="Name of student 3"/>
                    <input name='question6' onChange={inputChange('question6')} value={values.question6} className="inp-q" placeholder="Personality of student 3"/>
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