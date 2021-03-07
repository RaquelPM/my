<template>
    <div class="d-flex justify-content-center align-items-center w-100 h-100">
        <div v-on:click="abrir_gerenciador" class="d-flex flex-column align-items-center clicavel">
            <img id="armarinho" src="@/assets/armarinho.svg"/>
            <h2 class="texto_branco" >Potifólio</h2>
        </div>
        <div id="fim" class="w-100 cinza_padrão fixed-bottom d-flex">
            <div @click="abrir_gerenciador" id="btn_start" v-on:mouseenter="clico=true" v-on:mouseleave="clico=false" v-bind:class="{luz_encima:!clico, luz_embaixo:clico}" class="mb-1 d-flex justify-content-center clicavel">
                <img src="@/assets/windows.png"/>
                <h4 class="mt-1" >Start</h4>
            </div>
            <div v-bind:class="{sumiu:!geren, apareceu:geren}" id="barrinha" class="mb-1 d-flex align-items-center luz_embaixo">
                <img src="@/assets/papel_lupa.png"/>
                <h4 class="mt-1" >Exploring - Potifólio</h4>
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
                    <p class="pouca_pouca">17 anos (12/15/2003)</p>
                    <p class="pouca_pouca">Cursando o 3° ano do ensino técnico em eletrônica integrado ao ensino médio</p>
                    <p class="pouca_pouca">Português e Inglês</p>
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
                    <p class="pouca_pouca">Aluna do POP</p>
                    <p class="pouca_pouca">Membro do GREL (Grupo de robótica educacional livre - IFPB)</p>
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
                    </notes>
            </div>
        </transition>
        <transition name="fade">
            <div class="mooooovel position-absolute">
                    <notes :abrir="note_pro_cursos" titulo="Cursos" action="att_notes_pro_cursos">
                        <p class="pouca_pouca mt-1">domínio em: HTML, CSS, C++ e Vue.js</p>
                        <div class="d-flex justify-content-center align-items-center flex-column">
                            <p class="pouca">-----------------------------</p>
                            <p class="pouca">Cursos e eventos</p>
                            <p class="pouca">-----------------------------</p>
                        </div>
                        <p class="pouca_pouca">Introdução ao Vue 3 - Sarah Drasner</p>
                        <p class="pouca_pouca">Recursos avançados do Vue.js - Evan You</p>
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
                        <p @click="ir('https://nocton.tech/')" class="link pouca_pouca">/portfolio_equipe_Nocton</p>
                        <p @click="ir('https://github.com/nocton/checaaqui')" class="link pouca_pouca">/checaaqui</p>
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

</style>
