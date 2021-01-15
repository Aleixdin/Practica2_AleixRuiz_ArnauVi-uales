<template>
  <div>
    <b-button v-b-toggle.sidebar-1 size ="sm"><b-icon icon = "list"></b-icon></b-button>
    <b-sidebar id="sidebar-1" title="Sidebar" shadow backdrop backdrop-variation = "Dark">
      <div class="px-3 py-2">
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
          in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
        <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
export default {


}
</script>


<style scoped>

.bi-x .b-icon .bi {
    width: 1em;
    height: 1em;
    fill: red;
}


</style>

