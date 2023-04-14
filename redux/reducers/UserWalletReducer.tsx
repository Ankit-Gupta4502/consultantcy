import { actionsFace } from "../actionInterface/interface";
import { GET_USER_WALLET_FULFILLED, GET_USER_WALLET_PENDING, GET_USER_WALLET_REJECTED } from "../Constant";
const initialState = {
    loading: false,
    errors: {},
    walletAmount: 0
}
const UserWalletReducer = (state = initialState, action: actionsFace) => {
    switch (action.type) {
        case GET_USER_WALLET_PENDING:
            return { ...state, loading: true }

        case GET_USER_WALLET_FULFILLED:
            return { ...state, loading: false, errors: {}, walletAmount: action.payload }

        case GET_USER_WALLET_REJECTED:
            return { ...state, loading: false, errors: action.payload }

        default:
            return state
    }
}

export default UserWalletReducer