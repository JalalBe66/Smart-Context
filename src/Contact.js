import React, { useState } from 'react';
import "./styleCSS/Contact.css"
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
    const submitForm = () => {
      if (!name || !email || !subject || !message) {
        alert('Please fill in all fields');
        return;
      }
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

    return (
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject:</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={subject}
              onChange={handleChange}
              required
            />
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
          </div>
          <button type="button" className="submit-btn" onClick={submitForm}>
            Submit
          </button>
        </form>
      </div>
    );
  };

  return (
    <>
      <ContactForm />
    </>
  );
}
