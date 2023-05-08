import { actionsFace } from "../actionInterface/interface";
import { GET_REVIEW_FULFILLED, GET_REVIEW_PENDING, GET_REVIEW_REJECTED, } from "../Constant";
const inintialState = {
    loading: false,
    errors: {},

    review: [],

}
const ReviewReducer = (state = inintialState, action: actionsFace) => {
    switch (action.type) {

        case GET_REVIEW_PENDING:
            return { ...state, loading: true }



        case GET_REVIEW_FULFILLED:
            return { ...state, loading: false, review: action.payload }




        case GET_REVIEW_REJECTED:
            return { ...state, loading: false, errors: action.payload }

        default:
            return { ...state, }
    }
}

export default ReviewReducer