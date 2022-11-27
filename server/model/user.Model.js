import mongoose from 'mongoose'
import validator from 'validator'
import bcrypt from 'bcrypt'

const schema = new mongoose.Schema( {
    name: {
        type: String,
        required: [ true, 'Name cannot be empty.' ],
    },
    email: {
        type: String,
        required: [ true, 'Email cannot be empty.' ],
        unique: true,
        lowercase: true,
        validate: [ validator.isEmail, 'Invalid email.' ],
        minLength: [ 4, 'Invalod email.' ],
        maxLength: [ 30, 'Invalid email.' ]
    },
    password: {
        type: String,
        required: [ true, 'Password cannot be empty.' ],
        minLength: [ 8, 'Password is too short.' ],
        select: true // Hide encrypted password on the client side
    },
    confirmPassword: {
        type: String,
        required: [ true, 'Confirm password cannot be empty.' ],
        validate: {
            validator: function ( el ) {
                return el === this.password
            },
            messsage: 'Confirm password does not match the password.'
        }
    }
} )

// The encrpytion happen between sending the data and saving it to the database
schema.pre( 'save', async function ( next ) {
    // If the password is not modified exit this function and continue
    if ( !this.isModified( 'password' ) ) return next()

    this.password = await bcrypt.hash( this.password, 16 )

    //Delete the confirm password
    this.confirmPassword = undefined

    next()

} )

export default mongoose.model( 'User', schema )