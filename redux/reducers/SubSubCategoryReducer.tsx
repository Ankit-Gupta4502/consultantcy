
import { actionsFace } from "../actionInterface/interface"
import { GET_CONSULTANT_BY_INDUSTRY_PENDING, GET_CONSULTANT_BY_INDUSTRY_FULFILLED, GET_CONSULTANT_BY_INDUSTRY_REJECTED } from "../Constant";
const inintialState = {
    loading: false,
    errors: {},
    consultants: []
}

const SubSubCategoryReducer = (state = inintialState, action: actionsFace) => {
    switch (action.type) {
        case GET_CONSULTANT_BY_INDUSTRY_PENDING:
            return { ...state, loading: true }
        case GET_CONSULTANT_BY_INDUSTRY_FULFILLED:
            return { ...state, loading: false, consultants: action.payload }
        case GET_CONSULTANT_BY_INDUSTRY_REJECTED:
            return { ...state, loading: false, error: action.payload }
        default:
            return { ...state }
    }
}

export default SubSubCategoryReducer