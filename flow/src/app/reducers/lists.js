/* @flow */
import Immutable from "immutable";

import {
  LIST_CREATE, CARD_CREATE,
} from "../constants/actionTypes";


export const List = Immutable.Record({
  id: -1,
  name: "Unknown",
  cards: Immutable.List(),
});
const initialState = Immutable.Map();


function createList(state: Immutable.Map, payload) {
  return state.set(payload.id, new List(payload));
}


function createCard(state: Immutable.Map, payload) {
  const { id, listId } = payload;
  return state.updateIn([listId, "cards"], cards => cards.push(id));
}


export default function lists(state = initialState, action: Action) {
  switch (action.type) {
    case LIST_CREATE:
      return createList(state, action.payload);
    case CARD_CREATE:
      return createCard(state, action.payload);
    default:
      return state;
  }
}

export function getAllLists(state: any): Immutable.List {
  return state.lists.toList();
}
