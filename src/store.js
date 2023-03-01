import { createStore } from "redux";
import rootReducer from "./reducers/index";

// the second will check what is the store, what are states
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;