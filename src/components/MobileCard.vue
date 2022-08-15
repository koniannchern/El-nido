<template>
    <div class="flex flex-col items-center text-center px-8 mb-10">
      <div class="relative mobile-card mb-7">
        <p class="absolute z-10">{{card_info}}</p>
        <img :src="card_pic" alt="">
      </div>
      <p class="mb-6">Luxury family safaris and inspiring wildlife adventures with a positive impact.</p>
      <button class="bg-transparent mt-12 py-5 px-8 tracking-widest text-sm font-bold border border-nido-blue rounded-sm transition ease-in-out duration-500 hover:text-white hover:bg-nido-blue">DISCOVER MORE</button>
    </div>
</template>

<script>
export default {
   props: ['card_pic','card_info'],
   setup(props){
       console.log(props.card_info)
   }
}
</script>

<style scoped>
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

</style>