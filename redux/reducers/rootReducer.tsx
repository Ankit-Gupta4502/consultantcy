import { combineReducers } from "redux"
import AuthReducer from "./AuthReducer"
import IndexReducer from "./IndexReducer"
import IndustriesReducer from "./IndustriesReducer"
import UserDashBoardReducer from "./UserDashBoardReducer"
import SubSubCategoryReducer from "./SubSubCategoryReducer"
import ConsultantReducer from "./ConsultantReducer"
import UserWalletReducer from "./UserWalletReducer"
import AgoraReducer from "./AgoraReducer"
import RatingReducer from "./RatingReducer"
import ReviewReducer from "./ReviewReducer"
import ConsultantDashBordRducer from "./ConsultantDashboardReducer"
export default combineReducers(
    {
        AuthReducer,
        IndexReducer,
        IndustriesReducer,
        UserDashBoardReducer,
        SubSubCategory: SubSubCategoryReducer,
        ConsultantReducer,
        UserWalletReducer,
        AgoraReducer,
        ConsultantDashBordRducer,
        RatingReducer,
        ReviewReducer
    }
)