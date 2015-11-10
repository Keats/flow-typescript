/* @flow */
import {
  CARD_CREATE,
} from "../constants/actionTypes";


let sequence: number = 0;

export function addCard(listId: number, name: string): Action {
  const id = sequence;
  sequence++;

  return {
    type: CARD_CREATE,
    payload: {
      listId,
      id,
      name,
    },
  };
}
