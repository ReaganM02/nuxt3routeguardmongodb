
import userModel from '~~/server/model/user.model'
import jwt from 'jsonwebtoken'

export default defineEventHandler( async ( event ) => {
	const config = useRuntimeConfig()
	try {

		const { authorization } = parseCookies( event )

		if ( !authorization ) {
			return {
				statusCode: 401,
				statusMessage: 'unauthorized'
			}
		}

		const verify = await jwt.verify( authorization,config.JWT_SECRET )

		console.log( verify )

		return verify
	} catch ( error ) {
		console.log( error )
		return error
	}

} )