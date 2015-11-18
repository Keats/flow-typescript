import {
  CREATE_CARD,
} from "../constants/actionTypes";


let sequence = 0;

export function addCard(columnId: number, name: string) {
  const id = sequence;
  sequence++;

  return {
    type: CREATE_CARD,
    payload: {
      columnId,
      id,
      name,
    },
  };
}
