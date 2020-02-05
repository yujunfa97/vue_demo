import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ModuleADemo from "../components/ModuleADemo";

Vue.use(Router);

// Router.beforeEach(((to, from, next) => {
//   if (to.path === '/') {
//     addDynamicMenuAndRoutes(to, from);
//     console.log(Router.options.routes);
//     next();
//   } else {
//
//   }
// }));
export default new Router({
  routes: [
    {
      path: '/',
      name: 'ModuleADemo',
      component: ModuleADemo
    }
  ]
})
