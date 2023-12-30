import React from 'react'
import GrandLogo from "./images/logo.png"
import Question from "./images/entrevue.png"
import Plume from "./images/ecrit.png"
import "./styleCSS/accueil.css"
export default function Accueil() {
    return (
    <div id='accueil-container'>
        <div id='grand-logo'>
            <img src={GrandLogo} width={"330px"} />
        </div>
        <div id='disc-title'>
            DESCRIPTION
        </div>
        <div id='disc-contenu'>
        <p>Découvrez notre site web innovant basé sur l'apprentissage par sérvice. Transformez vos besoins et problématiques en solutions précises et bien définies. Notre plateforme intuitive vous guide pas à pas pour identifier vos besoins spécifiques et développer les compétences nécessaires. Que vous soyez un individu en quête de développement professionnel ou une entreprise cherchant des solutions efficaces, notre site web vous offre les outils et les ressources pour relever les défis avec confiance. Rejoignez-nous dès maintenant pour atteindre vos objectifs de manière ciblée et réussie.</p>
        </div>
        <div id='fonct-title'>
            FONCTIONNEMENT
        </div>
        <div id='fonct-contenu'>
            <div class='serv'>
                <div class='serv-icon'>
                    <img src={Plume} width={"70px"}/>
                </div>
                <div class='serv-title'>
                Réponse Adaptée Grâce Aux Informations Générales De Votre Projet:
                </div>
                <div class='serv-contenu'>
                    <p>Pour obtenir une réponse qui répondra à vos besoins, veuillez fournir des informations générales sur votre projet. Bien que cela puisse ne pas être aussi précis qu'en répondant à des questions spécifiques, ces informations nous aideront à comprendre vos besoins globaux. Veuillez fournir autant de détails que possible sur les objectifs, les contraintes et les attentes de votre projet. Nous ferons de notre mieux pour vous fournir une réponse adaptée à votre situation. Merci !</p>
                </div>
                <div class='serv-button'>
                Allez au service
                </div>
            </div>
            <div id='sep'></div>
            <div class='serv'>
                <div class='serv-icon'>
                <img src={Question} width={"70"}/>
                </div>
                <div class='serv-title'>
                Répondez Pour Une Réponse Précise:
                </div>
                <div class='serv-contenu'>
                    <p>Pour obtenir une réponse précise et exacte concernant votre projet, veuillez répondre aux questions spécifiques qui vous sont posées sur notre site. En fournissant des informations détaillées sur votre projet, nous pourrons vous offrir une assistance personnalisée et adaptée à vos besoins. Veuillez remplir les champs requis avec soin et fournir toutes les informations pertinentes. Nous nous engageons à vous fournir une réponse complète basée sur les informations que vous nous fournirez. Merci de votre collaboration !</p>
                </div>
                <div class='serv-button'>
                Allez au service
                </div>
            </div>
        </div>
    </div>
)
}
