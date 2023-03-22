import { AppDispatch } from "../store"
import axios from "axios"
import { UPDATE_USER_DETAILS_PENIDNG, UPDATE_USER_DETAILS_FULFILLED } from "../Constant"
import {toast} from "react-toastify"
export const updateUserDetail = (data, token: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch({ type: UPDATE_USER_DETAILS_PENIDNG })
        const response = await axios.put("/api/mobile/v1/update-profile",data, {
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