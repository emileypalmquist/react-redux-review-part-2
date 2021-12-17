import React from "react";
import { useSelector } from "react-redux";
import ParkCard from "./ParkCard";

const Parks = (props) => {
  const parks = useSelector((state) => state.parks);

  const mapParks = () => {
    let parkArray = Object.values(parks);
    return parkArray.map((park) => {
      return (
        <ParkCard
          key={park.id}
          // increaseVote={props.increaseVote}
          // decreaseVote={props.decreaseVote}
          park={park}
        />
      );
    });
  };
  return (
    <div>
      <div className="container">{mapParks()}</div>
    </div>
  );
};

export default Parks;
