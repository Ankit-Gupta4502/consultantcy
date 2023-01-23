import axios from "axios"
import { AppDispatch } from "../store"
import { GET_CATEGORIES_PENDING, GET_CATEGORIES_FULFILLED, GET_CATEGORIES_REJECTED } from "../Constant"
export const getSectors = () => async (dispatch: AppDispatch) => {
    try {
        dispatch({ type: GET_CATEGORIES_PENDING })
        const response = await axios("/api/mobile/v1/sectors", {
        })
        dispatch({ type: GET_CATEGORIES_FULFILLED, payload: response.data?.sectors })
    } catch (error) {
        dispatch({ type: GET_CATEGORIES_REJECTED, payload: error.response.data })
    }
}