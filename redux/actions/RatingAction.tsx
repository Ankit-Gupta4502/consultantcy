import axios from "axios";
import { GET_RATING_FULFILLED, GET_RATING_PENDING, GET_RATING_REJECTED, GET_CONSULTANT_RATING_FULFILLED, GET_CONSULTANT_RATING_PENDING, GET_CONSULTANT_RATING_REJECTED } from "../Constant";
import { AppDispatch } from "../store";

export const getRating = (token: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch({ type: GET_RATING_PENDING })
        const response = await axios(`/api/mobile/v1/get-users-ratings`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        dispatch({ type: GET_RATING_FULFILLED, payload: response.data?.data })

    } catch (error) {
        dispatch({ type: GET_RATING_REJECTED, error: error.response.data })
    }
}
export const getConsultantRating = (token: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch({ type: GET_CONSULTANT_RATING_PENDING })
        const response = await axios(`/api/mobile/v1/get-consultant-rating`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        dispatch({ type: GET_CONSULTANT_RATING_FULFILLED, payload: response.data?.data })

    } catch (error) {
        dispatch({ type: GET_CONSULTANT_RATING_REJECTED, error: error.response.data })
    }
}