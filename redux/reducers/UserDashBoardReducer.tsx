import { actionsFace } from "../actionInterface/interface";
import { UPDATE_USER_DETAILS_FULFILLED, UPDATE_USER_DETAILS_PENIDNG, UPDATE_USER_DETAILS_REJECTED,GET_CONSULTANT_BOOK_PENDING,GET_CONSULTANT_BOOK_REJECTED,GET_CONSULTANT_BOOK_FULFILLED } from "../Constant";

const initialState = {
    loading: false,
    error: {},
}


const UserDashBoardReducer = (state = initialState, action: actionsFace) => {

    switch (action.type) {
        case UPDATE_USER_DETAILS_PENIDNG:
        case GET_CONSULTANT_BOOK_PENDING:
            return { ...state, loading: true }
        case UPDATE_USER_DETAILS_FULFILLED:
            return { ...state, loading: false }
         case   GET_CONSULTANT_BOOK_FULFILLED:
                return {...state,loading:false,error:{}}
        case UPDATE_USER_DETAILS_REJECTED:
        case     GET_CONSULTANT_BOOK_REJECTED:
            return { ...state, loading: false, error: action.payload }
        default:
            return state
    }
}


export default UserDashBoardReducer