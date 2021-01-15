<template>
  <b-navbar toggleable="md" type="light" variant="info">
    <b-navbar-brand href="/Home"><img class="float-left ml-3" alt="" src="../assets/minipollo.png"></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-container >
        <b-collapse  id="nav-collapse" is-nav>
          <b-navbar-nav class ="Navegacion">
            <b-nav-item class="nav-link" to="/DyD">D&D</b-nav-item>
            <b-nav-item class="nav-link" to="/Empresa">Empresa</b-nav-item>
            <b-nav-item class="nav-link" to="/about">About</b-nav-item>
          </b-navbar-nav>

        </b-collapse>
      </b-container>
  </b-navbar>
</template>


<script>
export default {


}
</script>


<style scoped>

.bg-info {
    background-color:   #a12db6!important;
}

.router-link-exact-active, .router-link-active {
  background-color: #e868ff;
  border-radius: 3px;
}

.navbar-brand{

  margin-right: 0;
}

.container{

  margin-left: 0;
  
}

</style>