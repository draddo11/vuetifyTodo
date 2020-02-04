
import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './components/Dashboard.vue'
import Projects from './components/Projects.vue'
import Textprops from './views/Textprops.vue'
import Team from './components/Team.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/projects',
      name: 'projects', 
      component: Projects
    },
    {
      path: '/team',
      name: 'team',
      component: Team
    },
    {
        path: '/text',
        name: 'textprops',
        component: Textprops
    }
  ]
})