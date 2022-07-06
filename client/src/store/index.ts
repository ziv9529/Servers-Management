// import { createStoreHook } from "react-redux";
import { combineReducers, compose, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { serversReducer } from "./reducers/serversReducer/index"

const rootReducer = combineReducers({
    serversReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk))