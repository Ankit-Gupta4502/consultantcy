import { actionsFace } from "../actionInterface/interface"
import { Istate } from "../actionInterface/IConsultantDashboard"
import { GET_ALL_CONSULTANT_APPOINTMENTS_PENDING, GET_ALL_CONSULTANT_APPOINTMENTS_FULFILLED, GET_ALL_CONSULTANT_APPOINTMENTS_REJECTED } from "../Constant/ConsultantTypes";
const initialState: Istate = {
    appointments: [],
    loading: false,
    error: {}
}

const ConsultantDashBordRducer = (state = initialState, action: actionsFace) => {
    switch (action.type) {
        case GET_ALL_CONSULTANT_APPOINTMENTS_PENDING:
            return { ...state, loading: true }

        case GET_ALL_CONSULTANT_APPOINTMENTS_FULFILLED:
            return { ...state, loading: false, error: {}, appointments: Array.isArray(action.payload) ? action.payload : [] }

        case GET_ALL_CONSULTANT_APPOINTMENTS_REJECTED:
            return { ...state, error: action.payload, loading: false }

        default:
            return { ...state }
    }
}


export default ConsultantDashBordRducer