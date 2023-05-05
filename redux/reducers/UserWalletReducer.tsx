import { actionsFace } from "../actionInterface/interface";
import { GET_USER_WALLET_FULFILLED, GET_USER_WALLET_PENDING, GET_USER_WALLET_REJECTED, } from "../Constant";
import { GET_USER_WALLET_HISTORY_FULFILLED, GET_USER_WALLET_HISTORY_PENDING, GET_USER_WALLET_HISTORY_REJECTED } from "../Constant/UserDashboardTypes";

const initialState = {
    loading: false,
    errors: {},
    walletAmount: 0,
    walletHistory: []
}
const UserWalletReducer = (state = initialState, action: actionsFace) => {
    switch (action.type) {
        case GET_USER_WALLET_PENDING:
        case GET_USER_WALLET_HISTORY_PENDING:
            return { ...state, loading: true }

        case GET_USER_WALLET_FULFILLED:
            const wallet = (action.payload?.creditAmount?.total_amount || 0) - (action.payload?.debitAmount?.total_amount || 0)
            return { ...state, loading: false, errors: {}, walletAmount: wallet }

        case GET_USER_WALLET_HISTORY_FULFILLED:
            return { ...state, loading: false, errors: {}, walletAmount: action.payload.totalAmount, walletHistory: action.payload.data }

        case GET_USER_WALLET_REJECTED:
        case GET_USER_WALLET_HISTORY_REJECTED:
            return { ...state, loading: false, errors: action.payload }

        default:
            return state
    }
}

export default UserWalletReducer