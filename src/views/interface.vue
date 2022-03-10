<template>
    <div class="d-flex justify-content-center align-items-center w-100 h-100">
        <div class="d-flex flex-column align-items-start w-100 h-100 justify-content-start">
            <div v-on:click="abrir_gerenciador" class="d-flex flex-column align-items-center clicavel mt-1">
                <img id="armarinho" src="@/assets/armarinho.svg"/>
                <p class="texto_branco" >Portfólio</p>
            </div>
        </div>
        <div id="fim" class="w-100 cinza_padrão fixed-bottom d-flex">
            <div class="w-75 d-flex">
                <div @click="abrir_gerenciador" id="btn_start" v-on:mouseenter="clico=true" v-on:mouseleave="clico=false" v-bind:class="{luz_encima:!clico, luz_embaixo:clico}" class="mb-1 d-flex justify-content-center align-items-center clicavel">
                    <img id="win" src="@/assets/windows.png"/>
                    <p id="start" class="mt-3 pouca" >Start</p>
                </div>
                <div v-bind:class="{sumiu:!geren, apareceu:geren}" id="barrinha" class="mb-1 d-flex align-items-center luz_embaixo">
                    <img id="win" src="@/assets/papel_lupa.png"/>
                    <p id="start" class="mt-3" >Exploring - Portfólio</p>
                </div>
            </div>
            <div class="w-25 justify-content-end d-flex mr-1">
                <div id="relogio" class="d-flex justify-content-center align-items-center luz_embaixo_fraca">
                    <img id="relogin" src="@/assets/relogin.png" class="mr-2 ml-1"/>
                    <p class="mt-3 mr-1" >2:22 PM</p>
                </div>
            </div>
        </div>
        <div class="movel position-absolute">
            <transition name="fade">
                <gerenciador :abriu="geren" @mudar="abrir_gerenciador"/>
            </transition>
        </div>
        <transition name="fade">
            <div class="position-absolute moovel">
                <notes :abrir="note" titulo="info" action="att_notes_info">
                    <div class="d-flex justify-content-center align-items-center flex-column">
                        <p class="pouca mt-1">-----------------------------</p>
                        <p class="pouca">INFORMAÇÕES BÁSICAS</p>
                        <p class="pouca">-----------------------------</p>
                    </div>
                    <p class="pouca_pouca">Raquel Patrício Moraes</p>
                    <p class="pouca_pouca">18 anos (12/15/2003)</p>
                    <p class="pouca_pouca">Técnica em eletrônica pelo Instituto federal de ciência, educação e tecnologia da paraíba</p>
                    <p class="pouca_pouca">Português, Inglês e Libras</p>
                    <p class="pouca_pouca">domínio em: HTML, CSS, JS, C++, Vue.js, Nuxt.js, React.js, Bootstrap e Tailwind</p>
                        <p class="pouca_pouca">experiência com: Git, Storybook e Socket.io</p>
                </notes>
            </div>
        </transition>
        <transition name="fade">
            <div class="mooovel position-absolute">
                <notes :abrir="note_aca_pro" titulo="Projetos" action="att_notes_aca_pro">
                    <div class="d-flex justify-content-center align-items-center flex-column">
                        <p class="pouca mt-1">-----------------------------</p>
                        <p class="pouca">Projetos e extensões</p>
                        <p class="pouca">-----------------------------</p>
                    </div>
                    <p class="pouca_pouca">Criação do museu de minerologia do câmpus João Pessoa</p>
                    <p class="pouca_pouca">Aluna do Projeto Olímpico de Programação</p>
                    <p class="pouca_pouca">Membro do GREL (Grupo de robótica educacional livre - IFPB)</p>
                    <p class="pouca_pouca">Mentorada da iniciativa Wanderlust</p>
                </notes>
            </div>
        </transition>
        <transition name="fade">
            <div class="moooovel position-absolute">
                    <notes :abrir="note_aca_comp" titulo="Competições" action="att_notes_aca_comp">
                        <div class="d-flex justify-content-center align-items-center flex-column">
                            <p class="pouca mt-1">-----------------------------</p>
                            <p class="pouca">Competições</p>
                            <p class="pouca">-----------------------------</p>
                        </div>
                        <p class="pouca_pouca">Medalha de bronze OBR prática - 2019</p>
                        <p class="pouca_pouca">Medalha de prata OPBQ - 2019</p>
                        <p class="pouca_pouca">Medalha de ouro OBR teórica - 2020</p>
                        <p class="pouca_pouca">Medalha de prata OBA  - 2020</p>
                        <p class="pouca_pouca">Medalha de ouro ONC - 2020</p>
                        <p class="pouca_pouca">Medalha de ouro OBR prática - 2021</p>
                        <p class="pouca_pouca">Medalha de prata OBA - 2021</p>
                        <p class="pouca_pouca">Medalha de cristal ONHB - 2021</p>
                    </notes>
            </div>
        </transition>
        <transition name="fade">
            <div class="mooooovel position-absolute">
                    <notes :abrir="note_pro_cursos" titulo="Cursos" action="att_notes_pro_cursos">
                        <div class="d-flex justify-content-center align-items-center flex-column mt-1">
                            <p class="pouca">-----------------------------</p>
                            <p class="pouca">Cursos e eventos</p>
                            <p class="pouca">-----------------------------</p>
                        </div>
                        <p class="pouca_pouca">Introdução ao Vue 3 - Sarah Drasner</p>
                        <p class="pouca_pouca">Vuex para developers intermediários - Divya Tagtachian</p>
                        <p class="pouca_pouca">Recursos avançados do Vue.js - Evan You</p>
                        <p class="pouca_pouca">Vue 3 com typescript - Vue Mastery</p>
                        <p class="pouca_pouca">Introdução completa ao React, v5 - Brian Holt</p>
                        <p class="pouca_pouca">Next Level Week 1 e 2</p>
                        <p class="pouca_pouca">Arduino Day 2019</p>
                    </notes>
            </div>
        </transition>
        <transition name="fade">
            <div class="moooooovel position-absolute">
                    <notes :abrir="note_pro_projetos" titulo="Projetos" action="att_notes_pro_projetos">
                        <div class="d-flex justify-content-center align-items-center flex-column">
                            <p class="pouca mt-1">-----------------------------</p>
                            <p class="pouca">Projetos</p>
                            <p class="pouca">-----------------------------</p>
                        </div>
                        <p @click="ir('https://painel.nexboard.com.br/plans')" class="link pouca_pouca">/painel_nexboard_studio</p>
                        <p @click="ir('https://github.com/nocton/checaaqui')" class="link pouca_pouca">/checaaqui</p>
                        <p @click="ir('https://app2.weptek.xyz/')" class="link pouca_pouca">/weptek</p>
                    </notes>
            </div>
        </transition>
    </div>
</template>

<script>
    import gerenciador from '@/components/gerenciador'
    import notes from '@/components/notes'
    import mover  from '@/functions/mover.js'

    export default{
        components:{
            gerenciador,
            notes,
        },
        data(){
            return{
                geren:false,
                clico:true,
            }
        },
        computed:{
            note(){
                return this.$store.state.notes_info
            },
            note_aca_pro(){
                return this.$store.state.notes_aca_pro
            },
            note_aca_comp(){
                return this.$store.state.notes_aca_comp
            },
            note_pro_cursos(){
                return this.$store.state.notes_pro_cursos
            },
            note_pro_projetos(){
                return this.$store.state.notes_pro_projetos
            }
        },
        methods:{
            abrir_gerenciador(){
                this.geren=!this.geren;
            },
            pa(){
                console.log(this.note)
            },
            ir(url){
                window.open(url, '_blank');
            },
        },
        mounted(){
            mover('.movel', 'rect');
            mover('.moovel', 'reect');
            mover('.mooovel', 'reect');
            mover('.moooovel', 'reeect');
            mover('.mooooovel', 'reeeect');
            mover('.moooooovel', 'reeeeect');
        }
    }
</script>

<style>


#fim{
  border-width: 2px;
  border-bottom-width: 0px !important;
  border-left-width: 0px !important;
  border-style: solid;
  border-top-color:#FFFFFF;
  border-right-width: 0px !important;
}

.fade-enter-active{
  transition: opacity 0.5s ease-out;
}

.fade-leave-active {
    transition: opacity 0.5s ease-in;    
}
.fade-enter, .fade-leave {
  opacity: 0;
}

#win{
    width:35px;
    height:25px;
}

#start{
    font-size:20px;
}

#relogin{
    width:20px;
    height:20px
}

#relogio{
    margin-top: 3px;
    width: 85px;
    max-height: 30px;
    margin-left:5px;
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.25);
}

</style>
