import { Action } from "@ngrx/store";

const initialState = {
  counter : 0
}

export function rootReducer(state = initialState, action: Action){
  return state;
}
