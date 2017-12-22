// start by adding redux, react-redux,
// and redux-promise-middleware.

import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import reducer from "./ducks/reducer";

// make sure promisemiddleare is invoked

const store = createStore(reducer, applyMiddleware(promiseMiddleware()));

export default store;

// once everything is setup, setup the react portion.
