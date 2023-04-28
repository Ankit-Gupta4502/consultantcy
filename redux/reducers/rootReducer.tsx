import { combineReducers } from "redux"
import AuthReducer from "./AuthReducer"
import IndexReducer from "./IndexReducer"
import IndustriesReducer from "./IndustriesReducer"
import UserDashBoardReducer from "./UserDashBoardReducer"
import SubSubCategoryReducer from "./SubSubCategoryReducer"
import ConsultantReducer from "./ConsultantReducer"
import UserWalletReducer from "./UserWalletReducer"
import AgoraReducer from "./AgoraReducer"
export default combineReducers(
    {
        AuthReducer,
        IndexReducer,
        IndustriesReducer,
        UserDashBoardReducer,
        SubSubCategory: SubSubCategoryReducer,
        ConsultantReducer,
        UserWalletReducer,
        AgoraReducer
    }
)