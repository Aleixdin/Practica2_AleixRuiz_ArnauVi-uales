<template>
      <div  tag="proyecto">
        <b-img fluid :alt="alt" :src="srcimg"></b-img>
        <h2 class="pt-3 pb-2">{{nombre}}</h2>
        <p class="px-4 pb-5">
					{{texto}}					
				</p>
      </div> 
</template>

<script>


export default {
  props: ["id", "nombre", "srcimg", "alt", "texto"]
};
</script>

<style scoped>

p{

   text-align: left;
 }


</style>