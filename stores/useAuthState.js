export const useAuthState = defineStore( 'useAuthState',{
	state: () => {
		return {
			authenticated: false
		}
	},
} )



if ( import.meta.hot ) {
	import.meta.hot.accept( acceptHMRUpdate( useAuthState,import.meta.hot ) );
}