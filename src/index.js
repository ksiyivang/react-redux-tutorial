// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// reportWebVitals();

import { createStore } from "redux"
const initialState = {
  result: 15000,
  value: [100]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      state = {
        // value: state.value 
        ...state,
        result: state.result += action.payload,
        value: [...state.value, action.payload]

      }
      break;
    case "SUBTRACT":
      state = {
        // value: state.value 
        ...state,
        result: state.result += action.payload,
        value: [...state.value, action.payload]

      }
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
  payload: 25000
});
store.dispatch({
  type: "SUBTRACT",
  payload: 35000
});
