export function setCharacters() {
  return (dispatch) => {
    dispatch({ type: "LOADING_CHARACTERS" });
    fetch("https://rickandmortyapi.com/api/character")
      .then((resp) => resp.json())
      .then((data) =>
        dispatch({ type: "SET_CHARACTERS", payload: data.results })
      );
  };
}
