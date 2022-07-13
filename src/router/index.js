import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  },
  {
    path: '/sys',
    name: 'sys',
    component: () => import('@/layout'),
    meta: {
      title: '系统管理',
      icon: 's-grid'
    },
    children: [
      {
        path: '/sys/users',
        name: 'users',
        component: () => import('../views/users'),
        meta: {
          title: '用户管理',
          icon: 'user'
        }
      },
      {
        path: '/sys/roles',
        name: 'roles',
        component: () => import('../views/roles'),
        meta: {
          title: '角色管理',
          icon: 'user-solid'
        }
      },
      {
        path: '/sys/menus',
        name: 'menus',
        component: () => import('../views/menus'),
        meta: {
          title: '菜单管理',
          icon: 'menu'
        }
      }
    ]
  },
  {
    path: '/',
    name: 'layout',
    component: () => import('@/layout'),
    redirect: '/',
    children: [
      {
        path: '/',
        name: 'index',
        component: () => import('../views/index'),
        meta: {
          title: '控制台',
          icon: 'personnel'
        }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
