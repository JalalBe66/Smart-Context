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
    
    <div style={{marginTop:"10%" , marginBottom:"20%"}}>
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
                <p id='title-q'>Describe the problem of the project :</p>
                <div id='inp-q-container'>
                    <textarea name='question5' onChange={inputChange('question5')} value={values.question5} className="inp-q" placeholder="What is the nature or description of the problem that the project aims to address  ?"/>
                </div>
                <div id='progress-q-container'>
                    <div id='progress-line-q'>
                        <div className='line' style={{backgroundColor:'var(--violet)' , borderRadius:"25px",width:"40%"}}></div>
                    </div>
                    <p id='progress-num-q'>40 %</p>
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