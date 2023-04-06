import axios from "axios";
import { AppDispatch } from "../store";
import { GET_CONSULTANT_BY_INDUSTRY_PENDING, GET_CONSULTANT_BY_INDUSTRY_FULFILLED, GET_CONSULTANT_BY_INDUSTRY_REJECTED } from "../Constant";

export const getConsultantByIndustry = (slug: string|string[], subslug: string|string[],search:string) => async (dispatch: AppDispatch) => {
    try {
        dispatch({ type: GET_CONSULTANT_BY_INDUSTRY_PENDING })
        const response = await axios(`/api/mobile/v1/get-consultantsBy-industry/${slug}/${subslug}?search=${search}`)
        dispatch({ type: GET_CONSULTANT_BY_INDUSTRY_FULFILLED, payload: response.data?.data })
    } catch (error) {
        dispatch({ type: GET_CONSULTANT_BY_INDUSTRY_REJECTED, error: error.response.data })

    }
}   