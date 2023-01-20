import { combineReducers } from "redux"
import AuthReducer from "./AuthReducer"
import IndexReducer from "./IndexReducer"
export default combineReducers(
    {
        AuthReducer,
        IndexReducer
    }
)