import React from 'react'
import {Component} from "react"
import GrandLogo from "../images/LogoComplet.png"
import "../styleCSS/questions.css"
import "../styleCSS/service2.css"
export default class confirm extends Component {
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
        const {values:{question1,question2,question3,question4,question5,question6,question7,question8,question9,question10,question11,question12}}=this.props
        return (
            <>
            <div style={{ marginBottom:"20%"}}>
                <div>
                    <div>
                        <div id='titre-p-serv2'>
                        <p style={{color:"var(--violet)"}}>Result For The Personnalitie Test</p>
                        </div>
                    </div>
                </div>
                <div class="Container-barre-serv2">
                    <p>question1 : {question1}</p>
                    <p>question2 : {question2}</p>
                    <p>question3 : {question3}</p>
                    <p>question4 : {question4}</p>
                    <p>question5 : {question5}</p>
                    <p>question6 : {question6}</p>
                    <p>question7 : {question7}</p>
                    <p>question8 : {question8}</p>
                    <p>question9 : {question9}</p>
                    <p>question10 : {question10}</p>
                    <p>question11 : {question11}</p>
                    <p>question12 : {question12}</p>
                <div id='buttons-serv2'>
                    <button class="previous-button" onClick={this.back}>Previous</button>
                    <button class="next-button" >Generate</button>
                </div>
                </div>
                </div>
            </>
        )
    }
}