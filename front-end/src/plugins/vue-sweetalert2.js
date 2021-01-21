import Swal from 'sweetalert2/dist/sweetalert2.js'
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
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        }
        const warningToast = Swal.mixin({ ...{ icon: 'warning' }, ...defaultToastOptions })
        const errorToast = Swal.mixin({ ...{ icon: 'error' }, ...defaultToastOptions })
        const successToast = Swal.mixin({ ...{ icon: 'success' }, ...defaultToastOptions })
        const infoToast = Swal.mixin({ ...{ icon: 'info' }, ...defaultToastOptions })
        const questionToast = Swal.mixin({ ...{ icon: 'question' }, ...defaultToastOptions })

        const warningAlertOptions = {
            icon: 'warning',
            showCancelButton: false,
            allowOutsideClick: false
        }
        const errorAlertOptions = {
            icon: 'error',
            showCancelButton: false,
            allowOutsideClick: false
        }
        const successAlertOptions = {
            icon: 'success',
            text: 'Successful',
            showCancelButton: false,
            allowOutsideClick: false
        }
        const infoAlertOptions = {
            icon: 'info',
            showCancelButton: false,
            allowOutsideClick: false
        }
        const questionAlertOptions = {
            icon: 'question',
            confirmButtonText: 'continue',
            showConfirmButton: true,
            showCancelButton: true,
            showDenyButton: true,
            allowOutsideClick: false
        }

        Vue.prototype.$Swal = Swal
        Vue.prototype.$warningToast = warningToast
        Vue.prototype.$errorToast = errorToast
        Vue.prototype.$successToast = successToast
        Vue.prototype.$infoToast = infoToast
        Vue.prototype.$questionToast = questionToast
        Vue.prototype.$warningAlert = Swal.mixin(warningAlertOptions)
        Vue.prototype.$errorAlert = Swal.mixin(errorAlertOptions)
        Vue.prototype.$successAlert = Swal.mixin(successAlertOptions)
        Vue.prototype.$infoAlert = Swal.mixin(infoAlertOptions)
        Vue.prototype.$questionAlert = Swal.mixin(questionAlertOptions)
    }
}
