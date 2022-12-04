import { useToast, POSITION } from 'vue-toastification'
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

const toast = useToast();

export const useAuth = defineStore( 'useAuth', {
    state: () => {
        return {

            name: 'Reagan',
            email: 'reagan@gmail.com',
            password: '123456789',
            confirmPassword: '123456789',
            nameErr: '',
            emailErr: '',
            passwordErr: '',
            confirmPasswordErr: '',
            loading: false

        }
    },
    actions: {
        async createAccount() {

            this.loading = true

            await $fetch( '/api/auth/register', {
                method: 'POST',
                body: {
                    name: this.email,
                    email: this.email,
                    password: this.password,
                    confirmPassword: this.confirmPassword
                },
                onResponse( { request, response } ) {
                    this.nameErr = 'Hello World'
                    console.log( response )

                    if ( response._data.status === 200 ) {

                        toast.success( response._data.message, {
                            timeout: 3000,
                            position: POSITION.BOTTOM_CENTER
                        } )
                    }
                    else {

                        console.log( response._data.message.code )
                        // Email already exist
                        if ( response._data.message.code === 11000 ) {
                            this.emailErr = 'Email already exist.'

                        }
                    }
                }
            } )
            this.loading = false
        }
    }
} )