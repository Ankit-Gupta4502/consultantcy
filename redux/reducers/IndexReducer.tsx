import { actionsFace } from "../actionInterface/interface"
import { GET_SECTORS_PENDING, GET_SECTORS_FULFILLED, GET_SECTORS_REJECTED, GET_CONSULTANTS_PENDING, GET_CONSULTNATS_FULFILLED, GET_CONSULTNATS_REJECTED, GET_CONSULTANT_DETAILS_PENDING, GET_CONSULTANT_DETAILS_FULFILLED, GET_CONSULTANT_SERVICES_PENDING, GET_CONSULTANT_SERVICES_FULFILLED, GET_CONSULTANT_SERVICES_REJECTED, GET_NAV_LINKS_FULFILLED, GET_NAV_LINKS_PENDING, GET_NAV_LINKS_REJECTED, GET_TOP_CONSULTANTS_PENDING, GET_TOP_CONSULTANTS_FULFILLED, GET_TOP_CONSULTANTS_REJECTED, GET_CATEGORY_TYPES_FULFILLED, GET_CATEGORY_TYPES_REJECTED, GET_CATEGORY_TYPES_PENDING, GET_SECTOR_BY_CATEGORY_PENDING, GET_SECTOR_BY_CATEGORY_FULFILLED, GET_SECTOR_BY_CATEGORY_REJECTED } from "../Constant"

const initialState = {
    loading: false,
    categories: [],
    errors: {},
    consultants: [],
    consultantDetails: {},
    services: [],
    servicesCount: 0,
    navLinks: [],
    topConsultants: [],
    categoryTypes: [],
    sectors: []
}

const IndexReducer = (state = initialState, action: actionsFace) => {
    switch (action.type) {
        case GET_SECTORS_PENDING:
        case GET_CONSULTANTS_PENDING:
        case GET_CONSULTANT_DETAILS_PENDING:
        case GET_NAV_LINKS_PENDING:
        case GET_CONSULTANT_SERVICES_PENDING:
        case GET_TOP_CONSULTANTS_PENDING:
        case GET_CATEGORY_TYPES_PENDING:
        case GET_SECTOR_BY_CATEGORY_PENDING:
            return { ...state, loading: true }




        case GET_SECTORS_FULFILLED:

            return { ...state, loading: false, categories: Array.isArray(action.payload) ? action.payload : [] }

        case GET_CONSULTNATS_FULFILLED:
            return { ...state, loading: false, consultants: Array.isArray(action.payload) ? action.payload : [] }

        case GET_CONSULTANT_DETAILS_FULFILLED:
            return { ...state, loading: false, consultantDetails: action.payload }

        case GET_TOP_CONSULTANTS_FULFILLED:
            return { ...state, loading: false, errors: {}, topConsultants: action.payload }

        case GET_SECTOR_BY_CATEGORY_FULFILLED:
            return { ...state, sectors: action.payload, loading: false, errors: {} }


        case GET_CONSULTANT_SERVICES_FULFILLED:
            return { ...state, loading: false, error: {}, services: action.payload?.rows?.slice(0, 30), servicesCount: action.payload?.count }

        case GET_NAV_LINKS_FULFILLED:
            return {
                ...state,
                loading: false,
                errors: {},
                navLinks: action.payload
            }

        case GET_CATEGORY_TYPES_FULFILLED:
            return { ...state, loading: false, categoryTypes: action.payload, errors: {} }

        case GET_SECTORS_REJECTED:
        case GET_CONSULTNATS_REJECTED:
        case GET_NAV_LINKS_REJECTED:
        case GET_CONSULTANT_SERVICES_REJECTED:
        case GET_TOP_CONSULTANTS_REJECTED:
        case GET_NAV_LINKS_FULFILLED:
        case GET_SECTOR_BY_CATEGORY_REJECTED:
            return { ...state, loading: false, errors: action.payload }


        default:
            return { ...state }
    }
}

export default IndexReducer