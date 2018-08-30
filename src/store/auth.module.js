// import axios from 'axios';
import { SET_AUTH, SET_ERROR, PURGE_AUTH } from './mutations.type';
import { LOGIN, LOGOUT } from './actions.type';
import tokenService from '../common/token.services';

const state = {
  user: {},
  isAuthenticated: null,
  roles: [],
  rememberMe: false,
  errors: null,
  token: null
};

const getter = {
  currentUser (state) {
    return state.user;
  },
  isAuthenticated (state) {
    return state.isAuthenticated;
  },
  currentRoles (state) {
    return state.roles;
  },
  userToken (state) {
    return state.token;
  },
  userRoles (state) {
    return state.roles;
  }
};

const actions = {
  [LOGIN] ({ commit }) {
    /* do logic for auth -> fake mode */
    let profile = {
      name: 'Indra Kusuma',
      email: 'id.indrakusuma@gmail.com',
      address: 'semarang',
      token: 'dsjfhsdkfhsdkfhsdhf'
    };
    commit(SET_AUTH, profile);
  },
  [LOGOUT] ({ commit }) {
    commit(PURGE_AUTH);
  }
};

const mutations = {
  [SET_ERROR] (state, error) {
    state.errors = error;
  },
  [SET_AUTH] (state, user) {
    state.isAuthenticated = true;
    state.user = user;
    state.errors = null;
    state.token = user.token;
    // state.roles = user.role;
    tokenService.saveToken(user.token);
  },
  [PURGE_AUTH] (state) {
    state.isAuthenticated = false;
    state.user = {};
    state.errors = null;
    state.token = null;
    // state.roles = [];
    tokenService.destroyToken();
  }
};

export default {
  state,
  getter,
  actions,
  mutations
};