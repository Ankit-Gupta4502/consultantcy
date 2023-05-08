import axios from "axios";
import { GET_REVIEW_FULFILLED, GET_REVIEW_PENDING, GET_REVIEW_REJECTED, } from "../Constant";
import { AppDispatch } from "../store";

export const getReview = () => async (dispatch: AppDispatch) => {
    try {
        dispatch({ type: GET_REVIEW_PENDING })
        const response = await axios(`/api/mobile/v1/get-all-reviews`)

        dispatch({ type: GET_REVIEW_FULFILLED, payload: response.data?.data })

    } catch (error) {
        dispatch({ type: GET_REVIEW_REJECTED, error: error.response.data })
    }
}