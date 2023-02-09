import { actionsFace } from "../actionInterface/interface"
import { GET_SECTORS_PENDING, GET_SECTORS_FULFILLED, GET_SECTORS_REJECTED, GET_CONSULTANTS_PENDING, GET_CONSULTNATS_FULFILLED, GET_CONSULTNATS_REJECTED } from "../Constant"

interface initState {
    loading: boolean,
    categories: [],
    errors: object,
    consultants: []
}
const initialState: initState = {
    loading: false,
    categories: [],
    errors: {},
    consultants: []
}

const IndexReducer = (state = initialState, action: actionsFace) => {
    switch (action.type) {
        case GET_SECTORS_PENDING:
        case GET_CONSULTANTS_PENDING:
            return { ...state, loading: true }

        case GET_SECTORS_FULFILLED:
            return { ...state, loading: false, categories: Array.isArray(action.payload) ? action.payload : [] }

        case GET_CONSULTNATS_FULFILLED:
            return { ...state, loading: false, consultants: Array.isArray(action.payload) ? action.payload : [] }

        case GET_SECTORS_REJECTED:
        case GET_CONSULTNATS_REJECTED:
            return { ...state, loading: false, errors: action.payload }


        default:
            return { ...state }
    }
}

export default IndexReducer