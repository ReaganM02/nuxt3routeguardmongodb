import mongoose from 'mongoose';

const config = useRuntimeConfig();

export default async () => {
    try {
        const options = {
            autoIndex: true,
        }

        await mongoose.connect( config.MONGO_URL, options )
        console.log( 'Succesfully connected to DB.' )
    } catch ( error ) {
        console.log( error )
    }
}