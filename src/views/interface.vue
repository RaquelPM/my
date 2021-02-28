<template>
    <div class="d-flex justify-content-center align-items-center w-100 h-100">
        <div v-on:click="abrir_gerenciador" class="d-flex flex-column align-items-center clicavel">
            <img id="armarinho" src="@/assets/armarinho.svg"/>
            <h2 class="texto_branco" >Potifólio</h2>
        </div>
        <div id="fim" class="w-100 cinza_padrão fixed-bottom d-flex">
            <div id="btn_start" class="mb-1 d-flex justify-content-center luz_encima">
                <img src="@/assets/windows.png"/>
                <h4 class="mt-1" >Start</h4>
            </div>
            <div v-bind:class="{sumiu:!geren, apareceu:geren}" id="barrinha" class="mb-1 d-flex align-items-center luz_embaixo">
                <img src="@/assets/papel_lupa.png"/>
                <h4 class="mt-1" >Exploring - Potifólio</h4>
            </div>
        </div>
        <transition name="fade">
            <gerenciador :abriu="geren" @mudar="abrir_gerenciador" />
            <notes :abrir="note"/>
        </transition>
    </div>
</template>

<script>

    import gerenciador from '@/components/gerenciador'

    export default{
        components:{
            gerenciador,
        },
        data(){
            return{
                geren:false,
                note:false,
            }
        },
        methods:{
            abrir_gerenciador(){
                this.geren=!this.geren;
            }
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
