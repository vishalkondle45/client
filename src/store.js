import rootReducer from "./redux/reducer/index.js";
import { createStore } from "redux";

const store = createStore(rootReducer);
export default store;
