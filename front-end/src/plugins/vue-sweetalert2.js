import swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
export default {
    install: (Vue) => {
        const defaultToastOptions = {
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', swal.stopTimer)
                toast.addEventListener('mouseleave', swal.resumeTimer)
            }
        }
        const warningToast = swal.mixin({ ...{ icon: 'warning' }, ...defaultToastOptions })
        const errorToast = swal.mixin({ ...{ icon: 'error' }, ...defaultToastOptions })
        const successToast = swal.mixin({ ...{ icon: 'success' }, ...defaultToastOptions })
        const infoToast = swal.mixin({ ...{ icon: 'info' }, ...defaultToastOptions })
        const questionToast = swal.mixin({ ...{ icon: 'question' }, ...defaultToastOptions })

        const warningAlertOptions = {
            type: 'warning',
            showCancelButton: false,
            allowOutsideClick: false
        }
        const errorAlertOptions = {
            type: 'error',
            showCancelButton: false,
            allowOutsideClick: false
        }
        const successAlertOptions = {
            type: 'success',
            text: 'Successful',
            showCancelButton: false,
            allowOutsideClick: false
        }
        const infoAlertOptions = {
            type: 'info',
            showCancelButton: true,
            allowOutsideClick: false
        }
        const questionAlertOptions = {
            type: 'question',
            confirmButtonText: 'continue',
            showConfirmButton: true,
            showCancelButton: true,
            showDenyButton: true,
            allowOutsideClick: false
        }

        Vue.prototype.$warningToast = warningToast
        Vue.prototype.$errorToast = errorToast
        Vue.prototype.$successToast = successToast
        Vue.prototype.$infoToast = infoToast
        Vue.prototype.$questionToast = questionToast
        Vue.prototype.$warningAlert = swal.mixin(warningAlertOptions)
        Vue.prototype.$errorAlert = swal.mixin(errorAlertOptions)
        Vue.prototype.$successAlert = swal.mixin(successAlertOptions)
        Vue.prototype.$infoAlert = swal.mixin(infoAlertOptions)
        Vue.prototype.$questionAlert = swal.mixin(questionAlertOptions)
    }
}
