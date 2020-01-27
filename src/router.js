import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Homevue-router'

Vue.use(Router)

export default new Router(){
	mode: 'history',
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/todos',
			component: () => import(./views/Todos.vue)
		}
	]
}