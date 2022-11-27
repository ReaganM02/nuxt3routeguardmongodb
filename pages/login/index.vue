<script setup>

const email = ref( '' )
const password = ref( '' )

const loading = ref( false )

const handleLoginAccount = async () => {
    await useFetch( '/api/auth/login', {
        method: 'POST',
        body: {
            email: email.value,
            password: password.value
        },
        onResponse( { request, response } ) {
            console.log( response._data )
        }
    } )
}

const loginRef = ref( null )

onMounted( () => {
    loginRef.value.reset()
} )


</script>
<template>
    <div class="w-full h-screen grid grid-cols-1 place-items-center bg-slate-200">
        <div class="bg-white rounded p-5 max-w-md w-full shadow-2xl">
            <h1 class="text-center font-bold text-xl">Sign In</h1>
            <form
                ref="loginRef"
                @submit.prevent="handleLoginAccount"
            >
                <div class="form-body mt-4">
                    <div class="mt-2">
                        <ElementsInput
                            v-model.trim="email"
                            label="Name"
                            type="text"
                            placeholder="John Doe"
                            required
                        />
                    </div>
                    <div class="mt-2">
                        <ElementsInput
                            v-model.trim="password"
                            label="Password"
                            type="text"
                            placeholder="*******"
                            required
                        />
                    </div>
                </div>
                <div class="form-footer mt-5 mb-1">
                    <button
                        class="bg-teal-500 text-white px-5 py-3 text-sm uppercase font-bold rounded flex align-middle"
                        :class="{ 'opacity-50': loading }"
                    >
                        <span v-if="loading">
                            <ElementsSpinner />
                        </span>
                        <span>Sign In</span>
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
                    to="/register"
                >Sign up
                    <Icon
                        name="fa6-solid:arrow-right-long"
                        class="ml-1"
                    />
                </NuxtLink>
            </div>
        </div>
    </div>
</template>