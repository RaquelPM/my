<template>
    <div @click="redirecionar" id="pastas" class="d-flex clicavel">
        <p class="ml-1">-</p>
        <p class="mx-1">-</p>
        <div v-bind:class="{sem_acesso:!acesso, com_acesso:acesso}" class="d-flex">
            <img :src="require(`@/assets/${filename}`)" class="icone_padrao"/>
            <p>{{nome}}</p>
        </div>
    </div>
</template>

<script>

import router from '@/router'

    export default{
        data(){
            return{
                acesso:false,
                roter:'',
            }
        },
        props:{
            nome:String,
            filename:String,
            rota:String,

        },
        watch:{
            roter:function(){
                if(this.roter == this.rota){
                    this.acesso=!this.acesso;
                }
            }
        },
        methods:{
            redirecionar(){
                router.push(this.rota);
                this.roter = this.$router.name;
                console.log(this.$router);
            }
        }
    }
</script>

<style>
.sem_acesso{
    background-color:none;
    color:black;
}

.com_acesso{
    background-color:#1616BA;
    color:white;
}
</style>
