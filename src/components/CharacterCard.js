import React from "react";

const ParkCard = ({ character: { name, image } }) => {
  return (
    <div className="card">
      <h2>Name: {name}</h2>
      <img src={image} alt={name} />
      <br />
    </div>
  );
};

export default ParkCard;
