import React from "react";
import { useDispatch } from "react-redux";

import { increaseVote, decreaseVote } from "../redux/actions/parkActions";

const ParkCard = ({ park }) => {
  const dispatch = useDispatch();
  return (
    <div className="card">
      <h2>Name: {park.name}</h2>
      <p>Votes: {park.votes}</p>
      <img src={park.image} alt={park.name}></img>
      <br />
      <button
        onClick={() => {
          dispatch(increaseVote(park.id));
        }}
      >
        UpVote
      </button>
      <button
        onClick={() => {
          dispatch(decreaseVote(park.id));
        }}
      >
        DownVote
      </button>
    </div>
  );
};

export default ParkCard;
