import * as Immutable from "immutable";

import {
  CREATE_LIST, DELETE_LIST, CREATE_CARD,
} from "../constants/actionTypes";


export const List = Immutable.Record(
  {
    id: -1,
    name: "Unknown",
    cards: Immutable.List(),
  }
);

function createList(state, payload) {
  return state.set(String(payload.id), new List(payload));
}


function createCard(state, payload) {
  const { id, columnId } = payload;
  return state.updateIn([String(columnId), "cards"], cards => cards.push(id));
}


export default function lists(state = Immutable.Map(), action: any) {
  switch (action.type) {
    case CREATE_LIST:
      return createList(state, action.payload);
    case CREATE_CARD:
      return createCard(state, action.payload);
    case DELETE_LIST:
      return state;
    default:
      return state;
  }
}

export function getAllLists(state: any) {
  return state.lists.toList();
}
