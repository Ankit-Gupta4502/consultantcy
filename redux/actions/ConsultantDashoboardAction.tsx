import axios from "axios"
import { GET_ALL_CONSULTANT_APPOINTMENTS_FULFILLED, GET_ALL_CONSULTANT_APPOINTMENTS_PENDING, GET_ALL_CONSULTANT_APPOINTMENTS_REJECTED } from "../Constant/ConsultantTypes"
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