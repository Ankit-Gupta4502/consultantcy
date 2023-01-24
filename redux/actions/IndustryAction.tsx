import { AppDispatch } from "../store";
import axios from "axios";
import { GET_INDUSTRIES_PENDING, GET_INDUSTRIES_FULFILLED, GET_INDUSTRIES_REJECTED } from "../Constant";
export const getIndustries = (slug: string | string[] = "") => async (dispatch: AppDispatch) => {
    try {
        dispatch({ type: GET_INDUSTRIES_PENDING, })
        const response = await axios(`/api/mobile/v1/industries/${slug}`)
        dispatch({ type: GET_INDUSTRIES_FULFILLED, payload: response.data?.industries })
    } catch (error) {
        dispatch({ type: GET_INDUSTRIES_REJECTED, payload: error.response.data })
    }
}