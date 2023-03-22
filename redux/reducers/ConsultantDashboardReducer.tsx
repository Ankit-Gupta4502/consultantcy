import { actionsFace } from "../actionInterface/interface"
const initialState = {
    consultantDetails:{}
}

const UserDashboardReducer = (state = initialState, action: actionsFace) => {
    switch (action.type) {
        case "":

            break;

        default:
            return { ...state }
    }
}


export default UserDashboardReducer