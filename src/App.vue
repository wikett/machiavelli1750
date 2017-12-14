<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Old Standard TT', serif;
  font-size: 1.2rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
html,body {
   background-image: url("./assets/papel.jpg");
   background-color: #cccccc;
   height:100%;
   color:white;
}
</style>
