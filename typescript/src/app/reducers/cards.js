import Immutable from "immutable";

import {
  CREATE_CARD,
} from "../constants/actionTypes";


const Card = Immutable.Record({id: -1, name: "Unknown"});
const initialState = Immutable.fromJS({});


function createCard(state, action) {
  const { id, name } = action.payload;
  return state.set(String(id), new Card({id, name}));
}

export default function cards(state = initialState, action) {
  switch (action.type) {
    case CREATE_CARD:
      return createCard(state, action);
    default:
      return state;
  }
}
