import { actionsFace } from "../actionInterface/interface";
import { GET_CONSULTANT_SLOT_LIST_PENDING, GET_CONSULTANT_SLOT_LIST_FULFILLED, GET_CONSULTANT_SLOT_LIST_REJECTED, GET_RATINGS_PENDING, GET_RATINGS_FULFILLED, GET_RATINGS_REJECTED } from "../Constant/ConsultantTypes";
const inintialState = {
    loading: false,
    errors: {},
    consultantSlots: [],
    ratings: []
}
const ConsultantReducer = (state = inintialState, action: actionsFace) => {
    switch (action.type) {
        case GET_CONSULTANT_SLOT_LIST_PENDING:
        case GET_RATINGS_PENDING:
            return { ...state, loading: true }

        case GET_CONSULTANT_SLOT_LIST_FULFILLED:
            return { ...state, loading: false, consultantSlots: action.payload, errors: {} }

        case GET_RATINGS_FULFILLED:
            return { ...state, loading: false, ratings: action.payload }

        case GET_CONSULTANT_SLOT_LIST_REJECTED:
        case GET_RATINGS_REJECTED:
            return { ...state, loading: false, errors: action.payload }

        default:
            return { ...state, }
    }
}

export default ConsultantReducer