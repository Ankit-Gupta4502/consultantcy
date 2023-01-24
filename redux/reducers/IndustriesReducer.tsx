import { actionsFace } from "../actionInterface/interface"
import { GET_INDUSTRIES_PENDING, GET_INDUSTRIES_FULFILLED, GET_INDUSTRIES_REJECTED } from "../Constant"
interface initState {
    loading: boolean,
    categories: [],
    errors: object
}
const initialState: initState = {
    loading: false,
    categories: [],
    errors: {}
}


const IndustriesReducer = (state = initialState, action: actionsFace) => {
    switch (action.type) {
        case GET_INDUSTRIES_PENDING:
            return { ...state, loading: true }
        case GET_INDUSTRIES_FULFILLED:
            {
                return {
                    ...state,
                    loading: false,
                    categories: Array.isArray(action.payload) ? action.payload : []
                }
            }
        case GET_INDUSTRIES_REJECTED:
            {
                return {
                    ...state, loading: false, errors: action.payload
                }
            }
        default:
            return { ...state }
    }
}
export default IndustriesReducer