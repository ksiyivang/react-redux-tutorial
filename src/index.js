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


const reducer = (state, action) => {
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


const store = createStore(reducer, 15000);

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
  payload: 500
});