// https://blog.hubspot.fr/website/page-accueil-site-web
import React from 'react'
import image1 from "./images/image1.png"
import image2 from "./images/image2.png"
export default function Guide() {
  return (
    <div style={{marginTop:"8%",marginBottom:"10%"}}>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1 style={{textAlign:"center",marginBottom:"8%",color:"var(--blackV)",fontSize:"40px"}}>Mentor's Guide to Engineering Service-Learning Projects</h1>
        
                    <h2 style={{color:"var(--violet)"}}>Introduction</h2>
                    <p style={{marginBottom:"4%"}}>Engineering Service-Learning (ESL) projects at the Engineering School (ENSAJ) are an integral part of the educational experience, blending academic learning with community service. These projects aim to equip engineering students with practical skills, social awareness, and professional experience while contributing positively to the community.</p>
        
        <h2 style={{color:"var(--violet)"}}>Definition of the End-of-Year Project</h2>
        <p>The end-of-year project (EYP) is a mandatory practical training component for engineering students at ENSAJ. It is a professional task related to the chosen specialty. Through the end-of-year project activities, engineering students are expected to demonstrate their scientific and technical skills and abilities to:</p>
        <ul style={{marginBottom:"4%"}}>
            <li>Understand the context of the project and the problem posed</li>
            <li>Better plan and manage the different activities of the project</li>
            <li>Conduct effective bibliographic research</li>
            <li>Formulate appropriate study approaches related to the subject area</li>
            <li>Propose feasible and optimized designs</li>
            <li>Master new tools and technical environments</li>
            <li>Conduct development and/or engineering work</li>
            <li>Analyze the results obtained and formulate relevant conclusions</li>
            <li>Value the work done and the results achieved</li>
            <li>Write a well-structured report adhering to the rules of scientific writing</li>
        </ul >
        
        <h2 style={{color:"var(--violet)"}}>Context and Definition of ESL Projects</h2>
        <p style={{marginBottom:"4%"}}>Engineering disciplines are at the forefront of innovation and play a crucial role in the development of society and the future. Therefore, the goal of higher education institutions is to provide a solid education to students who will be able to adapt to the realities of the working world and evolve it. To achieve these objectives, higher education institutions must adopt teaching and learning methods and pedagogical and andragogical approaches that meet the demands and expectations of the industry and the job market. Engineering Service Learning (ESL) is a pedagogical strategy through which participants learn to work based on needs in the context of everyday life to improve it. It gives students the opportunity to better understand the purpose and value of their efforts through practical experience in serving the community. It also provides students with opportunities to develop their social skills, put them into practice, and reflect on this experience. Service learning contributes to creating welcoming, caring, respectful, and safe learning environments by offering students and staff opportunities to collaborate in advancing a common cause.</p>
        
        <h2 style={{color:"var(--violet)"}}>General Objective of ESL Projects</h2>
        <p style={{marginBottom:"6%"}}>The end-of-year ESL project aims for engineering proposals based on the integration of knowledge, skills, and attitudes to solve community issues. To this end, the generic process followed by engineering students is as follows:</p>
        <img style={{marginBottom:"6%"}} src={image1} alt=""/><br/><br/>
        <p style={{marginBottom:"4%"}}>Note: The MBTI (Myers-Briggs Type Indicator) test is a personality test. It will be used to assign roles in the team. You can take this test in the "MBTI Test" tab. The AI tool integrated into this platform will assign roles based on the results obtained in the MBTI test. If the number of students is less than six, the AI tool will assign more than one role per student.</p>
        <img style={{marginBottom:"10%"}} src={image2} alt="" /><br/><br/>

        
        <h2 style={{color:"var(--violet)"}}>Purpose of the Guide</h2>
        <p style={{marginBottom:"4%"}}>This guide is designed to assist mentors in guiding students through their ESL projects, ensuring a meaningful and impactful experience for both the students and the community.

            Following the process outlined in the diagram, propose and ideally implement a solution that improves the situation described below. This solution should notably:
            
            Be of notable utility, justified, and sustainable.
            Encourage a spirit of creativity while avoiding ready-made and commonplace solutions.
            Involve advanced engineering skills and be adapted to the teachings of the program.
            Favor solutions using 3D modeling, IoT, or new technologies in general.
            Note: Each group is required to submit a weekly journal (at the start of each week); the journal should contain a report on the progress made, the difficulties and obstacles encountered, as well as a vision for the upcoming tasks.
            </p >
        
        <h2 style={{color:"var(--violet)"}}>1. Understanding the Context and Problem</h2>
        <ul>
            <li>Familiarize yourself with the specific community needs and the project's objectives.</li>
            <li style={{marginBottom:"4%"}}>Assist students in comprehending the project's context and identifying the core problem they will address.</li>
        </ul>
        
        <h3 style={{color:"var(--violet)"}}>2. Project Planning and Management</h3>
        <ul>
            <li>Guide students in planning and scheduling project activities efficiently.</li>
            <li style={{marginBottom:"4%"}}>Encourage a systematic approach to manage tasks, resources, and time.</li>
        </ul>
        
        <h3 style={{color:"var(--violet)"}}>3. Research and Information Gathering</h3>
        <ul>
            <li>Supervise students in conducting thorough research and literature reviews related to the project topic.</li>
            <li style={{marginBottom:"4%"}}>Ensure they utilize reliable sources and synthesize information effectively.</li>
        </ul>
        
        <h3 style={{color:"var(--violet)"}}>4. Design and Development</h3>
        <ul>
            <li>Guide students in formulating feasible and optimized design approaches.</li>
            <li style={{marginBottom:"4%"}}>Encourage creativity and the use of advanced engineering skills, favoring solutions that incorporate 3D modeling, IoT, or new technologies.</li>
        </ul>
        
        <h3 style={{color:"var(--violet)"}}>5. Implementation and Engineering Work</h3>
        <ul>
            <li>Assist in the practical application of designs, overseeing the development and engineering processes.</li>
            <li style={{marginBottom:"4%"}}>Promote hands-on learning, problem-solving, and technical mastery.</li>
        </ul>
        
        <h3 style={{color:"var(--violet)"}}>6. Communication and Documentation</h3>
        <ul>
            <li>Help students in analyzing the results of their projects, drawing meaningful conclusions, and learning from outcomes.</li>
            <li style={{marginBottom:"4%"}}>Ensure they can articulate the value and impact of their work.</li>
        </ul>
        
        
        <h3 style={{color:"var(--violet)"}}>7. Reflection and Self-Evaluation</h3>
        <ul>
            <li>Advise on the preparation of well-structured reports and presentations, adhering to scientific writing standards.</li>
            <li style={{marginBottom:"4%"}}>Encourage clear, concise, and effective communication of ideas and results.</li>
        </ul>
        
        <h3 style={{color:"var(--violet)"}}>8. Community Engagement and Service</h3>
        <ul>
            <li>Facilitate reflective discussions and self-evaluation to enhance learning and personal growth.</li>
            <li style={{marginBottom:"4%"}}>Use tools like the MBTI test to help students understand their team roles and dynamics.</li>
        </ul>
        <h3 style={{color:"var(--violet)"}}>9. Community Engagement and Service</h3>
        <ul>
            <li>Promote active community involvement, ensuring that projects meet genuine needs and contribute to societal improvement.</li>
            <li style={{marginBottom:"4%"}}>Encourage empathy, ethical considerations, and a service-oriented mindset.</li>
        </ul>
        <h2 style={{color:"var(--violet)"}}>Project Timeline and Milestones</h2>
        <p style={{marginBottom:"4%"}}>Provide a timeline with key milestones and deliverables to help students stay on track.
            Regularly review progress, addressing challenges and adapting plans as necessary.
            Conclusion
            Mentoring in ESL projects is a rewarding experience that fosters student development and community betterment. By following this guide, mentors can effectively support and enhance the learning journey of engineering students in service-learning projects.
            </p>
        
        <h3 style={{color:"var(--violet)" ,marginBottom:"2%"}} >Planning</h3>
        <table class="table">
            <thead>
              <tr>
                <th style={{color:"var(--blackV)"}}>Processus</th>
                <th style={{color:"var(--blackV)"}}>Travail à faire</th>
                <th style={{color:"var(--blackV)"}}>Date Limite</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Pré-Questionnaire</td>
                <td>Répondre au Questionnaire</td>
                <td>Jour 0</td>
              </tr>
              <tr>
                <td>Description et règlements</td>
                <td>Envoyer la page 1 de la fiche de conception par E-mail et l'uploader sur la plateforme</td>
                <td>Jour 1</td>
              </tr>
              <tr>
                <td>Définition de la problématique</td>
                <td>Envoyer les pages 2, 3 et 4 de la fiche de conception par E-mail et l’uploader sur la plateforme</td>
                <td>Jour 15</td>
              </tr>
              <tr>
                <td>Concept de design</td>
                <td>Envoyer les pages 5 de la fiche de conception par E-mail et l'uploader sur la plateforme</td>
                <td>Jour 25</td>
              </tr>
              <tr>
                <td>Conception détaillée</td>
                <td>Envoyer les pages 6 de la fiche de conception par E-mail et l'uploader sur la plateforme</td>
                <td>Jour 35</td>
              </tr>
              <tr>
                <td>Fabriquer un produit</td>
                <td>Envoyer la page 9 de la fiche de conception et quelques photos par E-mail et l'uploader sur la plateforme</td>
                <td>Jour 55</td>
              </tr>
              <tr>
                <td>Descriptions de produits</td>
                <td>Envoyer la page 10 de la fiche de conception et le papier format A1 par E-mail et l'uploader sur la plateforme</td>
                <td>Jour 58</td>
              </tr>
              <tr>
                <td>L'annoncement</td>
                <td>Envoyer une vidéo avec tout le processus et la démonstration de votre produit final par e-mail, ainsi que les fichiers source de conception (modélisation et codage 3D, fichier stl... etc.)</td>
                <td>Jour 60</td>
              </tr>
              <tr>
                <td>Solution et rapport finale</td>
                <td>Envoyer un rapport détaillé (en Anglais) sur l'ensemble du projet</td>
                <td>Jour 75</td>
              </tr>
              <tr>
                <td>Post-Questionnaire</td>
                <td>Répondre au Questionnaire</td>
                <td>Jour 80</td>
              </tr>
              <tr>
                <td>Soutenance</td>
                <td>Soutenance devant le jury</td>
                <td>Jour 90</td>
              </tr>
            </tbody>
          </table>
      </div>
    </div>
  </div>

    </div>
  )
}
