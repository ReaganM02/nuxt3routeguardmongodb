import userModel from '~~/server/model/user.model'
import jwt from 'jsonwebtoken'

export default defineEventHandler( async ( event ) => {
    const body = await readBody( event )
    const config = useRuntimeConfig()

    const { email, password } = body

    if ( !email || !password ) {
        sendError( event, createError( {
            statusCode: 401,
            statusMessage: 'Invalid email or password.',
            fatal: false
        } ) )
    }

    const user = await userModel.find( { email } ).select( '-password' ) // Prevent password from displaying on the client.

    if ( !email || !password ) {
        return sendError( event, createError( {
            statusCode: 401,
            statusMessage: 'Invalid email or password.',
            fatal: false
        } ) )
    }

    const token = jwt.sign( { id: user._id }, config.JWT_SECRET, { expiresIn: '1d' } )


    setCookie( event, 'authorization', token, {
        maxAge: 60 * 60 * 8,
        httpOnly: true,
        path: '/',
        secure: true,
        sameSite: true,
    } )

    return token
} )