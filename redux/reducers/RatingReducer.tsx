import { actionsFace } from "../actionInterface/interface";
import { GET_RATING_FULFILLED, GET_RATING_PENDING, GET_RATING_REJECTED, GET_CONSULTANT_RATING_FULFILLED, GET_CONSULTANT_RATING_PENDING, GET_CONSULTANT_RATING_REJECTED } from "../Constant";
const inintialState = {
    loading: false,
    errors: {},
    consultantRatings: [],
    ratings: [],

}
const RatingReducer = (state = inintialState, action: actionsFace) => {
    switch (action.type) {

        case GET_RATING_PENDING:
            return { ...state, loading: true }



        case GET_RATING_FULFILLED:
            return { ...state, loading: false, ratings: action.payload }




        case GET_RATING_REJECTED:
            return { ...state, loading: false, errors: action.payload }


        case GET_CONSULTANT_RATING_PENDING:
            return { ...state, loading: true }



        case GET_CONSULTANT_RATING_FULFILLED:
            return { ...state, loading: false, consultantRatings: action.payload }




        case GET_CONSULTANT_RATING_REJECTED:
            return { ...state, loading: false, errors: action.payload }



        default:
            return { ...state, }
    }
}

export default RatingReducer