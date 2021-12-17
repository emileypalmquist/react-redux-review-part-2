import { SET_CHARACTERS } from "../actionTypes";
const initialCharactersState = {
  allCharacters: [],
};

export function charactersReducer(state = initialCharactersState, action) {
  console.log(action);
  switch (action.type) {
    case SET_CHARACTERS:
      return {
        ...state,
        allCharacters: action.payload,
      };
    default:
      return state;
  }
}
