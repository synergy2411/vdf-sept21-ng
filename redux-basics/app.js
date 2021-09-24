const { createStore } = require("redux");

const initialState = {
    counter : 0
}
// Reducers
function rootReducer(state = initialState, action){
    if(action.type === "INCREMENT"){
        return {
         counter : state.counter + 1   
        }
    }else if(action.type === "DECREMENT"){
        return {
            counter : state.counter - 1
        }
    }else if(action.type === "ADD_COUNTER"){
        return {
            counter : state.counter + action.value
        }
    }
    return state;
}


// Store
const store = createStore(rootReducer);


// Subscribe
store.subscribe(() => {
    console.log("[STATE]" , store.getState())
})

// Actions
store.dispatch({type : "INCREMENT"})
// console.log("[INCREMENT : STATE]" , store.getState())

store.dispatch({type : "DECREMENT"})
// console.log("[DECREMENT : STATE]" , store.getState())

store.dispatch({type : "ADD_COUNTER", value : 10})

// Subtract value : 5 from counter