<template>
  <section class="banner">
    <div class="container max-w-8xl mx-auto px-6 py-10">
      <nav class="flex items-center justify-between font-bold text-white">
        <h1 class="font-lora font-bold text-2xl">El Nido Paradise</h1>
        <div class="hidden md:flex md:space-x-10">
          <div class="group">
             <router-link :to="{ name: 'Home' }">Home</router-link>
             <div
              class="mx-2 group-hover:border-b group-hover:border-blue-50"
            ></div>
          </div>
          <div class="group">
             <router-link :to="{ name: 'Home' }">About</router-link>
             <div
              class="mx-2 group-hover:border-b group-hover:border-blue-50"
            ></div>
          </div>
          <div class="group">
             <router-link :to="{ name: 'Home' }">Detail</router-link>
             <div
              class="mx-2 group-hover:border-b group-hover:border-blue-50"
            ></div>
          </div>
          <div class="group">
             <router-link :to="{ name: 'Home' }">Contact</router-link>
             <div
              class="mx-2 group-hover:border-b group-hover:border-blue-50"
            ></div>
          </div>
        </div>

        <!-- Hamburger Button -->
        <div @click="handleBurger" class="md:hidden hamburgerbox">
          <button class="z-40 block hamburger md:hidden focus:outline-none" ref="burger">
            <span class="hamburger-top" ref="name"></span>
            <span class="hamburger-middle"></span>
            <span class="hamburger-bottom"></span>
          </button>
        </div>
      </nav>

      <!-- Mobile Menu -->
      <div class="hidden flex-col text-white absolute top-0 bottom-0 left-0 w-full min-h-screen pt-40 pl-12 bg-black text-2xl space-y-4" ref="menu" >
        <router-link :to="{ name: 'Home' }" class="hover:text-nido-red">Home</router-link>
        <router-link :to="{ name: 'Home' }" class="hover:text-nido-red">About</router-link>
        <router-link :to="{ name: 'Home' }" class="hover:text-nido-red">Detail</router-link>
        <router-link :to="{ name: 'Home' }" class="hover:text-nido-red">Contact</router-link>
      </div>


      <!--Hero text-->
      <div class="mt-32 px-12 text-white font-bold tracking-widest md:mt-72 ">
        <p>Welcome to</p>
        <span class="font-lora text-6xl tracking-wider leading-tight">PALAWAN</span>
        <p class="leading-tight">EXPLORE A PLACE LIKE NO OTHER</p>

        <button class="bg-transparent mt-12 py-5 px-8 tracking-widest text-sm font-bold border rounded-sm transition ease-in-out duration-500 hover:text-nido-blue hover:bg-white">EXPLORE NOW</button>
      </div>

    </div>
  </section>
</template>

<script>
import { ref } from '@vue/reactivity'


export default {
  setup(){
    
    const burger = ref(null)
    const menu = ref(null)


    const handleBurger = () => {
       burger.value.classList.toggle('open')
       menu.value.classList.toggle('flex')
       menu.value.classList.toggle('hidden')
    }
    
   
    
    return  { burger, handleBurger, menu, }
  }
}
</script>

<style>
.banner{
  background-image: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.1)),url('../assets/elnido_header.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}

@media (max-width: 576px){
  .banner{
    background-image: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.1)),url('../assets/elnido_mobile.jpg');
  }
}

.hamburger {
  cursor: pointer;
  width: 24px;
  height: 24px;
  transition: all 0.25s;
  position: relative;
}

.hamburger-top,
.hamburger-middle,
.hamburger-bottom {
  position: absolute;
  width: 24px;
  height: 2px;
  top: 0;
  left: 0;
  background: #fff;
  transform: rotate(0);
  transition: all 0.5s;
}

.hamburger-middle {
  transform: translateY(7px);
}

.hamburger-bottom {
  transform: translateY(14px);
}

.open .hamburger-top {
  transform: rotate(45deg) translateY(6px) translateX(6px);
}

.open .hamburger-middle {
  display: none;
}

.open .hamburger-bottom {
  transform: rotate(-45deg) translateY(6px) translateX(-6px);
}



</style>