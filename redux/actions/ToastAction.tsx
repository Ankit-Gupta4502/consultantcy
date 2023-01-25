import { initalizeStore } from "../store"

export const showToast = (message: string, state: string = "success") => {
    initalizeStore.dispatch({ type: "SHOW_TOAST", payload: { message, state } })
}