import { combineReducers } from "redux";
import categoriesReducer from "../features/categories/categoriesSlice";
import searchReducer from "../features/search/searchSlice";

const rootReducer = combineReducers({
    categories: categoriesReducer,
    searchedJobs: searchReducer
});

export default rootReducer;