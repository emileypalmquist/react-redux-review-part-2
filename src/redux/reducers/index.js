import { combineReducers } from "redux";

import { charactersReducer } from "./characterReducer";
import { parksReducer } from "./parksReducer";

export const rootReducer = combineReducers({
  characters: charactersReducer,
  parks: parksReducer,
});
