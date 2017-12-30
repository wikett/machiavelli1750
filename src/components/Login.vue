<template>
    <div>
        <top-navbar name="Login"></top-navbar>
         <section class="hero is-success is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <h3 class="title has-text-grey">Login</h3>
          <div class="box">
            <figure class="avatar">
              <img src="https://picsum.photos/128/128">
            </figure>
            <form>
              <div class="field">
                <div class="control">
                  <input class="input is-large" v-model="user" type="email" placeholder="Your Email" autofocus="">
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <input class="input is-large" v-model="password" type="password" placeholder="Your Password">
                </div>
              </div>
              
              <a class="button is-block is-info is-large" @click="login()">Login</a>
            </form>
          </div>
          
        </div>
      </div>
    </div>
  </section>
    </div>
</template>

<script>

import TopNavbar from "@/components/UIComponents/TopNavbar.vue";

    export default{
        components: {
            TopNavbar
          },
        data(){
            return{
                loading: false,
                user: "",
                password: ""
            }
        },
        methods:{
            login(){
              console.log(`login: ${this.user}, password: ${this.password}`)
              if(this.user==="alex.orea@gmail.com")
              {
                if(this.password === "soyuncaca")
                {
                  this.$router.push("admin/mapas")
                }
              }
            }
        }
    }
</script>
<style scoped>
html,body {
  font-family: 'Open Sans', serif;
  font-size: 14px;
  font-weight: 300;
}
.hero.is-success {
  background: #F2F6FA;
}
.hero .nav, .hero.is-success .nav {
  -webkit-box-shadow: none;
  box-shadow: none;
}
.box {
  margin-top: 5rem;
}
.avatar {
  margin-top: -70px;
  padding-bottom: 20px;
}
.avatar img {
  padding: 5px;
  background: #fff;
  border-radius: 50%;
  -webkit-box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
  box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
}
input {
  font-weight: 300;
}
p {
  font-weight: 700;
}
p.subtitle {
  padding-top: 1rem;
}
</style>