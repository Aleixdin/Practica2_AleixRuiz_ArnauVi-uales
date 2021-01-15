<template>
  <div id="app">
   <Menu />
   <!-- <Sidebar/>  se añade el menú -->
    <div class ="Parallax">
      <div class ="Logo"><b-img alt="Retrato de Aleix, programador de game chicken" src="./assets/logo.png"></b-img></div>
      </div>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Menu from './components/Menu'
import Footer from './components/Footer'
/*import Sidebar from './components/Sidebar'*/

export default {
  name: 'App',
  components: {
    Menu,
    Footer
    /*Sidebar*/
  }
}
</script>

<style>


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgba(240, 240, 240)
  
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}


.Parallax{

    background-image: url("./assets/Parallax.jpg");
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;

}

.Logo img{

  max-width: 100%;
  height: auto;

}

</style>
