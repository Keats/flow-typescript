import * as Immutable from "immutable";

import { IState, ICardsState, ICard, ICardRecord } from "../interfaces";

import {
  CREATE_CARD,
} from "../constants/actionTypes";


const Card = Immutable.Record<ICard>({id: -1, name: "Unknown"}, "Card");
const initialState: ICardsState = Immutable.Map<number, ICardRecord>();

function createCard(state: ICardsState, action: any): ICardsState {
  const { id, name } = action.payload;
  return state.set(id, new Card({id, name}));
}

export default function cards(state = initialState, action: any): ICardsState {
  switch (action.type) {
    case CREATE_CARD:
      return createCard(state, action);
    default:
      return state;
  }
}

export function getListCards(state: IState, cardIds: Immutable.List<number>): Immutable.List<ICardRecord> {
  return state.cards.filter(card => cardIds.indexOf(card.id) > -1).toList();
}
