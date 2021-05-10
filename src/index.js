import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux"


import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const initialState = {
  result: 15000,
  value: [100]
}

// userRedcuer
const userReducer = (state = { name: "khamla", age: 15 }, action) => {
  switch (action.type) {
    case "setName":
      state = {
        ...state,
        name: action.payload
      }
      break;
    case "setAge":
      state = {
        ...state,
        age: action.payload
      }
      break;
    default:
  }
  return state;
}

// employeeReducer
const employeeReducer = (state = initialState, action) => {
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

const myLogger = (store) => (next) => (action) => {
  console.log("Log Action: ", action);
  next(action);
}
const store = createStore(combineReducers({ emp: employeeReducer, user: userReducer }), {}, applyMiddleware(myLogger));

// subscribe == update state value
store.subscribe(() => {
  console.log("Update store: ", store.getState());
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
);

reportWebVitals();
