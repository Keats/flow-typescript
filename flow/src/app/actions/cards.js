import {
  CARD_CREATE,
} from "../constants/actionTypes";


let sequence = 0;

export function addCard(listId, name) {
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
