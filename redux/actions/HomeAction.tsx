import axios from "axios"
import { AppDispatch } from "../store"
import { GET_SECTORS_PENDING, GET_SECTORS_FULFILLED, GET_SECTORS_REJECTED, GET_CONSULTANTS_PENDING, GET_CONSULTNATS_FULFILLED, GET_CONSULTNATS_REJECTED } from "../Constant"
export const getSectors = () => async (dispatch: AppDispatch) => {
    try {
        dispatch({ type: GET_SECTORS_PENDING })
        const response = await axios("/api/mobile/v1/sectors", {
        })
        dispatch({ type: GET_SECTORS_FULFILLED, payload: response.data?.data })
    } catch (error) {
        dispatch({ type: GET_SECTORS_REJECTED, payload: error.response.data || {} })
    }
}

export const getConsultants = () => async (dispatch: AppDispatch) => {
    try {
        dispatch({ type: GET_CONSULTANTS_PENDING })
        const response = await axios("/api/mobile/v1/consultants", {
        })
        dispatch({ type: GET_CONSULTNATS_FULFILLED, payload: response.data?.data })
    } catch (error) {
        dispatch({ type: GET_CONSULTNATS_REJECTED, payload: error.response.data || {} })
    }
}