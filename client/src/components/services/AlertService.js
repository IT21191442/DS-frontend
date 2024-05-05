import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DEFAULT_TOAST_OPTIONS = {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
};

const showToast = (message, options = {}) => {
    const toastOptions = { ...DEFAULT_TOAST_OPTIONS, ...options };
    toast(message, toastOptions);
};

const showSuccessToast = (message, options = {}) => {
    showToast(message, { ...options, type: "success" });
};

const showErrorToast = (message, options = {}) => {
    showToast(message, { ...options, type: "error" });
};

// Add other custom toast methods here (e.g., showUnsuccessToast, etc.)

export { showToast, showSuccessToast, showErrorToast, ToastContainer };