import { combineReducers } from "redux";

import { createStore, applyMiddleware } from "redux";
 
import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";
import { getPizzasReducer } from "./Reducers/pizzaReducer";

const finalReducer = combineReducers({
    getAllPizzasReducer:getAllPizzasReducer
})

const initialState = {}

