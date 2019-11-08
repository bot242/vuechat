import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user : {}
  },
  mutations: {
    auth_request(state){
        state.status = 'loading'
      },
      auth_success(state, token, user){
        state.status = 'success'
        state.token = token
        state.user = user
      },
      auth_error(state){
        state.status = 'error'
      },
      logout(state){
        state.status = ''
        state.token = ''
      },
  },
  actions: {
    login({commit}, user){
        console.log('user',user)
        return new Promise((resolve, reject) => {
          commit('auth_request')
          axios({url: 'http://192.168.100.144:8002/api/api-token-auth/', data: user, method: 'POST' })
          .then(resp => {
            const token = JSON.stringify(resp.data.token)
            const user = JSON.stringify(resp.data.id)
            // const name = JSON.stringify(resp.data.username)
            localStorage.setItem('token', token)
            localStorage.setItem('id', user)
            // localStorage.setItem('name', name)
            localStorage.setItem('all',resp.data.username)
            console.log("setted successs")
            axios.defaults.headers.common['Authorization'] = token
            commit('auth_success', token, user)
            resolve(resp)
          })
          .catch(err => {
            commit('auth_error')
            localStorage.removeItem('token')
            reject(err)
          })
        })
    },
    register({commit}, user){
        return new Promise((resolve, reject) => {
          commit('auth_request')
          axios({url: 'http://192.168.100.144:8002/api/user/', data: user, method: 'POST' })
          .then(resp => {
            const token = resp.data.token
            const user = JSON.stringify(resp.data.username)
            console.log('ssdsd',user)
         
            axios.defaults.headers.common['Authorization'] = token
            commit('auth_success', token, user)
            resolve(resp)
          })
          .catch(err => {
            commit('auth_error', err)
            localStorage.removeItem('token')
            reject(err)
          })
        })
      },
      logout({commit}){
        return new Promise((resolve, reject) => {
          commit('logout')
          localStorage.removeItem('token')
          localStorage.clear()
          delete axios.defaults.headers.common['Authorization']
          resolve()
          // console.log('ss')
        })
      }
  },
  getters : {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
  }
})