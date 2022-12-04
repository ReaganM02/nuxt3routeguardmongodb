export default function () {

	const authenticated = useState( 'auth',() => false )

	const me = async () => {

		try {
			const data = await $fetch( '/api/auth/me' )

			console.log( data )

			if ( data.statusCode === 401 ) {
				authenticated.value = false
			}
			else {
				authenticated.value = true
			}
		} catch ( error ) {
			console.log( error )
		}
	}

	return { me,authenticated }
}