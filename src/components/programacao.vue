<template>
    <div>
        <div @click="abrir_notes_pro_cursos" class="d-flex clicavel">
            <img src="../assets/notas.png" class="icone_padrao"/>
            <div v-bind:class="{boxzinha:notes_pro_cursos, barra:!notes_pro_cursos}" class="d-flex align-items-center">
                <p class="pl-1 mt-3" >Cursos</p>
            </div>
        </div>
        <div @click="abrir_notes_pro_projetos" class="d-flex clicavel">
            <img src="../assets/notas.png" class="icone_padrao"/>
            <div v-bind:class="{boxzinha:notes_pro_projetos, barra:!notes_pro_projetos}" class="d-flex align-items-center">
                <p class="pl-1 mt-3" >Projetos finalizados</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        computed:{
            notes_pro_cursos(){
               return this.$store.state.notes_pro_cursos
            },
            notes_pro_projetos(){
                return this.$store.state.notes_pro_projetos
            }
        },
        methods:{
            abrir_notes_pro_cursos(){
                this.$store.dispatch('att_notes_pro_cursos', true);
            },
            abrir_notes_pro_projetos(){
                this.$store.dispatch('att_notes_pro_projetos', true);
            },
        }
    }
</script>

<style>
.barra{
    max-height:22px;
}
</style>
