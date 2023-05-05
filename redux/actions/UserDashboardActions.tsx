import { AppDispatch } from "../store"
import axios from "axios"
import { UPDATE_USER_DETAILS_PENIDNG, UPDATE_USER_DETAILS_FULFILLED } from "../Constant"
import { toast } from "react-toastify"
import { GET_USER_APPOINTMENTS_FULFILLED, GET_USER_APPOINTMENTS_PENDING, GET_USER_APPOINTMENTS_REJECTED, GET_USER_WALLET_HISTORY_FULFILLED, GET_USER_WALLET_HISTORY_PENDING, GET_USER_WALLET_HISTORY_REJECTED } from "../Constant/UserDashboardTypes"
export const updateUserDetail = (data, token: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch({ type: UPDATE_USER_DETAILS_PENIDNG })
        const response = await axios.put("/api/mobile/v1/update-profile", data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        dispatch({ type: UPDATE_USER_DETAILS_FULFILLED, payload: response.data })
        toast.success(response.data?.message)
    } catch (error) {
        dispatch({ type: UPDATE_USER_DETAILS_FULFILLED, payload: error.response.data })
    }
}

export const getUserAppointments = (token: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch({ type: GET_USER_APPOINTMENTS_PENDING })
        const response = await axios("/api/mobile/v1/user-appointments", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        dispatch({ type: GET_USER_APPOINTMENTS_FULFILLED, payload: response.data?.data?.rows })
    } catch (error) {
        dispatch({ type: GET_USER_APPOINTMENTS_REJECTED, error: error.response.data })
    }
}


export const getUserWalletHistory = (token:string) => async (dispatch: AppDispatch) => {
    try {
        dispatch({ type: GET_USER_WALLET_HISTORY_PENDING })
        const response = await axios("/api/mobile/v1/user-wallet-history",{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
        dispatch({ type: GET_USER_WALLET_HISTORY_FULFILLED, payload: response.data })
    } catch (error) {
        dispatch({ type: GET_USER_WALLET_HISTORY_REJECTED, error: error.response.data })
    }
}