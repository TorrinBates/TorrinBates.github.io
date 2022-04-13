import { combineReducers } from "redux";
import pageReducer from "./page/page.reducer";

export default combineReducers({
    page: pageReducer,
});