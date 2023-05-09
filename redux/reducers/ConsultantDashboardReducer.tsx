import { actionsFace } from "../actionInterface/interface"
import { Istate } from "../actionInterface/IConsultantDashboard"
import { GET_ALL_CONSULTANT_APPOINTMENTS_PENDING, GET_ALL_CONSULTANT_APPOINTMENTS_FULFILLED, GET_ALL_CONSULTANT_APPOINTMENTS_REJECTED, GET_SCHEDULE_TIMING_FULFILLED, GET_SCHEDULE_TIMING_PENDING, GET_SCHEDULE_TIMING_REJECTED } from "../Constant/ConsultantTypes";
const initialState: Istate = {
    appointments: [],
    loading: false,
    scheduleList: [],
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




        case GET_SCHEDULE_TIMING_PENDING:
            return { ...state, loading: true }

        case GET_SCHEDULE_TIMING_FULFILLED:
            return { ...state, loading: false, error: {}, scheduleList: Array.isArray(action.payload) ? action.payload : [] }

        case GET_SCHEDULE_TIMING_REJECTED:
            return { ...state, error: action.payload, loading: false }

        default:
            return { ...state }
    }
}


export default ConsultantDashBordRducer