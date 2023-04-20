import axios from "axios"
import { AppDispatch } from "../store"
import { GET_USER_DETAILS_PENDING, GET_USER_DETAILS_REJECTED, GET_USER_DETAILS_FULFILLED, VERIFY_CONSULTANT_PENDING, VERIFY_CONSULTANT_FULFILLED, VERIFY_CONSULTANT_FAILED, CONSULTANT_LOGIN_PENDING, CONSULTANT_LOGIN_FULFILLED, CONSULTANT_LOGIN_FAILED,LOG_OUT } from "../Constant"
export const login = (mobile: string,) => async (dispatch: AppDispatch) => {
    try {
        dispatch({ type: "LOGIN_PENDING" })
        const response = await axios.post("/api/mobile/v1/user/login", {
            mobile,
        })
        localStorage.setItem("iid_consultancy_user", JSON.stringify(response.data?.data))
        dispatch({ type: "LOGIN_SUCCESS", payload: response.data?.data })
    } catch (error) {
        dispatch({ type: "LOGIN_FAILED", payload: error.response.data || {} })
    }
}

export const verfiyMobile = (mobile: string = "") => async (dispatch: AppDispatch) => {
    try {
        dispatch({ type: "VERIFY_MOBILE" })
        const response = await axios.post(`/api/mobile/v1/verify`, {
            mobile
        })
        dispatch({ type: "VERIFY_MOBILE_FULFILLED", payload: response.data.data })
    } catch (error) {
        dispatch({ type: "VERIFY_MOBILE_REJECTED", payload: { ...error.response.data, mobile } })
    }
}


export const sendOtp = (mobile: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch({ type: "OTP_SEND_PENDING" })
        const response = await axios.post(`/api/mobile/v1/send/otp`, { mobile })
        dispatch({ type: "OTP_SEND_FULFILLED", payload: response.data })
    } catch (error) {
        dispatch({ type: "OTP_SEND_REJECTED", payload: error.response.data || {} })
    }
}


export const verifyOtp = (mobile: string, otp: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch({ type: "VERIFY_OTP_PENDING" })
        const response = await axios.post(`/api/mobile/v1/otp-verify`, {
            mobile,
            otp
        })
        dispatch({ type: "VERIFY_OTP_FULFILLED", payload: response.data })
    } catch (error) {
        dispatch({ type: "VERIFY_OTP_REJECTED", payload: error.response.data })
    }
}

export const registerUser = (data: object, type: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch({ type: "REGISTER_USER_PENDING" })
        const response = await axios.post(type === "user" ? `/api/mobile/v1/user/register` : "/api/mobile/v1/consultant/register", data)
        localStorage.setItem("iid_consultancy_user", JSON.stringify(response.data.data))
        dispatch({ type: "REGISTER_USER_FULFILLED", payload: response.data?.data })
    } catch (error) {
        dispatch({ type: "REGISTER_USER_REJECTED", payload: error.response.data })
    }
}

export const getUserDetails = (token: string | undefined) => async (dispatch: AppDispatch) => {
    try {
        dispatch({ type: GET_USER_DETAILS_PENDING })
        const response = await axios(`/api/mobile/v1/get-user-details`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        dispatch({ type: GET_USER_DETAILS_FULFILLED, payload: response.data?.data || {} })
    } catch (error) {
        dispatch({ type: GET_USER_DETAILS_REJECTED, payload: error.response.data || {} })
    }
}


export const verifyConsultant = (mobile: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch({ type: VERIFY_CONSULTANT_PENDING })
        const response = await axios.post(`/api/mobile/v1/consultant/verify`, { mobile })
        dispatch({ type: VERIFY_CONSULTANT_FULFILLED, payload: response.data?.data })
    } catch (error) {
        dispatch({ type: VERIFY_CONSULTANT_FAILED, payload: { ...error.response.data, mobile, } })
    }
}

export const loginConsultant = (mobile: string, password: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch({ type: CONSULTANT_LOGIN_PENDING })
        const response = await axios.post("/api/mobile/v1/consultant/login", {
            mobile,
            password
        })
        localStorage.setItem("iid_consultancy_user", JSON.stringify(response.data?.data))
        dispatch({ type: CONSULTANT_LOGIN_FULFILLED, payload: response.data?.data })
    } catch (error) {
        dispatch({ type: CONSULTANT_LOGIN_FAILED, payload: error.response.data || {} })
    }
}

export const logout = () => (dispatch: AppDispatch) => {
    localStorage.removeItem("iid_consultancy_user")
    dispatch({ type: LOG_OUT })
}

