<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab" 
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
    >
      
      <b-carousel-slide img-src="../assets/Foto1.png">
        <h1>Dungeons & Dragons: The VR experience</h1>
      </b-carousel-slide>
      
      
      <b-carousel-slide img-src="../assets/Foto2.jpg">
        <h1>Special Edition VR glasses</h1>
      </b-carousel-slide>

       <b-carousel-slide img-src="../assets/Foto3.png">
        <h1>Gameplay</h1>
      </b-carousel-slide>

    </b-carousel>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    }
  }
</script>

<style scoped>

h1{

  font-size: 1.5rem;

}

</style>

