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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada odio et dolor lacinia, sed finibus
          nisl varius. Nulla facilisi. Sed vehicula risus in tortor bibendum, a faucibus velit vestibulum. Morbi
          fringilla, quam sed venenatis finibus, eros ligula varius justo, ac lacinia ex enim vitae nisl. Proin eget
          varius lectus. Nulla auctor lobortis metus, vitae fringilla dui dignissim at. Praesent rhoncus felis et massa
          posuere, eu posuere lacus fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
          cubilia curae; Mauris ultricies risus id semper commodo. Aliquam erat volutpat.
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada odio et dolor lacinia, sed finibus
          nisl varius. Nulla facilisi. Sed vehicula risus in tortor bibendum, a faucibus velit vestibulum. Morbi
          fringilla, quam sed venenatis finibus, eros ligula varius justo, ac lacinia ex enim vitae nisl. Proin eget
          varius lectus. Nulla auctor lobortis metus, vitae fringilla dui dignissim at. Praesent rhoncus felis et massa
          posuere, eu posuere lacus fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
          cubilia curae; Mauris ultricies risus id semper commodo. Aliquam erat volutpat.
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada odio et dolor lacinia, sed finibus
          nisl varius. Nulla facilisi. Sed vehicula risus in tortor bibendum, a faucibus velit vestibulum. Morbi
          fringilla, quam sed venenatis finibus, eros ligula varius justo, ac lacinia ex enim vitae nisl. Proin eget
          varius lectus. Nulla auctor lobortis metus, vitae fringilla dui dignissim at. Praesent rhoncus felis et massa
          posuere, eu posuere lacus fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
          cubilia curae; Mauris ultricies risus id semper commodo. Aliquam erat volutpat.
        </p>
      </div>
    )}
  </div>
</div>
  );
}