<template>
  <section class="container mx-auto flex flex-col items-center inspiring md:py-32 py-24">
    <div class="text-center mb-8">
      <p class="text-sm tracking-wider mb-3">GET A GLIMPSE OF WHAT YOU CAN EXPERIENCE</p>
      <h4 class="text-5xl">Inspiring</h4>
      <span class="font-allura text-6xl">stories</span>
    </div>


    <div class="flex flex-col justify-center lg:flex-row space-x-12 ">
      <div class="lg:w-1/3 flex flex-col p-5 lg:p-8">
        <img :src="inspiring_one" alt="" class="inspiring_pic_one mb-10">
        <h5 class="text-4xl mb-4">How to choose a <span class="font-kaushan">responsible</span> tour operator</h5>
        <p class="text-nido-green font-bold mb-4">ABOUT El NIDO TRAVEL</p>
        <router-link :to="{ name: 'Home' }" class="flex items-center"><span class="block w-56 h-0.5 bg-black mr-4"></span> READ STORY ></router-link>  
      </div>
      <div class="mt-36 lg:w-1/3 flex flex-col p-5 lg:p-8">
        <img :src="inspiring_two" alt="" class="inspiring_pic_two mb-10">
        <h5 class="text-4xl mb-4">Why the travel industry needs greater <span class="font-kaushan">transparency</span></h5>
        <p class="text-nido-blue font-bold mb-4">ABOUT EL NIDO TRAVEL</p>
        <router-link :to="{ name: 'Home' }" class="flex items-center"><span class="block w-56 h-0.5 bg-black mr-4"></span> READ STORY ></router-link> 
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    setup(){
      const inspiring_one = ref(require('../assets/inspiring_one.jpg'))
      const inspiring_two = ref(require('../assets/inspiring_two.jpg'))



      return{inspiring_one,inspiring_two}
    }
}
</script>

<style scoped>
.inspiring img{
  max-width: 24rem;
  max-height: 34rem;
}
img.inspiring_pic_one{
  transform: rotate(2deg)
}
img.inspiring_pic_two{
  transform: rotate(-2deg)
}

</style>