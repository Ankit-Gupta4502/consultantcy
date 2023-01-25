import { showToast } from "../../redux/actions/ToastAction";

export const toast = {
    success: (meesage: string) => showToast(meesage),
    error: (meesage: string) => showToast(meesage, "error"),

}