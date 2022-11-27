import userModel from '~~/server/model/user.model'
import jwt from 'jsonwebtoken'

export default defineEventHandler( async ( event ) => {
    const body = await readBody( event )

    console.log( body )

    const config = useRuntimeConfig()

    try {

        const user = await userModel.create( {
            name: body.name,
            email: body.email,
            password: body.password,
            confirmPassword: body.confirmPassword
        } )

        console.log( user.id )

        const token = await jwt.sign( { id: user.id }, config.JWT_SECRET, { expiresIn: '1d' } )


        setCookie( event, 'authorization', token, {
            maxAge: 60 * 60 * 8,
            httpOnly: true,
            path: '/',
            secure: true,
            sameSite: true,
        } )

        return {
            status: 200,
            message: 'Account successfully created.',
            token: token
        }

    } catch ( error ) {
        return {
            status: 400,
            message: error
        }
    }
} )