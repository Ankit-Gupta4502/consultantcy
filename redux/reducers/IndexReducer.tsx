import { actionsFace } from "./AuthReducer";
import { GET_CATEGORIES_PENDING, GET_CATEGORIES_FULFILLED, GET_CATEGORIES_REJECTED } from "../Constant"

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
        case GET_CATEGORIES_PENDING:
            return { ...state, loading: true }

        case GET_CATEGORIES_FULFILLED:
            console.log("working");

            return { ...state, loading: false, categories: Array.isArray(action.payload) ? action.payload : [] }

        case GET_CATEGORIES_REJECTED:
            return { ...state, loading: false, errors: action.payload }
        default:
            return { ...state }
    }
}

export default IndexReducer