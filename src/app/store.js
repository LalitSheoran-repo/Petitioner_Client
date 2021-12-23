import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';


import { appReducers } from "./appReducers";

const store = createStore(appReducers, composeWithDevTools(applyMiddleware(thunk)));
export default store;