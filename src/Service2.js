import React from 'react'
import { useState } from 'react'
import GrandLogo from "./images/LogoComplet.png"
import Q1 from "./question1"
import "./styleCSS/service2.css"
export default function Service1() {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  const sendMessage = () => {
    if (userInput.trim() !== '') {
      setMessages([...messages, { text: userInput, sender: 'user' }]);
      // Simulate AI response (replace this with your actual API call to ChatGPT)
      setMessages([...messages, { text: 'AI response', sender: 'ai' }]);
      setUserInput('');
    }
  };
  return (
    // <div style={{marginTop:"10%" , marginBottom:"20%"}}>
    //     <div>
    //         <div>
    //         <div id='grand-logo'>
    //                 <img src={GrandLogo} width={"500px"} height={"500px"} />
    //             </div>
    //             <div id='titre-p-serv2'>
    //                 <p>Respond For a Precise Answer</p>
    //             </div>
    //         </div>
    //     </div>
    //     <div class="Container-barre-serv2">
    //       <Q1/>
    //       <div id='buttons-serv2'>
    //         <button class="previous-button">Previous</button>
    //         <button class="next-button">Next</button>
    //       </div>
    //     </div>


    // </div  >
    <>
      <div className="chat-container">
        <div className="chat">
          <div className="chat-header">
          <img src={GrandLogo} id='imgL' />
            <h2>ChatGPT</h2>
          </div>
          <div className="chat-messages">
            {messages.map((message, index) => (
              <div key={index} className={message.sender}>
                {message.text}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <textarea
              type="text"
              placeholder="Type your message..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      </div>
    </>
  )
}