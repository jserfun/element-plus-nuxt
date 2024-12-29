import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:beforeMount', () => {
    const router = useRouter();

    console.log('client: %s', import.meta.client);
    console.log('server: %s', import.meta.server);
    console.log('router: %o', router);

    router.beforeEach((to, from, next) => {
      // Your logic here
      console.log('Navigating from', from.path, 'to', to.path);
      next();

      // Example: Check if the user is authenticated
      // const isAuthenticated = checkAuthentication();
      // if (!isAuthenticated && to.meta.requiresAuth) {
      //   next('/login'); // Redirect to login if not authenticated
      // } else {
      //   next(); // Proceed to the route
      // }
    });
  });
});

function checkAuthentication() {
  // Your authentication logic here
  return true; // or false based on your logic
}
