import React, { useState } from 'react';
import GrandLogo from "./images/logo.png";
import Q1 from "./question1";
import "./styleCSS/service1.css";
import ImageFlech from "./images/fleche-droite.png"
import axios from 'axios';
export default function Service1() {
  const [generatedText, setGeneratedText] = useState('');
  const API_KEY = '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';
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
    let changeColorInp=()=>{
    let divB=document.getElementById("full-inp")
    divB.style.border="solid 1px var(--violet)"
    divB.style.boxShadow="1px 1px 5px var(--violet)"
    divB.style.transition="0.6s"

  }
  let resetColor=()=>{
    let divB=document.getElementById("full-inp")
    divB.style.boxShadow="none"
  }
  const sendMessage = async () => {
    if (userInput.trim() !== '') {
        try {
            const response = await axios.post(
                "https://api.openai.com/v1/engines/gpt-3.5-turbo/completions", {
                    model: 'gpt-3.5-turbo',
                    messages: [{ role: 'user', content: userInput }],
                    temperature: 0.3,
                    max_tokens: 2000,
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + API_KEY,
                    }
                }
            );

            let chatDiv = document.getElementsByClassName("chat-messages")[0];
            let input = document.getElementById("input-v");
            let divReq = document.createElement("div");
            let divReqP = document.createElement("div");
            let divP = document.createElement("p");
            divReq.id = "divReq";
            divReqP.id = "divReqP";
            divP.id = "divP";
            divP.innerHTML = userInput;
            divReqP.append(divP);
            divReq.append(divReqP);
            chatDiv.appendChild(divReq);

            const generatedText = response.data.choices[0].message.content;

            setMessages([...messages, { text: userInput, sender: 'user' }]);
            setMessages([...messages, { text: generatedText, sender: 'ai' }]);
            setUserInput('');
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
}



  return (
    <div className="chat-container">
      <div className="chat">
        <div className="chat-header">
          <img src={GrandLogo} alt="logo" id='imgL' />
          <h2>ESL AI</h2>
        </div>
        <div className="chat-messages">
          {messages.map((message, index) => (
            <div key={index} id='divR' >
              <div id='divRes'>{message.text}</div>
            </div>
          ))}
        </div>
        <div className="chat-input">
          <div id='full-inp'>

          <textarea
            type="text"
            onBlur={resetColor} 
            onFocus={changeColorInp}
            id='input-v'
            placeholder="Type your message..."
            onChange={(e) => setUserInput(e.target.value)}
          />
          <div style={{width:"43px",height:"43px",display:"flex"}}><button  id='btn-serv1' onClick={sendMessage}></button></div>
          </div>
        </div>
      </div>
    </div>
  );
}
