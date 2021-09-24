import { Action } from "@ngrx/store";

// Actions
export const INCREMENT = "INCREMENT"
export const DECREMENT = "[Counter] to decrease the counter"
export const ADD_COUNTER = "ADD_COUNTER"
export const SUBTRACT_COUNTER = "SUBTRACT_COUNTER"

// Action Creators

export class OnSubtractCounter implements Action {
  type: string = SUBTRACT_COUNTER ;
  constructor(public value : number){}
}
export class OnAddCounter implements Action {
  type: string = ADD_COUNTER ;
  constructor(public value : number){}
}
export class OnIncrement implements Action{
  type: string = INCREMENT;
}

export class OnDecrement implements Action{
  type : string = DECREMENT;
}

export type CounterAction = OnAddCounter | OnIncrement | OnDecrement
