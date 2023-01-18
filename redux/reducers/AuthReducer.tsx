import { returnErr } from "../../utils/utilities"
const existingUser = typeof window !== "undefined" ? window.localStorage.getItem("iid_consultancy_user") && JSON.parse(window.localStorage.getItem("iid_consultancy_user")) : ""

const initialState = {
    auth: existingUser || {},
    isAuthentiCated: Boolean(existingUser),
    loading: false,
    errors: {},
    mobile: ""
}



interface actionsFace {
    payload?: object | [] | boolean | string,
    type: string
}

const AuthReducer = (state = initialState, action: actionsFace) => {
    switch (action.type) {
        case "VERIFY_MOBILE":
        case "LOGIN_PENDING":
            return { ...state, loading: true }

        case "VERIFY_MOBILE_FULFILLED":
            return { ...state, loading: false, auth: action.payload, errors: {} }

        case "LOGIN_SUCCESS":
            return { ...state, loading: false, auth: action.payload, errors: {}, isAuthentiCated: true }

        case "VERIFY_MOBILE_REJECTED":
        case "LOGIN_FAILED":
            return { ...state, loading: false, errors: action.payload, mobile: returnErr(action.payload, "mobile") }

        default:
            return state
    }
}

export default AuthReducer