import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:beforeMount', () => {
    const router = useRouter();
    const { start, finish } = useLoadingIndicator();

    router.beforeEach((to, from, next) => {
      console.log('0 start');
      start();
      setTimeout(() => {
        next();
      }, 500);
    });

    router.afterEach(() => {
      console.log('0 end');
      finish();
    });
  });
});

function checkAuthentication() {
  // Your authentication logic here
  return true; // or false based on your logic
}
