module.exports = {
  router:{
    linkActiveClass: 'active',
    extendRoutes(routes, resolve) {
      // 清空路由
      routes.splice(0)
      routes.push(...[
        {
          path:'/',
          component:resolve(__dirname, 'pages/layout/'),
          children:[
            {
              path: '',
              name: 'home',
              component: resolve(__dirname, 'pages/home/')
            },
            {
              path: '/login',
              name: 'login',
              component: resolve(__dirname, 'pages/login/')
            },
            {
              path: '/register',
              name: 'register',
              component: resolve(__dirname, 'pages/login/')
            },
            {
              path: '/profile/:username',
              name: 'profile',
              component: resolve(__dirname, 'pages/profile/')
            },
            {
              path: '/settings',
              name: 'settings',
              component: resolve(__dirname, 'pages/settings/')
            },
            {
              path: '/editor',
              name: 'editor',
              component: resolve(__dirname, 'pages/editor/')
            },
            {
              path: '/article/:slug',
              name: 'article',
              component: resolve(__dirname, 'pages/article/')
            },
          ]
        }
      ])
      // routes.push({
      //   name: 'custom',
      //   path: '*',
      //   component: resolve(__dirname, 'pages/404.vue')
      // })
    }
  },
  server:{
    host: '0.0.0.0',
    port: 3002
  },
  plugins: [
    '~/plugins/request',
    '~/plugins/dayjs'
  ]
}