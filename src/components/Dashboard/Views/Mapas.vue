<template>
    <div class="columns" style="margin-top: 20px;">
    	
    	
       	<admin-sidebar></admin-sidebar>
       	
       
       <div  class="column is-10 ">
            
        <h1 class="title"> Subir nuevo mapa </h1>
        <hr>
          <div class="columns">
            <div v-show="!mapacreado" class="column is-6" >
              <div class="field">
              <label class="label">Año</label>
              <p class="control" >
                <span class="select">
                  <select v-model="anyo">
                    <option>1750</option>
                    <option>1751</option>
                    <option>1752</option>
                    <option>1753</option>
                    <option>1754</option>
                    <option>1755</option>
                  </select>
                </span>
              </p>
            </div>
              <div class="field">
              <label class="label">Fase</label>
              <p class="control" >
                <span class="select">
                  <select v-model="fase">
                    <option>Primavera (hambruna)</option>
                    <option>Primavera (ajustes militares)</option>
                    <option>Primavera (movimientos)</option>
                    <option>Verano (plaga)</option>
                    <option>Verano (movimientos)</option>
                    <option>Otoño (movimientos)</option>
                  </select>
                </span>
              </p>
            </div>

              <file-base64
                v-bind:multiple="false"
                v-bind:done="getFiles">
              </file-base64>
              <img v-show="displayImage" :src="image"/> 


              <div class="modal is-active animated fadeIn" v-show="subiendo">
  <div class="modal-background"></div>
  <div class="modal-content">
    <!-- Any other Bulma elements you want -->
    <div class="box">
      <article class="media">
       
        <div class="media-content">
          <div class="content">
            <p>
              <strong>Subiendo imagen al servidor</strong>
              <i class="fa fa-spinner fa-spin"></i>
              <br>
              Este proceso puede tardar unos segundos dependiendo de su velocidad de conexión a Internet, el tamaño total de la imagen, o de lo feo que sea usted.
            </p>
          </div>
        </div>
      </article>
    </div>
  </div>
  <button class="modal-close is-large" aria-label="close"></button>
</div>


            </div>
            <div class="column is-6">
<div v-show="mapacreado" class="notification is-success">
  <p>Mapa creado correctamente. Ya lo puede ver todo el mundo. Besis!</p>
</div>
<div v-show="displayError!==''" class="notification is-danger">
  <button class="delete" @click="cerrarError()"></button>
   <p>Se produjo un error subiendo la imagen al servidor, por favor intentelo mas tarde</p>
</div>
            </div>
          </div>
          
       </div>

    </div>

</div>


</template>

<script>
import axios from 'axios';
import fileBase64 from 'vue-file-base64'
import AdminSidebar from "@/components/UIComponents/AdminSidebar.vue";

    export default {
    components: {
      AdminSidebar,
      fileBase64
    },
     data: function() {
    return {
       image: '',
       subiendo: false,
       anyo: '',
       fase: '',
       displayImage: false,
       mapacreado: false,
       displayError: "",
       cloudinary: {
       uploadPreset: 'da8vd0qv',
       apiKey: '532997817815383',
       cloudName: 'djhqderty'
     }, 
     thumb: {
       url: ''
     },
     thumbs: []
    }
  },
  computed: {
    clUrl: function() {
        return `https://api.cloudinary.com/v1_1/${this.cloudinary.cloudName}/image/upload`  
        },                
  },
methods: {
  cerrarError(){
    this.displayError=""
  },
  getFiles(files){
        //console.log(files);
        this.subiendo = true;
        this.image = files.base64;
        
        console.log("anyo: "+this.anyo)
        console.log("fase: "+this.fase)
        let newMapa = {
            api_key: "532997817815383",
            file: files.base64,
            upload_preset: "da8vd0qv"
          }

        var settings = {
        //async: true,
        //crossDomain: true,
        url: `https://api.cloudinary.com/v1_1/djhqderty/image/upload`,
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        processData: false,
        data: JSON.stringify(newMapa)
      };

      axios(settings)
        .then(
          (response) => {
                console.log(`1. response ${JSON.stringify(response.data.url, null, 4)}`)

              let newMapaJSON = {
                  titulo: this.fase,
                  imagen: response.data.url,
                  anyo: this.anyo,

                }
              console.log(`2. response ${JSON.stringify(newMapaJSON, null, 4)}`)
              var settingsMapa = {
              //async: true,
              //crossDomain: true,
              url: `http://localhost:9000/api/partidas/addcampanya/5a3c3e3c5b2d653b1c6507f0`,
              method: "PUT",
              headers: {
                "content-type": "application/json"
              },
              processData: false,
              data: JSON.stringify(newMapaJSON)
            };

            axios(settingsMapa)
              .then(
                (responseMapa) => {
                  
                  console.log(`response ${JSON.stringify(responseMapa, null, 4)}`)

                  this.subiendo = false;
                  this.displayImage = true;
                  this.mapacreado = true;
                }
              )
              .catch(
                (errorMapa) => {
                  this.subiendo = false;
                  console.log("------------------------------------------------------")
                  this.displayError = errorMapa;
                  console.log(errorMapa);
                }
              );






            
            
            
          }
        )
        .catch(
          (error) => {
            this.subiendo = false;
            console.log("------------------------------------------------------")
            this.displayError = error;
            console.log(error);
          }
        );
    },
    upload: function(file) {
      const formData = new FormData()
      formData.append('file', file[0]);
      //formData.append('api_key', this.cloudinary.apiKey);
      formData.append('upload_preset', this.cloudinary.uploadPreset);
      formData.append('folder', 'machiavelli');
    }
  }

  }
</script>
<style scoped>

</style>