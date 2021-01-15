<template>
<div class="container">
  <div class="Empresa">
    <h1 class="pt-5">Acerca de la empresa</h1>
    <div class="row py-5">
      <div class="col-md-12 col-lg-6 align-self-center">
          <b-img class="EmpresaImg" rounded fluid alt="Una foto que representa el escritorio medio de los desarrolladores de Game Chicken" src="../assets/Empresa.jpg"></b-img>
      </div>
    <div class="col-md-12 col-lg-6">
      <div class = "EmpresaContenido mt-5">
      <p>
					Game Chicken, fundada por dos alumnos de la carrera de diseño digital y tecnologías
					creativas, con mención en videojuegos, para llevar a cabo todos esos proyectos que les
					rondaban por la cabeza en sus años de estudio, videojugadores desde jóvenes se proponen
					ser desarrolladores de juegos que entiendan lo que la comunidad quiere y necesita.
					<br><br>

					Con el lema de: Hecho por gamers para gamer. Ellos siempre dicen: Queremos que la
					comunidad sea parte de nosotros, uno más de la empresa, que se sientan libres de darnos
					su feedback siempre que crean necesario.					
			</p>
      </div>
    </div>
    </div>
  </div>
 </div>  
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Empresa',

}
</script>

<style scoped>

  h1{

    font-weight: bold;

  }

  .EmpresaContenido{

    padding-left: 9%;
    padding-right: 9%;
    font-size: 1.25rem;
    text-align: left;

  }

  .EmpresaImg{

    width: 100%;

  }

</style>
