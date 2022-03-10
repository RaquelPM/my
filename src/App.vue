<template>
  <div class="app d-flex justify-content-center align-items-center">
    <face/>
  </div>
</template>

<script>

import face from './views/interface'

export default{
  components:{
    face,
  }
}

</script>

<style>
.app {
  background-color:#008383;
  width:100vw;
  height:100vh;
}

</style>
