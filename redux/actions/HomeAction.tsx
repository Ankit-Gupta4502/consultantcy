import axios from "axios"
import { AppDispatch } from "../store"
import {
    GET_SECTORS_PENDING, GET_SECTORS_FULFILLED, GET_SECTORS_REJECTED, GET_CONSULTANTS_PENDING, GET_CONSULTNATS_FULFILLED, GET_CONSULTNATS_REJECTED, GET_CONSULTANT_DETAILS_PENDING, GET_CONSULTANT_DETAILS_FULFILLED, GET_CONSULTANT_DETAILS_FAILED, GET_CONSULTANT_SERVICES_PENDING, GET_CONSULTANT_SERVICES_FULFILLED, GET_CONSULTANT_SERVICES_REJECTED, GET_NAV_LINKS_PENDING, GET_NAV_LINKS_FULFILLED, GET_NAV_LINKS_REJECTED, GET_TOP_CONSULTANTS_PENDING, GET_TOP_CONSULTANTS_FULFILLED, GET_INDUSTRIES_REJECTED, GET_TOP_CONSULTANTS_REJECTED, GET_CATEGORY_TYPES_PENDING, GET_CATEGORY_TYPES_FULFILLED, GET_CATEGORY_TYPES_REJECTED,
    GET_SECTOR_BY_CATEGORY_PENDING,
    GET_SECTOR_BY_CATEGORY_FULFILLED,
    GET_SECTOR_BY_CATEGORY_REJECTED
} from "../Constant"
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

export const getConsultantDetails = (slug: string[] | string) => async (dispatch: AppDispatch) => {
    try {
        dispatch({ type: GET_CONSULTANT_DETAILS_PENDING })
        const response = await axios(`/api/mobile/v1/consultant-details/${slug}`)
        dispatch({ type: GET_CONSULTANT_DETAILS_FULFILLED, payload: response.data?.data })
    } catch (error) {
        dispatch({ type: GET_CONSULTANT_DETAILS_FAILED, payload: error.response.data || {} })
    }
}

export const getConsultantServices = () => async (dispatch: AppDispatch) => {
    try {
        dispatch({ type: GET_CONSULTANT_SERVICES_PENDING, })
        const response = await axios("/api/web/v1/consultant-services")
        dispatch({ type: GET_CONSULTANT_SERVICES_FULFILLED, payload: response.data.data })
    } catch (error) {
        dispatch({ type: GET_CONSULTANT_SERVICES_REJECTED, payload: error.response.data })
    }
}

export const getNavLinks = () => async (dispatch: AppDispatch) => {
    try {
        dispatch({ type: GET_NAV_LINKS_PENDING, })
        const response = await axios("/api/web/v1/mega-menu")
        dispatch({ type: GET_NAV_LINKS_FULFILLED, payload: response.data.data })
    } catch (error) {
        dispatch({ type: GET_NAV_LINKS_REJECTED, payload: error.response.data })
    }
}


export const getTopConsultants = () => async (dispatch: AppDispatch) => {
    try {
        dispatch({ type: GET_TOP_CONSULTANTS_PENDING })
        const response = await axios(`/api/web/v1/top-consultant`)
        dispatch({ type: GET_TOP_CONSULTANTS_FULFILLED, payload: response.data?.data })
    } catch (error) {
        dispatch({ type: GET_TOP_CONSULTANTS_REJECTED, error: error.response.data })
    }
}

export const getCategoryType = () => async (dispatch: AppDispatch) => {
    try {
        dispatch({ type: GET_CATEGORY_TYPES_PENDING })
        const response = await axios("/api/mobile/v1/category-type")
        dispatch({ type: GET_CATEGORY_TYPES_FULFILLED, payload: response.data?.data })
    } catch (error) {
        dispatch({ type: GET_CATEGORY_TYPES_REJECTED, error: error.response.data })
    }
}

export const getSectorByType = (id?: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch({ type: GET_SECTOR_BY_CATEGORY_PENDING })
        const response = await axios(`/api/web/v1/get-sectorBy-type/${id}`)
        dispatch({ type: GET_SECTOR_BY_CATEGORY_FULFILLED, payload: response.data?.data })
    } catch (error) {
        dispatch({ type: GET_SECTOR_BY_CATEGORY_REJECTED, error: error.response.data })
    }
}