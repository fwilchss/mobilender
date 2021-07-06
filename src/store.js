import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        usuarioS: '',
        siglasS: '',
        usuario: '',
        siglas: ''
    },
    mutations: {
        setUsuario(state) {
            state.usuarioS = state.usuario
        }
    },
    action:{
        addUsuario(context){
            context.commit('setUsuario');
        }
    },
    getters:{
        getUsuario (state){
            return state;
        }
    }
})