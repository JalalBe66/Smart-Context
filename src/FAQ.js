import React, { useState } from 'react';
import "./styleCSS/FAQ.css";
export default function FAQ() {
  const [displayPanel1, setDisplayPanel1] = useState(false);
  const [displayPanel2, setDisplayPanel2] = useState(false);
  const [displayPanel3, setDisplayPanel3] = useState(false);

  const togglePanel1 = () => {
    setDisplayPanel1(!displayPanel1);
  };

  const togglePanel2 = () => {
    setDisplayPanel2(!displayPanel2);
  };
  const togglePanel3 = () => {
    setDisplayPanel3(!displayPanel3);
  };

  return (
    
<div className="FAQ-container" style={{marginBottom:"10%",marginTop:"10%"}}>
  <div className="faq">
    <button className="accordion-serv1" onClick={togglePanel1}>
      ESL Description ?
      <i></i>
    </button>
    {displayPanel1 && (
      <div className="panel">
        <p>
        Engineering Service Learning (ESL) is a pedagogical approach aimed at preparing students for the demands of the modern workforce within engineering disciplines. It emphasizes practical experience and community service to foster a deeper understanding of the societal impact of engineering work. ESL encourages students to address real-world needs through their projects, promoting social skill development, collaboration, and reflection. By integrating service learning into engineering education, institutions create inclusive and supportive learning environments that align with industry expectations and contribute to societal advancement.
        </p>
      </div>
    )}
  </div>

  <div className="faq">
    <button className="accordion-serv1" onClick={togglePanel2}>
      Benefits of ESL ?
      <i></i>
    </button>
    {displayPanel2 && (
      <div className="panel">
        <p>
        Engineering Service Learning (ESL) offers students practical experience through real-world projects addressing community needs, fostering a deeper understanding of their efforts' purpose and value. It also cultivates social skills through collaboration, enhances community impact, and promotes reflective practice, nurturing a sense of social responsibility and ethical awareness. By integrating ESL, institutions create inclusive learning environments where students and staff collaborate on projects, fostering mutual respect and care while meeting industry demands and societal expectations.
        </p>
      </div>
    )}
  </div>

  <div className="faq">
    <button className="accordion-serv1" onClick={togglePanel3}>
      Why use this platform ?
      <i></i>
    </button>
    {displayPanel3 && (
      <div className="panel">
        <p>
        This platform provides users with access to a vast array of information and knowledge across various subjects, ensuring accurate and detailed answers to inquiries in science, technology, history, and more. Additionally, users can seek personalized assistance and guidance on academic, problem-solving, and writing-related queries. The platform offers convenience, enabling users to access information and support at any time and from any location, streamlining the process of obtaining prompt responses without the need for extensive searches. Interacting with the AI fosters learning and skill development, enhancing knowledge, critical thinking, and problem-solving abilities through meaningful discussions. Furthermore, its accessibility to anyone with an internet connection makes it an invaluable resource for individuals from diverse backgrounds and locations. Overall, this platform serves as a multifaceted tool for accessing information, receiving assistance, and engaging in learning and skill development.
        </p>
      </div>
    )}
  </div>
</div>
  );
}