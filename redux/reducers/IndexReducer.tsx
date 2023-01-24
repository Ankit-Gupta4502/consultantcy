import { actionsFace } from "../actionInterface/interface"
import { GET_SECTORS_PENDING, GET_SECTORS_FULFILLED, GET_SECTORS_REJECTED } from "../Constant"

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

const IndexReducer = (state = initialState, action: actionsFace) => {
    switch (action.type) {
        case GET_SECTORS_PENDING:
            return { ...state, loading: true }

        case GET_SECTORS_FULFILLED:
            return { ...state, loading: false, categories: Array.isArray(action.payload) ? action.payload : [] }

        case GET_SECTORS_REJECTED:
            return { ...state, loading: false, errors: action.payload }
        default:
            return { ...state }
    }
}

export default IndexReducer