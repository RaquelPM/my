<template>
    <div>
        <div @click="abrir_notes" class="d-flex clicavel">
            <img src="../assets/notas.png" class="icone_padrao"/>
            <div v-bind:class="{boxzinha:notes_info, barra:!notes_info}" class="d-flex align-items-center">
                <p class="pl-1 mt-3" >InformaçõesBásicas</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        computed:{
            notes_info(){
               return this.$store.state.notes_info
            }
        },
        methods:{
            abrir_notes(){
                this.$store.dispatch('att_notes_info', true);
            }
        }
    }
</script>

<style>
.barra{
    max-height:22px;
}
</style>
