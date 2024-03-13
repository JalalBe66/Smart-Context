import React from 'react'
import {Component} from "react"
import GrandLogo from "../images/LogoComplet.png"
import "../styleCSS/questions.css"
import "../styleCSS/service2.css"
export default class question2 extends Component {
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
                        <p id='title-q'>How many students are planned to work on the project, and what is the estimated duration for completing the project :</p>
                        <div id='inp-q-container'>
                            <textarea name='question3' onChange={inputChange('question3')} className="inp-q" placeholder="How many students will work on the project ?" value={values.question3}/>
                            <textarea name='question4' onChange={inputChange('question4')} className="inp-q" placeholder="When is the project expected to start and finish ?" value={values.question4}/>
                        </div>
                        <div id='progress-q-container'>
                            <div id='progress-line-q'>
                                <div style={{backgroundColor:'var(--violet)' , borderRadius:"25px",width:"20%"}}></div>
                            </div>
                            <p id='progress-num-q'>20 %</p>
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