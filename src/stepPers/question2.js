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

                        <div id='titre-p-serv2'>
                        <p style={{color:"var(--violet)"}}>Result Of The Personnality Test</p>
                        </div>
                    </div>
                </div>
                <div class="Container-barre-serv2">
                    <div class="question1-container">
                        <p id='title-q'>Student 2</p>
                        <div id='inp-q-container'>
                            <input name='question3' onChange={inputChange('question3')} className="inp-q" placeholder="Name of student 2" value={values.question3}/>
                            <input name='question4' onChange={inputChange('question4')} className="inp-q" placeholder="Personality of student 2" value={values.question4}/>
                            
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