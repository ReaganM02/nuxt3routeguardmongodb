
export default defineNuxtPlugin( async ( app ) => {
	const authenticated = useState( 'auth',() => false )
	try {
		const { data } = await useFetch( '/api/auth/me' )

		if ( data.value.statusCode === 401 ) {
			authenticated.value = false
		}
		else {
			authenticated.value = true
		}
	} catch ( error ) {
		console.log( error )
	}

} )
