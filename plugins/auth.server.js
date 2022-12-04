import jwt from 'jsonwebtoken'
export default defineNuxtPlugin( async ( app ) => {
	const authenticated = useState( 'auth',() => false )
	const config = useRuntimeConfig()

	const cookie = useCookie( 'authorization' )

	try {
		if ( cookie ) {
			const decoded = jwt.verify( cookie.value,config.JWT_SECRET )

			if ( decoded ) {
				authenticated.value = true
			}
			else {
				authenticated.value = false
			}
		}
		else {
			authenticated.value = false
		}
	} catch ( error ) {
		authenticated.value = false
	}

	//if ( cookie ) {
	//	await jwt.verify( cookie.value,config.JWT_SECRET )
	//	authenticated.value = true
	//}
	//else {
	//	authenticated.value = false
	//}


	//try {
	//	const cookie = useCookie( 'authorization' )

	//	if ( cookie ) {
	//		await jwt.verify( cookie.value,config.JWT_SECRET )
	//		authenticated.value = true
	//	}
	//} catch ( error ) {
	//	authenticated.value = false
	//	console.log( error )
	//}

} )
