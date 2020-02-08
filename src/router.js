
import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard.vue'
import Projects from './views/Projects.vue'
import Textprops from './views/Textprops.vue'
import Team from './views/Team.vue'
import SignIn from './views/SignIn.vue'
import EmployeeSignUp from './views/EmployeeSignUp.vue'

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
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignIn
    },
    {
    path: '/employeesignup',
    name: 'employeesignup',
    component: EmployeeSignUp
    }
  ]
})