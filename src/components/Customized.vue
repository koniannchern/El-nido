<template>

  <!--Desktop version-->
  <section class="hidden container mx-auto lg:flex lg:items-center lg:justify-center space-x-8 text-center py-36 customized lg:flex-row">
    <div class="flex flex-col items-center w-1/3 px-8">
      <div class="relative card mb-7">
        <p class="absolute z-10">Family travel</p>
        <img :src="family_pic" alt="">
      </div>
      <p class="mb-6">Luxury family safaris and inspiring wildlife adventures with a positive impact.</p>
      <button class="bg-transparent mt-12 py-5 px-8 tracking-widest text-sm font-bold border border-nido-blue rounded-sm transition ease-in-out duration-500 hover:text-white hover:bg-nido-blue">DISCOVER MORE</button>
    </div>

    <div class="w-1/3 px-8">
      <div class="mb-28">
        <p class="text-sm tracking-wider mb-3">TRAVEL IN STYLE</p>
        <h4 class="text-5xl">Find travel inspiration by <span class="font-allura text-6xl">style</span></h4>
      </div>

      <div class="flex flex-col items-center">
         <div class="relative card mb-7">
           <p class="absolute z-10">Private travel</p>
           <img :src="private_travel" alt="">
         </div>
         <p class="mb-6">Quality time with family and friends, complete flexibility and exclusive use safari camps.</p>
         <button class="bg-transparent mt-12 py-5 px-8 tracking-widest text-sm font-bold border border-nido-blue rounded-sm transition ease-in-out duration-500 hover:text-white hover:bg-nido-blue">DISCOVER MORE</button>
      </div>
    </div>


    <div class="flex flex-col items-center w-1/3 px-8">
      <div class="relative card mb-7">
        <p class="absolute z-10">Honeymoons</p>
        <img :src="honeymoons" alt="">
      </div>
      <p class="mb-6">From guilt-free indulgence to the romance of a real adventure, we can help you plan your perfect honeymoon.</p>
      <button class="bg-transparent mt-12 py-5 px-8 tracking-widest text-sm font-bold border border-nido-blue rounded-sm transition ease-in-out duration-500 hover:text-white hover:bg-nido-blue">DISCOVER MORE</button>
    </div>
  </section>

  <!--Mobile version-->
  <section class="container mx-auto py-36 flex flex-col lg:hidden px-4">

      <div class="text-center mb-28">
        <p class="text-sm tracking-wider mb-3">TRAVEL IN STYLE</p>
        <h4 class="text-5xl">Find travel inspiration by <span class="font-allura text-6xl">style</span></h4>
      </div>

      <MobileCard :card_pic="family_pic" card_info="Family_travel"/>
      <MobileCard :card_pic="private_travel" card_info="Private_travel"/>
      <MobileCard :card_pic="honeymoons" card_info="Honeymoons"/>
  </section>

</template>

<script>

import MobileCard from './MobileCard.vue'

import { ref } from '@vue/reactivity'
export default {
    components: {MobileCard},
    setup(){

       const family_pic = ref(require('../assets/family_travel.jpg'))
       const honeymoons = ref(require('../assets/honeymoons.jpg'))
       const private_travel = ref(require('../assets/private_travel.jpg'))
       


       return {family_pic,honeymoons,private_travel}
    }


    
}
</script>

<style scoped>

.card > p{
  color: white;
  top: 4rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 2.5rem;
}
.card img{
  width: 25rem;
  height: auto;
  filter: brightness(90%);
}
.mobile-card > p{
  color: white;
  top: 4rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 2rem;
}
.mobile-card img{
  width: 20rem;
  height: auto;
  filter: brightness(90%);
}


@media screen and (max-width: 1440px){
   .card > p{
     font-size: 1.5rem;
   }
}
</style>