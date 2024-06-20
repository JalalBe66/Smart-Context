import React, { useRef } from 'react';
import GrandLogo from "../images/LogoComplet.png";
import "../styleCSS/question1.css";
import "../styleCSS/service2.css";

export default function Personnality() {
  const containerRef = useRef(null);

  const addNew = () => {
    // Création du nouvel élément div avec la classe Container-barre-serv2
    const newContainer = document.createElement('div');
    newContainer.className = 'Container-barre-serv2';
    newContainer.style.marginTop = '3%';

    // add buttons containner 
    const buttonContainer = document.createElement('div');
    buttonContainer.id = 'buttons-serv2';

    // Création et ajout du bouton Add
    const buttonAdd = document.createElement('button');
    buttonAdd.className = 'previous-button';
    buttonAdd.textContent = 'Add';
    buttonAdd.onclick = addNew;

    buttonAdd.style.backgroundColor = 'var(--violet)';

    // Création et ajout du bouton Result
    const buttonResult = document.createElement('button');
    buttonResult.className = 'next-button';
    buttonResult.textContent = 'Result';
    buttonResult.onclick = () => console.log('Result');
    
    // Création de l'élément div pour la question1-container
    const questionContainer = document.createElement('div');
    questionContainer.className = 'question1-container';

    // Création de l'élément p pour le titre de la question
    const title = document.createElement('p');
    title.id = 'title-q1';
    title.textContent = 'Student 1';

    // Création de l'élément div pour inp-q1-container
    const inpContainer = document.createElement('div');
    inpContainer.id = 'inp-q1-container';

    // Création des éléments input pour les questions
    const input1 = document.createElement('input');
    input1.name = 'question1';
    input1.className = 'inp-q1';
    input1.placeholder = 'Name of student 1';

    const input2 = document.createElement('input');
    input2.name = 'question2';
    input2.className = 'inp-q1';
    input2.placeholder = 'Personality of student 1';

    // Ajout des inputs au conteneur inp-q1-container
    inpContainer.appendChild(input1);
    inpContainer.appendChild(input2);

    // Ajout du titre et du conteneur inp-q1-container au conteneur question1-container
    questionContainer.appendChild(title);
    questionContainer.appendChild(inpContainer);

    // Ajout du conteneur question1-container au nouvel élément div
    newContainer.appendChild(questionContainer);
       // Ajout des boutons au conteneur de boutons
       buttonContainer.appendChild(buttonAdd);
       buttonContainer.appendChild(buttonResult);
       newContainer.appendChild(questionContainer);
       newContainer.appendChild(buttonContainer);
    // Ajout du nouvel élément div au conteneur principal
    containerRef.current.appendChild(newContainer);
  };

  return (
    <div ref={containerRef} style={{ marginBottom: "20%" }}>
      <div>
        <div>
          <div id='titre-p-serv2'>
            <p style={{ color: "var(--violet)" }}>Result Of The Personality Test</p>
          </div>
        </div>
      </div>
      <div  className="Container-barre-serv2">
        <div className="question1-container">
          <p id='title-q1'>Student 1</p>
          <div id='inp-q1-container'>
            <input name='question1' className="inp-q1" placeholder="Name of student 1" />
            <input name='question2' className="inp-q1" placeholder="Personality of student 1" />
          </div>
        </div>
        <div id='buttons-serv2'>
          <button className="previous-button" onClick={addNew} style={{ backgroundColor: 'var(--violet)' }}>Add</button>
          <button className="next-button" onClick={() => console.log('Result')}>Result</button>
        </div>
      </div>
    </div>
  );
}
