import { returnKey } from "../../utils/utilities"
import { actionsFace } from "../actionInterface/interface"
const inintialState = {
    message: "",
    show: false,
    state: "success"
}

const ToastReducer = (state = inintialState, action: actionsFace) => {
    switch (action.type) {
        case "DISMISS_TOAST":
            return { ...state, show: false }
        case "SHOW_TOAST":
            return { show:true, state: returnKey(action.payload, "state"), message: returnKey(action.payload, "message"), }

        default:
            return { ...state }
    }

}

export default ToastReducer