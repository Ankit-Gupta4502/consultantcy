import { actionsFace } from "../actionInterface/interface";
import { IReduxState } from "../actionInterface/IUserDashboard";
import { UPDATE_USER_DETAILS_FULFILLED, UPDATE_USER_DETAILS_PENIDNG, UPDATE_USER_DETAILS_REJECTED, GET_CONSULTANT_BOOK_PENDING, GET_CONSULTANT_BOOK_REJECTED, GET_CONSULTANT_BOOK_FULFILLED } from "../Constant";
import { GET_USER_APPOINTMENTS_FULFILLED, GET_USER_APPOINTMENTS_PENDING, GET_USER_APPOINTMENTS_REJECTED } from "../Constant/UserDashboardTypes";

const initialState: IReduxState = {
    loading: false,
    error: {},
    appointments: [],
    peerId:0
}


const UserDashBoardReducer = (state = initialState, action: actionsFace) => {

    switch (action.type) {
        case UPDATE_USER_DETAILS_PENIDNG:
        case GET_CONSULTANT_BOOK_PENDING:
        case GET_USER_APPOINTMENTS_PENDING:
            return { ...state, loading: true }
        case UPDATE_USER_DETAILS_FULFILLED:
            return { ...state, loading: false }
        case GET_CONSULTANT_BOOK_FULFILLED:
            return { ...state, loading: false, error: {} }
        case GET_USER_APPOINTMENTS_FULFILLED:
            return { ...state, loading: false, error: {}, appointments: Array.isArray(action.payload) ? action.payload : [] }
        case UPDATE_USER_DETAILS_REJECTED:
        case GET_CONSULTANT_BOOK_REJECTED:
        case GET_USER_APPOINTMENTS_REJECTED:
            return { ...state, loading: false, error: action.payload }
        case "SET_PEER_ID":
        return {...state,loading:false,peerId:action.payload}
        default:
            return state
    }
}


export default UserDashBoardReducer