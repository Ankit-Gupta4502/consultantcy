import axios from "axios"
import { GET_ALL_CONSULTANT_APPOINTMENTS_FULFILLED, GET_ALL_CONSULTANT_APPOINTMENTS_PENDING, GET_ALL_CONSULTANT_APPOINTMENTS_REJECTED, GET_SCHEDULE_TIMING_PENDING, GET_SCHEDULE_TIMING_REJECTED, GET_SCHEDULE_TIMING_FULFILLED } from "../Constant/ConsultantTypes"
import { AppDispatch } from "../store"

export const getConsultantAppointments = (token: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch({ type: GET_ALL_CONSULTANT_APPOINTMENTS_PENDING })
        const response = await axios("/api/mobile/v1/get-consultant-appointments-list", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        dispatch({ type: GET_ALL_CONSULTANT_APPOINTMENTS_FULFILLED, payload: response.data?.data })
    } catch (error) {
        dispatch({ type: GET_ALL_CONSULTANT_APPOINTMENTS_REJECTED, error: error.response.data })
    }
}
export const getScheduleTiming = (token: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch({ type: GET_SCHEDULE_TIMING_PENDING })
        const response = await axios("/api/mobile/v1/get-consultant-slot", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        dispatch({ type: GET_SCHEDULE_TIMING_FULFILLED, payload: response.data?.data })
    } catch (error) {
        dispatch({ type: GET_SCHEDULE_TIMING_REJECTED, error: error.response.data })
    }
}
