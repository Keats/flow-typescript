import {
  LIST_CREATE,
} from "../constants/actionTypes";


let sequence = 0;

export function addList(name) {
  const id = sequence;
  sequence++;

  return {
    type: LIST_CREATE,
    payload: {
      id,
      name,
    },
  };
}
