import axios from "axios";
import { AppDispatch } from "../store";
import { GET_USER_WALLET_FULFILLED, GET_USER_WALLET_REJECTED, GET_USER_WALLET_PENDING } from "../Constant";

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
        dispatch({ type: GET_USER_WALLET_FULFILLED, error: error.response.data })
    }
}