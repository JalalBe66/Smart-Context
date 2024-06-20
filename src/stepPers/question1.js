import React from 'react'
import {Component} from "react"
import GrandLogo from "../images/LogoComplet.png"
import "../styleCSS/question1.css"
import "../styleCSS/service2.css"
export default class question1 extends Component {
    constructor(props){
        super(props)

    }
    continue=e=>{
        e.preventDefault()
        this.props.nextStep()
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
                        <p id='title-q1'>Student 1</p>
                        <div id='inp-q1-container'>
                            <input name='question1' value={values.question1} onChange={inputChange('question1')} className="inp-q1" placeholder=" Name of student 1"/>
                            <input name='question2' value={values.question2} onChange={inputChange('question2')} className="inp-q1" placeholder=" Personality of student 1"/>
                            
                        </div>
                    </div>
                    <div id='buttons-serv2'>
                        <button class="previous-button" style={{pointeEvents: "none",backgroundColor: 'rgb(159, 155, 155)',cursor: 'no-drop'}}>Previous</button>
                        <button class="next-button" onClick={this.continue}>Next</button>
                    </div>
                </div>
            </div>
        )
    }
}

// import React from 'react'
// import GrandLogo from "../images/LogoComplet.png"
// import "../styleCSS/question1.css"
// import "../styleCSS/service2.css"
// export default function question1() {
//   return (
    
//     <div style={{marginTop:"10%" , marginTop:"20%"}}>
//         <h1>hihih</h1>
//         <div>
//             <div>
//             <div id='grand-logo'>
//                     <img src={GrandLogo} width={"500px"} height={"500px"} />
//                 </div>
//                 <div id='titre-p-serv2'>
//                     <p>Respond For a Precise Answer</p>
//                 </div>
//             </div>
//         </div>
//         <div class="Container-barre-serv2">
//             <div class="question1-container">
//                 <p id='title-q1'>Problématique du projet:</p>
//                 <div id='inp-q1-container'>
//                     <textarea className="inp-q1" placeholder="Quelle est la problématique ou le défi que le projet vise à résoudre ?"/>
//                     <textarea className="inp-q1"placeholder="Quels sont les antécédents ou les événements qui ont conduit à l'identification de ce besoin ?"/>
//                 </div>
//                 <div id='progress-q1-container'>
//                     <div id='progress-line-q1'>

//                     </div>
//                     <p id='progress-num-q1'>0 %</p>
//                 </div>
//             </div>
//             <div id='buttons-serv2'>
//                 <button class="previous-button">Previous</button>
//                 <button class="next-button">Next</button>
//             </div>
//         </div>
//     </div>
// )
// }