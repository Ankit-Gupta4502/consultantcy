import axios from "axios";
import { AppDispatch } from "../store";
import { GET_USER_WALLET_FULFILLED, GET_USER_WALLET_REJECTED, GET_USER_WALLET_PENDING, GET_CONSULTANT_BOOK_PENDING, GET_CONSULTANT_BOOK_FULFILLED, GET_CONSULTANT_BOOK_REJECTED } from "../Constant";
import { toast } from "react-toastify"
export const getUserWallet = (token: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch({ type: GET_USER_WALLET_PENDING })
        const response = await axios("/api/mobile/v1/user-wallet", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        dispatch({ type: GET_USER_WALLET_FULFILLED, payload: response.data?.data })

    } catch (error) {
        dispatch({ type: GET_USER_WALLET_REJECTED, error: error.response.data })
    }
}

export const bookConsultancy = (token: string, data) => async (dispatch: AppDispatch) => {
    try {
        dispatch({ type: GET_CONSULTANT_BOOK_PENDING })
        const response = await axios.post("/api/mobile/v1/book-appointment", data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        dispatch({ type: GET_CONSULTANT_BOOK_FULFILLED, payload: response.data?.data })
        toast.success("Consultancy Book Successfully")
    } catch (error) {
        toast.error("Something went wrong ")
        dispatch({ type: GET_CONSULTANT_BOOK_REJECTED, payload: error.response.data })
    }
}