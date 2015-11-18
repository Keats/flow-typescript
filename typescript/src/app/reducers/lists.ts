import * as Immutable from "immutable";

import {
  CREATE_LIST, DELETE_LIST, CREATE_CARD,
} from "../constants/actionTypes";
import { IState, IListsState, IList, IListRecord } from "../interfaces";


export const List = Immutable.Record<IList>({
  id: -1,
  name: "Unknown",
  cards: Immutable.List<number>(),
}, "List");


const initialState: IListsState = Immutable.Map<number, IListRecord>();

function createList(state: IListsState, payload: any): IListsState {
  return state.set(payload.id, new List(payload));
}


function createCard(state: IListsState, payload: any): IListsState {
  const { id, columnId } = payload;
  return state.updateIn([columnId, "cards"], cards => cards.push(id));
}


export default function lists(state = initialState, action: any): IListsState {
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

export function getAllLists(state: IState) {
  return state.lists.toList();
}
