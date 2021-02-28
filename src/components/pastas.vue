<template>
    <div @click="redirecionar" id="pastas" class="d-flex clicavel">
        <p class="ml-1">-</p>
        <p class="mx-1">-</p>
        <div class="d-flex">
            <img :src="require(`@/assets/${filename}`)" class="icone_padrao"/>
            <p>{{nome}}</p>
        </div>
    </div>
</template>

<script>

import router from '@/router'

    export default{
        props:{
            nome:String,
            filename:String,
            rota:String,

        },
        watch:{
            atual:function(){
            }
        },
        methods:{
            redirecionar(){
                router.push(this.rota);
            }
        }
    }
</script>
