/* @flow */
import Immutable from "immutable";

import {
  CARD_CREATE,
} from "../constants/actionTypes";


const Card = Immutable.Record({
  id: -1,
  name: "Unknown",
});
const initialState = Immutable.Map();


function createCard(state: Immutable.Map, payload) {
  return state.set(payload.id, new Card(payload));
}

export default function cards(state = initialState, action: Action) {
  switch (action.type) {
    case CARD_CREATE:
      return createCard(state, action.payload);
    default:
      return state;
  }
}

export function getListCards(state: any, cardIds: Immutable.List): Immutable.List {
  if (cardIds.size === 0) {
    return Immutable.List();
  }
  return state.cards.filter(card => cardIds.indexOf(card.id) > -1).toList();
}
