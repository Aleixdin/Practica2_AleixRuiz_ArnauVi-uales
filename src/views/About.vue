<template>
<div class="container">  
  <div class="about">
    <h1 class="pt-5">Conoce al equipo un poco mejor</h1>
    <div class="row pt-5"> 
        <div class="col-sm-12 col-md-6" v-for="proyecto in about" :key="proyecto.id" > 
        <Empleado :nombre="proyecto.nombre" :srcimg="proyecto.srcimg" :alt="proyecto.alt" :texto="proyecto.texto"></Empleado>				
      </div>
    </div>  
  </div>
</div>
</template>

<script>
import Empleado from '../components/Empleado'

const lstProysJson = '../About.json';

export default {
  props: {  
   name: {

      default: 'DatosAbout'
    }
  },
  components: {
    Empleado,
  },
  data() {
      return {
        about:[],
        githubPage: 1,
        page: 1,
        loading: false,
        perPage: 5
      }
    },

    mounted() {
      this.fetchData()
    },
  
    methods: {
        async fetchData() {
          const res = await fetch (lstProysJson);
          const val= await res.json();
          this.about=val;
          console.log(val);
        }
    }
  }
</script>

<style scoped>

 h1{

   font-weight: bold;
 }

 
</style>