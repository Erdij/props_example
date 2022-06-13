import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-body">
        <p>{props.cardTitle}</p>
        <img src={props.image} alt="" />
        <p>{props.cardText}</p>
        <p>{props.updatedTime}</p>
      </div>
    </div>
  );
};

export default Card;
