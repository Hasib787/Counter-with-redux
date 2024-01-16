import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";

// create our first middleware 
const myLogger = ;

const store = createStore(rootReducer, applyMiddleware(myLogger));

export default store;
