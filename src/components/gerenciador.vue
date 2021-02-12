<template>
<div v-if="abriu" id="gerenciador" class="position-absolute luz_encima">
    <div id="barra_azul" class="azul_escuro_p d-flex sombra_azul">
        <div class="w-75 d-flex align-items-center">
            <img class="icone_padrao mx-1" src="@/assets/comp_lupa.png"/>
            <p class="texto_branco mt-3" >Exploring - My Potifólio</p>
        </div>
        <div class="w-25 d-flex align-items-center justify-content-end">
            <div class="btn_quadrado clicavel cinza_padrão luz_encima d-flex justify-content-center align-items-center" >_</div>
            <div @mousedown="click" @click="$emit('mudar')" v-bind:class="{cinza_padrão:!clicou, cinza_pclick:clicou}" class="clicavel btn_quadrado luz_encima mx-1 d-flex justify-content-center align-items-center" >X</div>
        </div>
    </div>
    <div id="file_cont_pro" class="d-flex align-items-center">
        <p class="mt-3 ml-1 texto_under" >F</p>
        <p class="mt-3 mr-1">iles</p>
        <p class="mt-3 ml-1 texto_under" >C</p>
        <p class="mt-3 mr-1" >ontato</p>
        <p class="mt-3 ml-1 texto_under">P</p>
        <p class="mt-3" >rojetos</p>
    </div>
    <div id="barra_azul" class="d-flex mt-1 ">
        <div class="all_folders luz_embaixo_fraca">
            <p class="mx-1" >All Folders</p>
        </div>
        <div  class=" content_of luz_embaixo_fraca">
            <p class="mx-1" >Content of 'xxxx'</p>
        </div>
    </div>
    <div class="d-flex h-75 margin_2">
        <div class="all_folders luz_embaixo_fraca branco_padrao">
            <div class="d-flex align-items-start ml-1">
                <div class="d-flex flex-column justify-content-center align-items-center mt-1">
                    <img src="@/assets/comp.png" class="icone_padrao"/>
                    <p class="texto_8 sem_margin_b" >|</p>
                    <div id="m_ou_m" @click="abrir_pastas" class="mt-1 clicavel d-flex justify-content-center align-items-center">
                        <h4 class="mt-1">{{quadradinho}}</h4>
                    </div>
                </div>
                <p class="ml-1" >My Potifólio</p>
            </div>
            <div v-bind:class="{com_altura:com_altura, sem_altura:!com_altura}" class="d-flex ml-1">
                <div class="d-flex flex-column ml-2">
                    <p class="texto_8 sem_margin_b" >|</p>
                    <p class="texto_8 sem_margin_b" >|</p>
                    <p class="texto_8 sem_margin_b" >|</p>
                    <p class="texto_8 sem_margin_b" >|</p>
                    <p class="texto_8 sem_margin_b" >|</p>
                </div>
                <div class="d-flex flex-column">
                    <pastas rota="info" nome="Info. Básicas" filename="livrinho.png"/>
                    <pastas rota="academico" nome="Acadêmico" filename="globinho.png"  />
                    <pastas nome="Programação" filename="engrenagem.png"/>
                </div>
            </div>
        </div> 
        <div class="content_of luz_embaixo_fraca branco_padrao">
            <router-view/>
        </div>
    </div>
</div>
</template>

<script>
import pastas from './pastas.vue'

export default{
    components:{
        pastas
    },
    props:{
        abriu:Boolean,
    },
    data(){
        return{
            clicou:false,
            quadradinho:'+',
            com_altura:false,
        }
    },
    methods:{
        click(){
            this.clicou=!this.clicou;
            setTimeout(()=>{
                this.clicou=!this.clicou;
            },300);
        },
        abrir_pastas(){
            if(this.com_altura){
                this.quadradinho='+';
            }
            else{this.quadradinho='-';}
            this.com_altura=!this.com_altura;
        },
    }
}

</script>

<style>

.all_folders{
    width:45%;
    margin-right:3px;
}

.content_of{
    width:55%;
}

#m_ou_m{
    width: 12px;
    height: 12px;
    border: 1px solid;
    border-color:gray;
}

.com_altura{
    transition: height 0.5s;
    overflow: hidden;
    height: 80px;
  }
  
.sem_altura{
    -webkit-transition: height 0.5s;
    overflow: hidden;
    height: 0px;
}  

</style>