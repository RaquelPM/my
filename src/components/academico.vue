<template>
    <div>
        <div @click="abrir_notes_aca_pro" class="d-flex clicavel">
            <img src="../assets/notas.png" class="icone_padrao"/>
            <div v-bind:class="{boxzinha:notes_aca_pro, barra:!notes_aca_pro}" class="d-flex align-items-center">
                <p class="pl-1 mt-3" >Projetos e extensões</p>
            </div>
        </div>
        <div @click="abrir_notes_aca_comp" class="d-flex clicavel">
            <img src="../assets/notas.png" class="icone_padrao"/>
            <div v-bind:class="{boxzinha:notes_aca_comp, barra:!notes_aca_comp}" class="d-flex align-items-center">
                <p class="pl-1 mt-3" >Competições</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        computed:{
            notes_aca_pro(){
               return this.$store.state.notes_aca_pro
            },
            notes_aca_comp(){
                return this.$store.state.notes_aca_comp
            }
        },
        methods:{
            abrir_notes_aca_pro(){
                this.$store.dispatch('att_notes_aca_pro', true);
            },
            abrir_notes_aca_comp(){
                this.$store.dispatch('att_notes_aca_comp', true);
            },
        }
    }
</script>

<style>
.barra{
    max-height:22px;
}
</style>
