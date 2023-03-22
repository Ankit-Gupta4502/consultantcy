import { actionsFace } from "../actionInterface/interface";
import { UPDATE_USER_DETAILS_FULFILLED, UPDATE_USER_DETAILS_PENIDNG, UPDATE_USER_DETAILS_REJECTED } from "../Constant";

const initialState = {
    loading: false,
    error: {},
}


const UserDashBoardReducer = (state = initialState, action: actionsFace) => {

    switch (action.type) {
        case UPDATE_USER_DETAILS_PENIDNG:
            return { ...state, loading: true }
        case UPDATE_USER_DETAILS_FULFILLED:
            return { ...state, loading: false }
        case UPDATE_USER_DETAILS_REJECTED:
            return { ...state, loading: false, error: action.payload }
        default:
            return state
    }
}


export default UserDashBoardReducer