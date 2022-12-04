<script setup>
import { useToast, POSITION } from 'vue-toastification'
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

const toast = useToast();


const name = ref( 'Reagan' )
const email = ref( 'reagan@gmail.com' )
const password = ref( '12345678' )
const confirmPassword = ref( '12345678' )

//Errors
const nameErr = ref( null )
const emailErr = ref( null )
const passwordErr = ref( null )
const confirmPasswordErr = ref( null )


const loading = ref( null )


const createAccount = async () => {
	loading.value = true
	await $fetch( '/api/auth/register', {
		method: 'POST',
		body: {
			name: email.value,
			email: email.value,
			password: password.value,
			confirmPassword: confirmPassword.value
		},
		onResponse( { request, response } ) {
			this.nameErr = 'Hello World'
			console.log( response )

			if ( response._data.status === 200 ) {

				console.log( response._data )
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
	loading.value = false
}

const registerRef = ref( null )
onMounted( () => {
	registerRef.value.reset()
} )


</script>
<template>
	<div class="w-full h-screen grid grid-cols-1 place-items-center bg-slate-200">
		<div class="bg-white rounded p-5 max-w-md w-full shadow-2xl">
			<h1 class="text-center font-bold text-xl">Create Account</h1>
			{{ emailErr }}
			<form
				ref="registerRef"
				@submit.prevent="createAccount"
			>
				<div class="form-body mt-4">
					<div class="mt-2">
						<ElementsInput
							v-model.trim="name"
							label="Name"
							type="text"
							placeholder="John Doe"
							required
						/>
						<div
							v-if="nameErr"
							class="text-rose-400 mt-1 text-xs"
						>
							{{ nameErr }}
						</div>
					</div>
					<div class="mt-4">
						<ElementsInput
							v-model.trim="email"
							label="Email"
							type="email"
							placeholder="johndoe@gmail.com"
							required
						/>
						<div
							v-if="emailErr"
							class="text-rose-400 mt-1 text-xs"
						>
							{{ emailErr.message }} {{ emailErr }}

						</div>
						{{ emailErr }}
					</div>
					<div class="mt-4">
						<ElementsInput
							v-model.trim="password"
							label="Password"
							type="password"
							placeholder="**********"
							required
						/>
						<div
							v-if="passwordErr"
							class="text-rose-400 mt-1 text-xs"
						>
							{{ passwordErr.message }}
						</div>
					</div>
					<div class="mt-4">
						<ElementsInput
							v-model.trim="confirmPassword"
							label="Confirm Password"
							type="password"
							placeholder="**********"
							required
						/>
						<div
							v-if="confirmPasswordErr"
							class="text-rose-400 mt-1 text-xs"
						>
							{{ confirmPasswordErr.properties.messsage }}
						</div>
					</div>
				</div>
				<div class="form-footer mt-5 mb-1">
					<button
						class="bg-teal-500 text-white px-5 py-3 text-sm uppercase font-bold rounded flex align-middle cursor-pointer"
						:class="{ 'opacity-50': loading }"
					>
						<span v-if="loading">
							<ElementsSpinner />
						</span>
						<span class="cursor-pointer">Create Account</span>
					</button>
				</div>
			</form>
			<div class="mt-5 flex justify-between text-sm">
				<NuxtLink
					class="text-slate-400"
					to="/"
				>
					<Icon
						name="fa6-solid:arrow-left-long"
						class="mr-1"
					/>Back Home
				</NuxtLink>
				<NuxtLink
					class="text-slate-400"
					to="/login"
				>Sign in
					<Icon
						name="fa6-solid:arrow-right-long"
						class="ml-1"
					/>
				</NuxtLink>
			</div>
		</div>
	</div>
</template>