export default defineNuxtRouteMiddleware( async ( to,from ) => {
	const auth = useState( 'auth' )

	console.log( auth.value,'middleware' )
	if ( !auth.value ) return navigateTo( '/login' )
} )