<template>
  <Tours/>
  <Explore/>
  <Customized/>
  <Inspiring/>
  <Footer/>
</template>
<script>
import { ref } from '@vue/reactivity'

import Tours from '../components/Tours.vue'
import Explore from '../components/Explore.vue'
import Customized from '../components/Customized.vue'
import Inspiring from '../components/Inspiring.vue'
import Contact from '../components/Footer.vue'
import Footer from '../components/Footer.vue'


export default {
  name: 'Home',
  components: {Tours,Explore,Customized,Contact,Inspiring,Footer},
  setup(){

    

    return{}
  }
}
</script>


<style>
button{
  background-color: black;
  color: white;
}
</style>
