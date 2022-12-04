import React, { useState } from 'react';


const Accordion = ({ title, content,titleP }) => {
  const [isActive, setIsActive] = useState(false);
  

  return (
    <>
    {title ? (
    
     
    <div className= "accordion-item"  >
      <div className="accordion-title">
        <div className='margin_left'>{title}</div>
        <div  onClick={() => setIsActive(!isActive)}>{isActive ? <i class="fa-solid fa-chevron-up margin_right"></i> : <i class="fa-solid fa-chevron-down margin_right"></i>}</div>
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
      
    </div>
    ):(
      <div className="accordion-itemPropos">
      <div className="accordion-titlePropos" >
        <div className='margin_left'>{titleP}</div>
        <div onClick={() => setIsActive(!isActive)}>{isActive ? <i class="fa-solid fa-chevron-up margin_right"></i> : <i class="fa-solid fa-chevron-down margin_right"></i>}</div>
      </div>
      {isActive && <div className="accordion-contentPropos">{content}</div>}
    </div>






  )}
  </>
  );
};

export default Accordion;