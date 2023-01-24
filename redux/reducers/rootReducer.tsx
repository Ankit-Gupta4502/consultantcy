import { combineReducers } from "redux"
import AuthReducer from "./AuthReducer"
import IndexReducer from "./IndexReducer"
import IndustriesReducer from "./IndustriesReducer"
export default combineReducers(
    {
        AuthReducer,
        IndexReducer,
        IndustriesReducer
    }
)