<template>
    <div v-if="abrir" class=" luz_encima" id="gerenciador">
    </div>
</template>

<script>
export default{
    props:{
        abrir:Boolean,
    }
}
</script>