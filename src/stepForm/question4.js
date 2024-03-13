import React from 'react'
import GrandLogo from "../images/LogoComplet.png"
import "../styleCSS/questions.css"
import "../styleCSS/service2.css"
import {Component} from "react"
export default class question4 extends Component {
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
            <div id='grand-logo'>
                    <img src={GrandLogo} width={"500px"} height={"500px"} />
                </div>
                <div id='titre-p-serv2'>
                    <p>Respond For a Precise Answer</p>
                </div>
            </div>
        </div>
        <div class="Container-barre-serv2">
            <div class="question1-container">
                <p id='title-q'>If the project already has alternative approaches that you prefer students to avoid, please mention them :</p>
                <div id='inp-q-container'>
                    <textarea name='question6' onChange={inputChange('question6')} value={values.question6} className="inp-q" placeholder="Are there any alternative approaches to the project that you would like students to avoid ?"/>
                </div>
                <div id='progress-q-container'>
                    <div id='progress-line-q'>
                    <div className='line' style={{backgroundColor:'var(--violet)' , borderRadius:"25px",width:"60%"}}></div>
                    </div>
                    <p id='progress-num-q'>60 %</p>
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