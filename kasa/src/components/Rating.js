import React from "react";
import Star from "./Star";

function Rating(props) {
  // console.log( props.rating);
  let content;
  switch (props.rating) {
    case "1":
      content = (
        <>
          <Star plain />
          <Star empty />
          <Star empty />
          <Star empty />
          <Star empty />
        </>
      );

      break;
    case "2":
      content = (
        <>
          <Star plain />
          <Star plain />
          <Star empty />
          <Star empty />
          <Star empty />
        </>
      );
      break;
    case "3":
      content = (
        <>
          <Star plain />
          <Star plain />
          <Star plain />
          <Star empty />
          <Star empty />
        </>
      );
      break;
    case "4":
      content = (
        <>
          <Star plain />
          <Star plain />
          <Star plain />
          <Star plain />
          <Star empty />
        </>
      );
      break;
    case "5":
      content = (
        <>
          <Star plain />
          <Star plain />
          <Star plain />
          <Star plain />
          <Star plain />
        </>
      );
      break;

    default:
      break;
  }

  return <div className="etoile">{content}</div>;
}

export default Rating;