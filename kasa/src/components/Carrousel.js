import React, { useState } from "react";

function Carrousel(props) {

  const [current, setCurrent] = useState(0);
  const length = props.pictures.length;
  console.log(current);
  console.log(length)

  const handleRight = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const handleLeft = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section className="carrousel">
        {props.pictures.map((pic, index) => (
        <div className={index === current ? "active" : ""} key={index}>
          {index === current && <img key={index} src={pic} alt="carrousel" className="carrousel_image"></img>}
          
        </div>
        ))}
      <div className="number">
        {current + 1}/{length}
      </div>
     {length > 1 && (
        <>
        <div className="fleche">
          <div className="box_left">
            <i className="fas fa-chevron-left"  onClick={handleLeft}></i>
          </div>
          <div className="box_right">
            <i className="fas fa-chevron-right" onClick={handleRight} ></i>
           </div>
        </div>
        </>
      )}
    </section>
  );
}

export default Carrousel;