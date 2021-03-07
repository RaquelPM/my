import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    notes_info:false,
    notes_aca_pro:false,
    notes_aca_comp:false,
    notes_pro_cursos:false,
    notes_pro_projetos:false,
  },
  mutations: {
    mudar_notes_info:(state, data)=>{
      state.notes_info = data;
    },
    mudar_notes_aca_pro:(state, data)=>{
      state.notes_aca_pro = data;
    },
    mudar_notes_aca_comp:(state, data)=>{
      state.notes_aca_comp = data;
    },
    mudar_notes_pro_cursos:(state, data)=>{
      state.notes_pro_cursos = data;
    },
    mudar_notes_pro_projetos:(state, data)=>{
      state.notes_pro_projetos = data;
    }
  },
  actions: {
    att_notes_info:(context, data)=>{
      context.commit('mudar_notes_info', data);
    },
    att_notes_aca_pro:(context, data)=>{
      context.commit('mudar_notes_aca_pro', data);
    },
    att_notes_aca_comp:(context, data)=>{
      context.commit('mudar_notes_aca_comp', data);
    },
    att_notes_pro_cursos:(context, data)=>{
      context.commit('mudar_notes_pro_cursos', data);
    },
    att_notes_pro_projetos:(context, data)=>{
      context.commit('mudar_notes_pro_projetos', data);
    },

  },
  modules: {
  }
})
