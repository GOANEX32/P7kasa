import propos_image from "../styles/asset/propos_image.png"
import Footer from "../components/footer";


import React, { useState } from 'react'
import Accordion from '../components/Accordion';



const Propos = () => {
  
  const accordionData = [
  {
    title: 'fiabilté',
    content: `Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.`
  },
  {
    title: 'Respect',
    content: `La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.`
  },
  {
    title: 'Service',
    content: `Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.`
  },
  {
    title: 'Sécurité',
    content: `La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs,
     chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. 
     Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.`
  },
]
  



  return (
    <div className="propos_page">
      <div className="propos_section">

        <img src={propos_image} className="propos_image" />
      </div>
      <div className="propos_contenu">
        
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
        
       
      </div>
      <Footer/>
    </div>
    
  );
};

export default Propos;