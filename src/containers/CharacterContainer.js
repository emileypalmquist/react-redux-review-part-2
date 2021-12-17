import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import CharacterCard from "../components/CharacterCard";
import { setCharacters } from "../redux/actions/characterActions";

function CharacterContainer() {
  const characters = useSelector((state) => state.characters.allCharacters);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(setCharacters());
    dispatch({ type: "LOADING_CHARACTERS" });
    fetch("https://rickandmortyapi.com/api/character")
      .then((resp) => resp.json())
      .then((data) =>
        dispatch({ type: "SET_CHARACTERS", payload: data.results })
      );
  }, []);

  return (
    <div className="container">
      {characters.map((char) => (
        <CharacterCard key={char.id} character={char} />
      ))}
      <h1>THANKS FOR VOTING</h1>
    </div>
  );
}

export default CharacterContainer;
