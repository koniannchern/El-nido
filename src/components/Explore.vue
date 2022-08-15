<template>
  <section class="explore_banner text-white flex justify-center items-center">
     <div class="flex flex-col items-center">
      <img :src="banner" alt="">
      <span class="tracking-wide font-bold">I WANT TO EXPLORE</span>
      <h4 class="text-7xl font-dm">Palawan</h4>
      <button class="bg-transparent mt-12 py-5 px-8 tracking-widest text-sm font-bold border rounded-sm transition ease-in-out duration-500 hover:text-nido-blue hover:bg-white">DISCOVER MORE</button>
     </div>
  </section>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
   setup(){
     const banner = ref(require('../assets/philipines_map_third.png'))



     return {banner}
   }
}
</script>

<style>
.explore_banner{
  background-image: linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5)),url('../assets/elnido_explore.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
  overflow: hidden;
}
.explore_banner img{
  max-width: 37rem;
}
</style>