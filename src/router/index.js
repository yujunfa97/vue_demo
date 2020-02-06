import Vue from 'vue'
import Router from 'vue-router'
import ModuleADemo from "../components/ModuleADemo";
import VForDemo from "../components/VForDemo";
import HelloWorld from "../components/HelloWorld";
import FatherDemo from "../components/FatherDemo";

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
    },
    {
      path: '/fordemo',
      name: 'VForDemo',
      component: VForDemo
    },
    {
      path: '/helloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/fs',
      name: 'FatherDemo',
      component: FatherDemo
    }
  ]
})
