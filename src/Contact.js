import React, { useState } from 'react';
import "./styleCSS/Contact.css"
import { hover } from '@testing-library/user-event/dist/hover';
export default function Contact() {
  const ContactForm = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    const { name, email, subject, message } = formData;

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const validName=()=>{
      let flag=false
      let error_text=document.getElementById("contact-inp-name")
      let inp=document.getElementById("name").value
      if(inp.length==0){
        error_text.innerHTML="Erreur : Saisez votre nom"
      }
      else{
        error_text.innerHTML=""
        flag=true
      }
      return flag
    }
    const validEmail=()=>{
      let flag=false
      let error_text=document.getElementById("contact-inp-email")
      let inp=document.getElementById("email").value
      if(inp.length==0){
        error_text.innerHTML="Erreur : Saisez votre email"
      }
      else{
        error_text.innerHTML=""
        flag=true
      }
      return flag
    }
    const validSubject=()=>{
      let flag=false
      let error_text=document.getElementById("contact-inp-subject")
      let inp=document.getElementById("subject").value
      if(inp.length==0){
        error_text.innerHTML="Erreur : Saisez votre subject"
        
      }
      else{
        error_text.innerHTML=""
        flag=true
      }
      return flag
    }

    const submitForm = () => {
      console.log('Name: ' + name);
      console.log('Email: ' + email);
      console.log('Subject: ' + subject);
      console.log('Message: ' + message);
      // Optionally, reset the form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
            });
          };
        const allFull=()=>{
          let button=document.getElementsByClassName("submit-btn")[0]
          if(validName() && validEmail() && validSubject()){
            button.style.backgroundColor="#FF385C"
            button.style.cursor="pointer"
            button.style.pointerEvents="all"
          }
          else{
            button.style.backgroundColor="rgb(159, 155, 155)"
            button.style.pointerEvents="none"
          }
        }


    return (
      <div className="contact-form">
        <h2 style={{textAlign:"center" , fontSize:"220%", color:"#ff385d" , marginBottom:"50px"}}>Contact Us</h2>
        <form>
          <div className="form-group">
            
            <label htmlFor="name">Name:</label>
            <input 
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(event) => {
                handleChange(event);
                validName(event);
              allFull(event)}}
                
              required
            />
            <p id='contact-inp-name' className='contact-error'></p>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(event) => {
                handleChange(event);
                validEmail(event);
                allFull(event)}}
              required
            />
            <p id='contact-inp-email' className='contact-error'></p>
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject:</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={subject}
              onChange={(event) => {
                handleChange(event);
                validSubject(event);
                allFull(event)}}
              required
            />
            <p id='contact-inp-subject' className='contact-error'></p>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={message}
              onChange={handleChange}
              required
            ></textarea>
            <p id='contact-inp-massage'  className='contact-error'></p>
          </div>
          <button type="button" className="submit-btn" onClick={submitForm} >
            Submit
          </button>
        </form>
      </div>
    );
  };

  return (
    <div style={{marginTop:"15%",marginBottom:"15%"}}>
      <ContactForm />
    </div>
  );
}
