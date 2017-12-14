<template>
<nav class="navbar is-transparent" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://machiavelli1750.com">
      <img src="../../assets/machiavelli-logo.png" alt="Machiavelli 1750" width="112">
    </a>
    <div class="navbar-burger burger" :class="{'is-active': isBurgerActive}" data-target="navbarExampleTransparentExample" @click="openBurger">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navbarExampleTransparentExample" class="navbar-menu" :class="{'is-active': isBurgerActive}">
    <div class="navbar-start">
      <a class="navbar-item" href="#">
        Inicio
      </a>
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link" href="#">
          Manual
        </a>
        <div class="navbar-dropdown is-boxed is-hidden-touch">
          <a class="navbar-item" href="#">
            Esquema General del Juego
          </a>
          <a class="navbar-item" href="#">
            El Mapa y sus Elementos
          </a>
          <a class="navbar-item" href="#">
            Economía y Población
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item" href="#">
            Fase de Ajustes Militares
          </a>
          <a class="navbar-item" href="#">
            Fase de Escribir Órdenes
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item" href="#">
            Reglas Especiales del Mapa
          </a>
          <a class="navbar-item" href="#">
            Fase de Ejecución
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="field is-grouped">
          <p class="control">
            <a class="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="http://machiavelli1750.com" target="_blank" href="https://twitter.com/intent/tweet?text=Machiavelli 1750 listo para jugar! Visitanos en &amp;hashtags=machiavelli,wargame&amp;url=http://machiavelli1750.com">
              <span class="icon">
                <i class="fa fa-twitter"></i>
              </span>
              <span>
                Tweet
              </span>
            </a>
          </p>
          <p class="control">
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" style="padding-top: 5px;">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="VZE8VFX4WNKCG">
<input type="image" src="https://www.paypalobjects.com/es_ES/ES/i/btn/btn_donate_SM.gif" border="0" name="submit" alt="PayPal, la forma rápida y segura de pagar en Internet.">
<img alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1">
</form>


          </p>
        </div>
      </div>
    </div>
  </div>



</nav>
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
.navbar {
    background-color: transparent;
    color:white;
}
  .navbar-item img {
    max-height: 3.75rem;
}
  .navbar-item, .navbar-link{
    color:white;
  }
  .navbar-dropdown a.navbar-item {
    color: black;
}
  a.navbar-item:hover, a.navbar-item.is-active, a.navbar-link:hover, a.navbar-link.is-active {
    color: rgba(0, 0, 0, 0.7);
  }
  .navbar.is-transparent .navbar-dropdown a.navbar-item:hover {
    color: #b20808;
}
  .navbar-link::after {
    border: 1px solid #ffffff;
    border-right: 0;
    border-top: 0;
  }
.bd-tw-button {
    background-color: #55acee;
    color: white;
    border-color: transparent !important;
}
@media screen and (max-width: 1023px){
.navbar-menu {
    background-color: #433a3a;
}
}
</style>