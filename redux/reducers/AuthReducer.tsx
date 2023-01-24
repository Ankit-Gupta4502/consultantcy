import { returnKey } from "../../utils/utilities"
import { LOG_OUT } from "../Constant"
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

}





const AuthReducer = (state = initialState, action: actionsFace) => {
    switch (action.type) {
        case "VERIFY_MOBILE":
        case "LOGIN_PENDING":
        case "VERIFY_OTP_PENDING":
        case "OTP_SEND_PENDING":
        case "REGISTER_USER_PENDING":
            return { ...state, loading: true }

        case "VERIFY_MOBILE_FULFILLED":
            return { ...state, loading: false, auth: action.payload, errors: {} }

        case "LOGIN_SUCCESS":
            return { ...state, loading: false, auth: action.payload, errors: {}, isAuthentiCated: true }
        case "VERIFY_OTP_FULFILLED":
            return { ...state, loading: false, otpVerified: true, errors: {}, }
        case "OTP_SEND_FULFILLED":
            return { ...state, loading: false, otpSendStatus: true, errors: {} }

        case "REGISTER_USER_FULFILLED":
            return { ...state, loading: false, errors: {}, auth: returnKey(action.payload, "user"), isAuthentiCated: false }

        case "LOGIN_FAILED":
        case "OTP_SEND_REJECTED":
            return { ...state, loading: false, errors: action.payload, }
        case "VERIFY_OTP_REJECTED":
            return { ...state, loading: false, errors: action.payload, otpVerified: false }
        case "VERIFY_MOBILE_REJECTED":
            return { ...state, loading: false, errors: action.payload, mobile: returnKey(action.payload, "mobile") }

        case LOG_OUT:
            localStorage.removeItem("iid_consultancy_user")
            return { ...state, loading: false, isAuthentiCated: false, auth: {} }


        default:
            return state
    }
}

export default AuthReducer