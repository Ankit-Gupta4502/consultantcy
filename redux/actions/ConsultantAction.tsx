import { AppDispatch } from "../store";
import { GET_CONSULTANT_SLOT_LIST_PENDING, GET_CONSULTANT_SLOT_LIST_FULFILLED, GET_CONSULTANT_SLOT_LIST_REJECTED, GET_RATINGS_FULFILLED, GET_RATINGS_PENDING, GET_RATINGS_REJECTED, GET_ALL_CONSULTANTS_PENDING, GET_ALL_CONSULTANTS_FULFILLED, GET_ALL_CONSULTANTS_REJECTED } from "../Constant/ConsultantTypes";
import axios from "axios";

export const getConsultantSlot = (slug?: string | string[], slot?: string | number, token?: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch({ type: GET_CONSULTANT_SLOT_LIST_PENDING })
        const response = await axios(`/api/mobile/v1/${token ? "auth/get-consultant-slots" : "get-consultant-slot"}/${slug}?filter=${slot}`, { headers: { Authorization: `Bearer ${token}` } })
        dispatch({ type: GET_CONSULTANT_SLOT_LIST_FULFILLED, payload: response.data?.data })
    } catch (error) {
        dispatch({ type: GET_CONSULTANT_SLOT_LIST_REJECTED, payload: error.response.data })
    }
}

export const getReviews = (slug: string | string[]) => async (dispatch: AppDispatch) => {
    try {
        dispatch({ type: GET_RATINGS_PENDING })
        const response = await axios(`/api/mobile/v1/get-ratings/${slug}`)
        dispatch({ type: GET_RATINGS_FULFILLED, payload: response.data?.data })
    } catch (error) {
        dispatch({ type: GET_RATINGS_REJECTED, error: error.response.data })
    }
}

export const getAllConsultants = (search: string = "", sectorId: string = "", industryId: string = '', sort: string = "", token?: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch({ type: GET_ALL_CONSULTANTS_PENDING })
        const response = await axios(`  ${token ? "/api/mobile/v1/auth/get-consultants" : "/api/mobile/v1/get-consultants"}?search=${search}&sector=${sectorId}&industry=${industryId}&sort=${sort}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        dispatch({ type: GET_ALL_CONSULTANTS_FULFILLED, payload: response.data?.data })
    } catch (error) {
        dispatch({ type: GET_ALL_CONSULTANTS_REJECTED, error: error.response.data })
    }
}