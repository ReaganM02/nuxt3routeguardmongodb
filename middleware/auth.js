export default defineNuxtRouteMiddleware( async ( to,from ) => {
	const auth = await useState( 'auth' )

	console.log( auth.value )
	if ( !auth.value ) return navigateTo( '/login' )
} )