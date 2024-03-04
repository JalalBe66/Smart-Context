import React, { useState } from 'react';
import GrandLogo from "./images/logo.png";
import Q1 from "./question1";
import "./styleCSS/service1.css";

export default function Service1() {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  const sendMessage = () => {
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
    if (userInput.trim() !== '') {
      setMessages([...messages, { text: userInput, sender: 'user' }]);
      // Simulate AI response (replace this with your actual API call to ChatGPT)
      setMessages([...messages, { text: 'AI response', sender: 'ai' }]);
      setUserInput('');
      input.value = "";
    }
  };

  return (
    <div className="chat-container">
      <div className="chat">
        <div className="chat-header">
          <img src={GrandLogo} alt="logo" id='imgL' />
          <h2>ESL AI</h2>
        </div>
        <div className="chat-messages">
          {messages.map((message, index) => (
            <div key={index} id='divR' className={message.sender}>
              <div id='divRes'>{message.text}</div>
            </div>
          ))}
        </div>
        <div className="chat-input">
          <textarea
            type="text"
            id='input-v'
            placeholder="Type your message..."
            onChange={(e) => setUserInput(e.target.value)}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}
