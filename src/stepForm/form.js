import React from 'react'
import Q1 from "./question1"
import Q2 from "./question2"
import Q3 from "./question3"
import Q4 from "./question4"
import Q5 from "./question5"
import Confirm from "./confirm"
import {Component} from "react" 
export default class form extends Component {
    constructor(props){
        super(props)
        this.state={
            step:1,
            question1:"",
            question2:"",
            question3:"",
            question4:"",
            question5:"",
            question6:"",
            question7:"",
        }
    }
    nextStep =()=>{
        const step=this.state.step
        this.setState({step:step+1})
    }
    prevStep=()=>{
        const step=this.state.step
        this.setState({step:step-1})
    }
    inputChange=input=> e=>{
        this.setState({
            [input]:e.target.value
        })
    }
    render(){
        const step=this.state.step
        const {question1,question2,question3,question4,question5,question6,question7}=this.state
        const values={question1,question2,question3,question4,question5,question6,question7}
        
        switch(step){
            case 1:
                return(
                    <Q1 
                    nextStep={this.nextStep}
                    inputChange={this.inputChange}
                    values={values}
                    />
                )
            case 2:
                return (
                    <Q2
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    inputChange={this.inputChange}
                    values={values}
                    />
                )
            case 3:
                return (
                    <Q3
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    inputChange={this.inputChange}
                    values={values}
                    />
                )
            case 4:
                return (
                    <Q4
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    inputChange={this.inputChange}
                    values={values}
                    />
                )
            case 5:
                return (
                    <Q5
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    inputChange={this.inputChange}
                    values={values}
                    />
                )
            case 6:
                return (
                    <Confirm
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                    />
                )
        }
        
        return (
          <div >
            <h1>{this.state.question1}</h1>
          </div>
        )
    }
}
