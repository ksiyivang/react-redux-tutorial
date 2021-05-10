
// 2. create Multiple State

import { createStore } from "redux"
const initialState = {
    result: 15000,
    value: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
            state += action.payload;
            break;
        case "SUBTRACT":
            state -= action.payload;
            break;
        default:
    }
    return state;
}


const store = createStore(reducer);

// subscribe == update state value
store.subscribe(() => {
    console.log("Update store: ", store.getState());
})

// manage any change action
store.dispatch({
    type: "ADD",
    payload: 500
});

store.dispatch({
    type: "SUBTRACT",
    payload: 0
});