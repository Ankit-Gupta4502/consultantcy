import { returnKey } from "../../utils/utilities"
import { LOG_OUT, GET_USER_DETAILS_FULFILLED, GET_USER_DETAILS_PENDING, GET_CONSULTNATS_REJECTED, GET_USER_DETAILS_REJECTED, VERIFY_CONSULTANT_FAILED, VERIFY_CONSULTANT_FULFILLED, VERIFY_CONSULTANT_PENDING, CONSULTANT_LOGIN_PENDING, CONSULTANT_LOGIN_FAILED, CONSULTANT_LOGIN_FULFILLED } from "../Constant"
import { actionsFace } from "../actionInterface/interface"
const existingUser = typeof window !== "undefined" ? window.localStorage.getItem("iid_consultancy_user") !== "undefined" && JSON.parse(window.localStorage.getItem("iid_consultancy_user")) : ""

const initialState = {
    auth: existingUser || {},
    isAuthentiCated: Boolean(existingUser),
    loading: false,
    errors: {},
    mobile: "",
    otpSendStatus: false,
    otpVerified: false,
    user: {},
}





const AuthReducer = (state = initialState, action: actionsFace) => {
    switch (action.type) {
        case "VERIFY_MOBILE":
        case "LOGIN_PENDING":
        case "VERIFY_OTP_PENDING":
        case "OTP_SEND_PENDING":
        case "REGISTER_USER_PENDING":
        case CONSULTANT_LOGIN_PENDING:
        case VERIFY_CONSULTANT_PENDING:
        case GET_USER_DETAILS_PENDING:
            return { ...state, loading: true }

        case "VERIFY_MOBILE_FULFILLED":
            return { ...state, loading: false, auth: action.payload, errors: {} }

        case VERIFY_CONSULTANT_FULFILLED:
            return { ...state, loading: false, auth: action.payload, errors: {} }

        case "LOGIN_SUCCESS":
        case CONSULTANT_LOGIN_FULFILLED:
            return { ...state, loading: false, auth: action.payload, errors: {}, isAuthentiCated: true }
        case "VERIFY_OTP_FULFILLED":
            return { ...state, loading: false, otpVerified: true, errors: {}, }
        case "OTP_SEND_FULFILLED":
            return { ...state, loading: false, otpSendStatus: true, errors: {} }

        case "REGISTER_USER_FULFILLED":
            return { ...state, loading: false, errors: {}, auth: action.payload, isAuthentiCated: true }

        case GET_USER_DETAILS_FULFILLED:
            return { ...state, loading: false, user: action.payload }
        
        case "RESET_OTP_STATUS":
            return{...state,otpVerified: false}

        case "LOGIN_FAILED":
        case "OTP_SEND_REJECTED":
        case GET_USER_DETAILS_REJECTED:
        case CONSULTANT_LOGIN_FAILED:
            return { ...state, loading: false, errors: action.payload, }
        case "VERIFY_OTP_REJECTED":
            return { ...state, loading: false, errors: action.payload, otpVerified: false }

        case "VERIFY_MOBILE_REJECTED":
        case VERIFY_CONSULTANT_FAILED:
            return { ...state, loading: false, errors: action.payload, mobile: returnKey(action.payload, "mobile") }

        case LOG_OUT:
            return { ...state, loading: false, isAuthentiCated: false, auth: {} }




        default:
            return state
    }
}

export default AuthReducer