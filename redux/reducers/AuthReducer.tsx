import { returnKey } from "../../utils/utilities"
const existingUser = typeof window !== "undefined" ? window.localStorage.getItem("iid_consultancy_user") && JSON.parse(window.localStorage.getItem("iid_consultancy_user")) : ""

const initialState = {
    auth: existingUser || {},
    isAuthentiCated: Boolean(existingUser),
    loading: false,
    errors: {},
    mobile: "",
    otpSendStatus: false,
    otpVerified: false,

}



interface actionsFace {
    payload?: object | [] | boolean | string,
    type: string
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


        default:
            return state
    }
}

export default AuthReducer