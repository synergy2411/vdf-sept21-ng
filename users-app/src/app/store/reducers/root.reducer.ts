import { Action } from "@ngrx/store";

const initialState = {
  counter : 0
}

export function rootReducer(state = initialState, action: Action){
  if(action.type === "INCREMENT"){
    return {
      counter : state.counter + 1
    }
  }
  return state;
}
