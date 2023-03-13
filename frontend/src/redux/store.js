import { applyMiddleware, compose, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";
import minterReducer from "./minter-contract/minterReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  minterContract: minterReducer,
  user: userReducer,
});

let composeEnhancers;

const middleware = [thunk];

if (process.env.NODE_ENV === "production") {
  composeEnhancers = compose(applyMiddleware(...middleware));
} else {
  composeEnhancers = composeWithDevTools(applyMiddleware(...middleware));
}

const configureStore = () => {
  return createStore(rootReducer, composeEnhancers);
};

const store = configureStore();

export default store;
