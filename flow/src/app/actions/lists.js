/* @flow */
import {
  LIST_CREATE,
} from "../constants/actionTypes";


let sequence: number = 0;


export function addList(name: string): Action {
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
