<template>
    <div v-if="abrir" class="cinza_padrão luz_encima min">
        <div id="barra_azul" class="d-flex cinza_pclicks clicavel">
            <div class="w-75 d-flex align-items-center">
                <img class="icone_padrao mx-1" src="@/assets/notas.png"/>
                <p class="texto_cinza mt-3" >{{titulo}} - Notepad</p>
            </div>
            <div class="w-25 d-flex align-items-center justify-content-end">
                <div class="btn_quadrado clicavel cinza_padrão luz_encima d-flex justify-content-center align-items-center" >_</div>
                <div @click="fechar" v-bind:class="{cinza_padrão:!clicou, cinza_pclick:clicou}" class="clicavel btn_quadrado luz_encima mx-1 d-flex justify-content-center align-items-center" >X</div>
            </div>
        </div>
        <div id="file_cont_pro" class="d-flex align-items-center">
            <p class="mt-3 ml-1 texto_under" >F</p>
            <p class="mt-3 mr-1">iles</p>
            <p class="mt-3 ml-1 texto_under clicavel" @click="copy" >C</p>
            <p class="mt-3 mr-1 clicavel" @click="copy" >ontato</p>
        </div>
        <div class="d-flex h-75 margin_2">
          <div class="w-100 luz_embaixo_fraca branco_padrao">
            <slot></slot>
            <textarea id="f" ref="copiar">raquelpmoraes2@gmail.com</textarea>
          </div>
        </div>
    </div>
</template>

<script>
export default{
    props:{
        abrir:Boolean,
        titulo:String,
        action:String,
    },
    methods:{
        fechar(){
            this.$store.dispatch(this.action, false)
        },
        copy(){
            var copyTextarea = this.$refs.copiar;

            window.open('https://nocton.tech/#contato', '_blank');
        
            copyTextarea.select();

            try {
            var successful = document.execCommand('copy');
            successful ? 'sim!' : 'não!';
            alert('Meu email foi copiado para sua área de transferência, aguardo ansiosamente pelo seu contato :)');
            } catch (err) {
            alert('Opa, Não consegui copiar o texto, é possível que o seu navegador não tenha suporte');
            }
        }
    }
}
</script>

<style>
.pouca{
    line-height:0px;
}
.pouca_pouca{
    line-height:15px;
}
.min{
    min-width:230px;
    max-width:75%;
}
</style>