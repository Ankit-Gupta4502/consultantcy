import { combineReducers } from "redux"
import AuthReducer from "./AuthReducer"
import IndexReducer from "./IndexReducer"
import IndustriesReducer from "./IndustriesReducer"
import UserDashBoardReducer from "./UserDashBoardReducer"
export default combineReducers(
    {
        AuthReducer,
        IndexReducer,
        IndustriesReducer,
        UserDashBoardReducer
    }
)