import React, { useRef , useState } from 'react';
import GrandLogo from "../images/LogoComplet.png";
import "../styleCSS/question1.css";
import "../styleCSS/service2.css";
import { useNavigate } from 'react-router-dom';

export default function Personnality() {

    const containerRef = useRef(null);
    let studentNum=1
    let resultText=""
    const navigate = useNavigate();
    const personalities = [
    { value: 'ISTJ', label: 'ISTJ (Logisticien)' },
    { value: 'ISFJ', label: 'ISFJ (Défenseur)' },
    { value: 'INFJ', label: 'INFJ (Avocat)' },
    { value: 'INTJ', label: 'INTJ (Architecte)' },
    { value: 'ISTP', label: 'ISTP (Virtuose)' },
    { value: 'ISFP', label: 'ISFP (Aventurier)' },
    { value: 'INFP', label: 'INFP (Médiateur)' },
    { value: 'INTP', label: 'INTP (Logicien)' },
    { value: 'ESTP', label: 'ESTP (Entrepreneur)' },
    { value: 'ESFP', label: 'ESFP (Amuseur)' },
    { value: 'ENFP', label: 'ENFP (Inspirateur)' },
    { value: 'ENTP', label: 'ENTP (Innovateur)' },
    { value: 'ESTJ', label: 'ESTJ (Directeur)' },
    { value: 'ESFJ', label: 'ESFJ (Consul)' },
    { value: 'ENFJ', label: 'ENFJ (Protagoniste)' },
    { value: 'ENTJ', label: 'ENTJ (Commandant)' }
];
const handleResultClick = () => {
  navigate('/confirm', { state: {resultText} });
};
const deletePers = (event) => {
    let MaxComp=document.getElementsByClassName("Container-barre-serv2").length
    studentNum-=1
    if(MaxComp>1){
        const containnerParent=event.target.closest('.Container-barre-serv2')
        containnerParent.remove()
        let MaxPersNbr=document.getElementsByClassName("Container-barre-serv2").length-1
        let MaxPers=document.getElementsByClassName("Container-barre-serv2")[MaxPersNbr]
        let buttonComponent=MaxPers.lastChild
        buttonComponent.appendChild(event.target)
        const referenceElement = buttonComponent.children[1];
        buttonComponent.insertBefore(event.target, referenceElement);
    }
}
const addNew = () => {
    let MaxPersNbr=document.getElementsByClassName("Container-barre-serv2").length
    studentNum+=1
    let buttonDel=document.getElementsByClassName("delete-button")[0]
    buttonDel.remove()
    const newButtonDel=document.createElement("button")
    newButtonDel.className="delete-button"
    newButtonDel.style.backgroundColor="var(--violet)"
    newButtonDel.textContent="Delete"
    newButtonDel.onclick=deletePers
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


    // Création et ajout du bouton Result
    const buttonResult = document.createElement('button');
    buttonResult.className = 'next-button';
    buttonResult.textContent = 'Result';
    buttonResult.onclick = handleResultClick;
    
    // Création de l'élément div pour la question1-container
    const questionContainer = document.createElement('div');
    questionContainer.className = 'question1-container';

    // Création de l'élément p pour le titre de la question
    const title = document.createElement('p');
    title.id = 'title-q1';
    title.textContent = 'Student '+studentNum;

    // Création de l'élément div pour inp-q1-container
    const inpContainer = document.createElement('div');
    inpContainer.id = 'inp-q1-container';

    // Création des éléments input pour les questions
    const input1 = document.createElement('input');
    input1.name = 'student'+studentNum;
    input1.className = 'inp-q1';
    input1.onkeyup = resultFunction
    input1.placeholder = 'Name of student '+studentNum;

    const select2 = document.createElement('select');
    select2.name = 'personality'+studentNum;
    select2.className = 'inp-q1';
    select2.onchange = resultFunction;
    personalities.forEach(personality => {
      const option = document.createElement('option');
      option.value = personality.value;
      option.textContent = personality.label;
      select2.appendChild(option);
    });
    // Ajout des inputs au conteneur inp-q1-container
    inpContainer.appendChild(input1);
    inpContainer.appendChild(select2);

    // Ajout du titre et du conteneur inp-q1-container au conteneur question1-container
    questionContainer.appendChild(title);
    questionContainer.appendChild(inpContainer);

    // Ajout du conteneur question1-container au nouvel élément div
    newContainer.appendChild(questionContainer);
       // Ajout des boutons au conteneur de boutons
    buttonContainer.appendChild(buttonAdd);
    buttonContainer.appendChild(newButtonDel);
    buttonContainer.appendChild(buttonResult);
    newContainer.appendChild(questionContainer);
    newContainer.appendChild(buttonContainer);
    // Ajout du nouvel élément div au conteneur principal
    containerRef.current.appendChild(newContainer);
    let MaxPers=document.getElementsByClassName("Container-barre-serv2")[MaxPersNbr]

  };
  let resultFunction = ()=>{
    let maxContainner=document.getElementsByClassName("Container-barre-serv2").length+1
    resultText=""
    for(let i = 1;i<maxContainner ;i++){
      if(i<maxContainner-1){
      resultText+="the student "+document.getElementsByName("student"+i)[0].value+" has "+document.getElementsByName("personality"+i)[0].value+" personality and "
    }
    else{
      resultText+="the student "+document.getElementsByName("student"+i)[0].value+" has "+document.getElementsByName("personality"+i)[0].value+" personality"
    }
  }
    return resultText

  }
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
            <input name='student1' className="inp-q1" onChange={resultFunction} placeholder="Name of student 1" />
            <select name='personality1' className="inp-q1" onChange={resultFunction} placeholder="Personality of student 1" >
                <option value="ISTJ">ISTJ (Logisticien)</option>
                <option value="ISFJ">ISFJ (Défenseur)</option>
                <option value="INFJ">INFJ (Avocat)</option>
                <option value="INTJ">INTJ (Architecte)</option>
                <option value="ISTP">ISTP (Virtuose)</option>
                <option value="ISFP">ISFP (Aventurier)</option>
                <option value="INFP">INFP (Médiateur)</option>
                <option value="INTP">INTP (Logicien)</option>
                <option value="ESTP">ESTP (Entrepreneur)</option>
                <option value="ESFP">ESFP (Amuseur)</option>
                <option value="ENFP">ENFP (Inspirateur)</option>
                <option value="ENTP">ENTP (Innovateur)</option>
                <option value="ESTJ">ESTJ (Directeur)</option>
                <option value="ESFJ">ESFJ (Consul)</option>
                <option value="ENFJ">ENFJ (Protagoniste)</option>
                <option value="ENTJ">ENTJ (Commandant)</option>
            </select>
          </div>
        </div>
        <div id='buttons-serv2'>
          <button className="previous-button" onClick={addNew}  >Add</button>
          <button className="delete-button" onClick={deletePers}  >Delete</button>
          <button onClick={handleResultClick} className="next-button" >Result</button>
        </div>
      </div>
    </div>
  );
}
