import { AppDispatch } from "../store";
import axios from "axios";
import { GET_INDUSTRIES_PENDING, GET_INDUSTRIES_FULFILLED, GET_INDUSTRIES_REJECTED } from "../Constant";
export const getIndustries = (slug: string | string[] = "", search: string = "", type: "slug" | "id" = "slug") => async (dispatch: AppDispatch) => {
    try {
        dispatch({ type: GET_INDUSTRIES_PENDING, })
        const response = await axios(type === "slug" ? `/api/mobile/v1/get-industries/${slug}?search=${search}` : `/api/mobile/v1/get-industries-by-id/${slug}`)
        dispatch({ type: GET_INDUSTRIES_FULFILLED, payload: response.data?.data })
    } catch (error) {
        dispatch({ type: GET_INDUSTRIES_REJECTED, payload: error.response.data || {} })
    }
}



