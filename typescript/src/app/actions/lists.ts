import {
  CREATE_LIST,
} from "../constants/actionTypes";


let sequence = 0;

export function addList(name: string) {
  const id = sequence;
  sequence++;

  return {
    type: CREATE_LIST,
    payload: {
      id,
      name,
    },
  };
}
