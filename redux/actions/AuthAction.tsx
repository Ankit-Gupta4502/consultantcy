import axios from "axios"
import { AppDispatch } from "../store"
export const login = (mobile: string, password: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch({ type: "LOGIN_PENDING" })
        const response = await axios.post("/api/mobile/v1/user/login", {
            mobile,
            password
        })
        localStorage.setItem("iid_consultancy_user", JSON.stringify(response.data))
        dispatch({ type: "LOGIN_SUCCESS", payload: response.data })
    } catch (error) {
        dispatch({ type: "LOGIN_FAILED", payload: error.response.data })
    }
}

export const verfiyMobile = (mobile: string = "") => async (dispatch: AppDispatch) => {
    try {
        dispatch({ type: "VERIFY_MOBILE" })
        const response = await axios.post(`/api/mobile/v1/verify`, {
            mobile
        })
        dispatch({ type: "VERIFY_MOBILE_FULFILLED", payload: response.data.user })
    } catch (error) {
        dispatch({ type: "VERIFY_MOBILE_REJECTED", payload: { ...error.response.data, mobile } })
    }
}



