import { createStore } from 'vuex';
import Articlestore from './modules/articleFeature';
import createPersistedState from 'vuex-persistedstate';

export default createStore({
  modules: {
    Articlestore
  },
  plugins: [createPersistedState()],
});

router.beforeEach(async (to, from, next) => {
    if (to.matched.some(record => record.meta.isAuth)) {
    let token = localStorage.getItem('token');
    if (!token) {
    next("/login");
    } else {
    console.log(token);
    next(); // Mettre next() ici après avoir vérifié l'authentification
    }
    } else {
    next(); // Mettre next() ici si la route n'a pas besoind'authentification
    }
    });
