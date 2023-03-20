import { actionsFace } from "../actionInterface/interface"
import { GET_SECTORS_PENDING, GET_SECTORS_FULFILLED, GET_SECTORS_REJECTED, GET_CONSULTANTS_PENDING, GET_CONSULTNATS_FULFILLED, GET_CONSULTNATS_REJECTED, GET_CONSULTANT_DETAILS_PENDING, GET_CONSULTANT_DETAILS_FULFILLED } from "../Constant"

interface initState {
    loading: boolean,
    categories: [],
    errors: object,
    consultants: [],
    consultantDetails: {
        name?: string,
        password?: string,
        email?: string,
        consultant_slots?: {
            id?: number
            dayIndex?: string,
            periodList: string,
            [key: string]: any
        }[]
        consultant_profile?: {
            whatsAppNumber?: string,
            skill?: string,
            designation?: string,
            preferredIndustry?: string,
            experience?: string,
            preferredSector?: string,
            workExperience?: string,
            ProfileSummary: string
            [key: string]: any
        },
        consultant_sectors?:string[]
        [key: string]: any
    }
}
const initialState: initState = {
    loading: false,
    categories: [],
    errors: {},
    consultants: [],
    consultantDetails: {}
}

const IndexReducer = (state = initialState, action: actionsFace) => {
    switch (action.type) {
        case GET_SECTORS_PENDING:
        case GET_CONSULTANTS_PENDING:
        case GET_CONSULTANT_DETAILS_PENDING:
            return { ...state, loading: true }

        case GET_SECTORS_FULFILLED:
            return { ...state, loading: false, categories: Array.isArray(action.payload) ? action.payload : [] }

        case GET_CONSULTNATS_FULFILLED:
            return { ...state, loading: false, consultants: Array.isArray(action.payload) ? action.payload : [] }

        case GET_CONSULTANT_DETAILS_FULFILLED:
            return { ...state, loading: false, consultantDetails: action.payload }

        case GET_SECTORS_REJECTED:
        case GET_CONSULTNATS_REJECTED:
            return { ...state, loading: false, errors: action.payload }


        default:
            return { ...state }
    }
}

export default IndexReducer