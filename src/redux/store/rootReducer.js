import { combineReducers } from "redux";
import authReducer from "../features/auth/authSlice";
import categoriesReducer from "../features/categories/categoriesSlice";
import searchReducer from "../features/search/searchSlice";

const rootReducer = combineReducers({
    categories: categoriesReducer,
    searchedJobs: searchReducer,
    user: authReducer
});

export default rootReducer;