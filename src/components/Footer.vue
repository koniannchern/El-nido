<template>
  <footer class="footer-section bg-nido-grey text-black py-28 px-8">
    <div class="container mx-auto text-center mb-11 px-8">
      <p class="text-sm tracking-wider mb-3">THE WORLD IS AT YOUR FEET</p>
      <h4 class="text-5xl">Receive <span class="font-allura text-6xl">inspiration</span> at El nido</h4>
    </div>

    
    <div class="max-w-6xl mx-auto border flex flex-col-reverse items-center footer-box p-8 mb-12 lg:space-x-6 lg:flex-row">
      <form class="flex flex-col lg:w-1/2 space-y-12">
        <input type="text" placeholder="First name (required)">
        <input type="text" placeholder="Last name (required)">
        <input type="text" placeholder="E-mail (required)">
        <label class="space-x-3">
          <input type="checkbox">
          <span>I'm happy to receive emails from Niarra Travel *</span>
        </label>
        <button class="bg-white w-32 py-3 border border-nido-blue transition ease-in-out duration-500 hover:text-white hover:bg-nido-blue">Subscribe</button>
      </form>
      <div class="max-w-2xl lg:w-1/2 mb-6 lg:mb-0">
        <img :src="footer_pic" alt="">
      </div>
    </div>
    

    

    <div class="max-w-5xl mx-auto flex lg:justify-center space-y-8 flex-col lg:flex-row lg:space-y-0">
       <div class="lg:w-2/4 space-y-3 lg:text-left">
        <h4 class="text-5xl">Contact a Travel Researcher</h4>
        <p class="text-sm tracking-wider">We always aim to reply within 24 hours.</p>
       </div>

       <div class="lg:w-1/4 space-y-5">
        <div>
          <p class="font-bold">CALL US</p>
          <p>+1 (332) 334 0501</p>
        </div>
        <div>
          <p class="font-bold">E-MAIL US</p>
          <p>explore_elnido@gmail.com</p>
        </div>
       </div>

       <div class="lg:w-1/4 space-x-4">
        <font-awesome-icon icon="fa-brands fa-facebook" size="2xl"/>
        <font-awesome-icon icon="fa-brands fa-instagram" size="2xl"/>
        <font-awesome-icon icon="fa-brands fa-twitter" size="2xl"/>
       </div>
    </div>

  </footer>

</template>

<script>
import { ref } from '@vue/reactivity'

export default {
     setup(){
       const footer_pic = ref(require('../assets/footer_pic.png'))
       
       return{footer_pic}
     }
}
</script>

<style>
form input[type=text]{
  border-bottom: 1px solid black;
  outline: none;
  background-color: transparent;
  font-size: 1.2rem;
}
.footer-box{
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}



</style>