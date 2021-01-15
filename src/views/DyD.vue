<template>
<div class="container"> 
  <div class="DyD">
    <h1 class="pt-5 pb-4">Dungeons & Dragons: The VR experience</h1>
    <div class = "Carousel"><Carousel /></div>
    <div class = "DyDContenido mt-5">
    <p>
					Dungeons & Dragons: The VR Experience es la herramienta perfecta
					para sentirte parte del tablero, ser una pieza más del mismo. Vive aventuras épicas con tus
					compañeros de armas y recorre laberínticas mazmorras perfectamente orquestadas por el
					Dungeon Master.
					<br><br>

					Te esperan trepidantes combates por turnos con lanzamiento de dados al más puro estilo de
					la vieja escuela, gráficos desenfadados y graciosos, infinidad de salas por explorar y tesoros
					que gumiar. ¿A qué estás esperando?
					<br><br>
				</p>
      </div>
  </div>
</div>
</template>

<script>
import Carousel from '../components/Carousel'

export default {
  name: 'DyD',
  components: {
    Carousel,
  }
}
</script>

<style scoped>

  h1{

    font-weight: bold;
  }

  .Carousel{

        margin-left: 9%;
        margin-right: 9%;
        border: 4px solid  #a12db6;

  }

  .DyDContenido{

    padding-left: 9%;
    padding-right: 9%;
    font-size: 1.25rem;
    text-align: left;

  }

</style>
