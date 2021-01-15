<template>
<div class="container">
  <div class="Home">
    <div class="row mt-4">
      <div class="col-sm-12 col-md-6 text-center text-md-right px-4">
        <div class="col-12 ">
           <b-img class="HomeImg" fluid alt="" src="../assets/DnD_VR_Experience.jpg"></b-img>
           <h2 class="pt-3 pb-2">Inicio del desarrollo</h2>
          <p>Tras completar el boceteado de los personajes, elección de mecánicas y definir las milestones podemos decir orgullosos que iniciamos el desarrollo de este proyecto. Muchas gracias a todos los que nos apoyáis desde Kickstarter.</p>
        </div>
        <div class="espaciador"></div>
        <h2>Banda sonora original de D&D</h2>
        <div class="video py-3"><Video/></div>
        <p>Se el primero en escuchar la increible banda sonora de Dragones y Mazmorras y siente un golpe directo a la nostalgia.</p>

         
      </div>
      <div class="col-sm-12 col-md-6 text-center text-md-left">
        <div class="col-12 px-4">
          <b-img class="HomeImg" fluid alt="" src="../assets/Unity.png"></b-img>
          <h2 class="pt-3 pb-2">Última actualización</h2>
          <p>Os agradecemos la espera pero podemos anunciar que el juego avanza a buen ritmo, hemos terminado la implementación de la luz dinámica y las animaciones de los enemigos, el orco y nuestro querido Kobold.</p>
        </div>
        <div class="espaciador"></div>
        <div class="col-12 px-4 pt-3">
          <h3 class="pb-3">Echa un vistazo a nuestra tienda! (proximamente)</h3>
          <div class=" col-12 col-md-6">
          <b-button class="nav-link" to="/Tienda" size="lg" block>Tienda</b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> 
</template>

<script>
import Video from '../components/Video'

export default {
  name: 'Home',
  components: {
    Video
  }
}
</script>

<style scoped>

.btn-secondary {

  background-color: #a12db6;
  border-color: #a12db6;
  color:black;
  font-weight: bold;
}

.espaciador{

  height: 30px;
  
}

.video{

  width: 90%;
  margin-left: 8%;

}

.HomeImg{

  width: 85%;

}

</style>
