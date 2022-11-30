import React, { useState } from 'react';

const Accor = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-itemPropos">
      <div className="accordion-titlePropos" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? '-' : '^'}</div>
      </div>
      {isActive && <div className="accordion-contentPropos">{content}</div>}
    </div>
  );
};

export default Accor;