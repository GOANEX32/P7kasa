import React, { useState } from 'react';


const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? <i class="fa-solid fa-chevron-up"></i> : <i class="fa-solid fa-chevron-down"></i>}</div>
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
      
    </div>
  );
};

export default Accordion;