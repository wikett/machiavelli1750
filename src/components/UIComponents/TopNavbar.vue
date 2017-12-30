<template>
<section class="hero is-primary">
    <!-- Hero header: will stick at the top -->
    <div class="hero-head">
      <nav class="main-nav nav has-shadow">
  <div class="container">
    <div class="nav-left">
      <a class="nav-item" href="#">
         <a class="navbar-item" href="#">
      <img src="../../assets/logo-azul.png" alt="Machiavelli 1750" width="112">
    </a>
      </a>
      <a class="nav-item " href="#/">Inicio</a>
      
        <a class="nav-item" href="#/manual">
          Manual
        </a>

      <a class="nav-item " href="#">Contacto</a>
    </div>
    <span class="nav-toggle">
      <span></span>
      <span></span>
      <span></span>
    </span>
    <div class="nav-right nav-menu">
      <a href="#" class="nav-item">
      <img src="https://img.shields.io/github/stars/jenil/bulmaswatch.svg" alt="GitHub stars">
      </a>
      <a class="nav-item" href="#/login">
        <i class="fa fa-user"></i>&nbsp;Admin Panel
      </a>
      <a class="nav-item" href="##">
        <span class="icon"> <i class="fa fa-github"></i> </span>
      </a>
      <a class="nav-item" href="#">
        <span class="icon"> <i class="fa fa-twitter"></i> </span>
      </a>
    </div>
  </div>
</nav>

    </div>
  </section>
</template>
<script>
  export default {
    data () {
      return {
        isBurgerActive: false
      }
    },
     methods: {
      openBurger () {
        //return string.charAt(0).toUpperCase() + string.slice(1)
        this.isBurgerActive = !this.isBurgerActive;
        console.log("isBurgerActive: "+this.isBurgerActive)
      }
    }
  }
</script>
<style scoped>

</style>