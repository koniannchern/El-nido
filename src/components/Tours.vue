<template>
  <!--tours-->
  <section class="px-10 pt-20 pb-36 text-white bg-ocean-blue">
    <div class="container mx-auto text-center flex flex-col items-center mb-5">
      <h2 class="text-5xl font-bold mb-3">El Nido Tours</h2>
      <p class="max-w-xl">There are many ways to go island hopping in El Nido, Palawan. Find everything you need to know about the Premium and Regular 7 Wonders of El Nido Tours, Combo tours, Private tours, Overnight camping, Expedition Tours, and the Ultimate Adventure Tour. Make your choice and prepare yourself for a memorable journey!</p>
    </div>
    

    <!--tour tabs-->
    <div @click="handleTabs" class="tabs flex flex-col justify-center max-w-3xl mx-auto mb-16 md:space-x-10 md:flex-row ">
      <!-- Tab 1 -->
        <div
          class="flex justify-center text-center cursor-pointer border-b md:border-b-0 hover:text-softRed md:w-1/3 tab"
          data-target="panel-1"
        >
          <div class="p-5 bottomline" data-target="panel-1">
            Tour A
          </div>
        </div>

        <!-- Tab 2 -->
        <div
          class="flex justify-center text-center cursor-pointer border-b md:border-b-0 hover:text-softRed md:w-1/3 tab"
          data-target="panel-2"
        >
          <div class="p-5" data-target="panel-2">Tour B</div>
        </div>

        <!-- Tab 3 -->
        <div
          class="flex justify-center text-center cursor-pointer border-b md:border-b-0 hover:text-softRed md:w-1/3 tab"
          data-target="panel-3"
        >
          <div class="p-5" data-target="panel-3">Tour C</div>
        </div>

        <!-- Tab  -->
        <div
          class="flex justify-center text-center cursor-pointer border-b md:border-b-0 hover:text-softRed md:w-1/3 tab"
          data-target="panel-4"
        >
          <div class="p-5" data-target="panel-4">Tour D</div>
        </div>
    </div>
    
    

    <!--Tours introduction in desktop-->
    <div class="hidden lg:flex lg:px-20">
      <!--PanelOne-->
      <div class="panel panel-1 flex items-center text-center">
        <div class="md:w-1/3">
          <div class="max-w-md mb-24">
            <font-awesome-icon icon="fa-solid fa-clock" size="2xl" class="mb-3"/>
            <h3 class="text-2xl font-bold mb-3">Length of The Tour</h3>
            <p ref="desktop_length_Paragraph">{{length_paragraph}}</p>
          </div>

          <div class="max-w-md meal">
            <font-awesome-icon icon="fa-solid fa-utensils" size="2xl" class="mb-3"/>
            <h3 class="text-2xl font-bold mb-3">Meal and Water</h3>
            <p ref="desktop_meal_Paragraph">{{meal_paragraph}}</p>
          </div>
        </div>
        <div class="max-w-1/3 md:w-1/3 p-10 flex flex-col items-center">
          <img :src="tourPicOne" alt="" class="tourPicOne">
          <img :src="tourPicTwo" alt="" class="tourPicTwo">
        </div>
        <div class="md:w-1/3 ml-24">
          <font-awesome-icon icon="fa-solid fa-map-location" size="2xl" class="mb-3"/>
          <h3 class="text-2xl font-bold mb-3">Departure</h3>
          <p>For all our island hopping tours in the Bacuit Bay, the meeting point in the morning of your tour is located at our office just near El Nido beach front. The departure will be either from there or from Corong-Corong beach. All the practical informations will be sent to you by  email right after your booking.Note that we offer “counter-the-clock” and “reverse order” options for our private tours, which are designed to allow you to avoid the crowds during your island hopping day. You can check this page for more informations.</p>
        </div>
      </div>

    </div>
    
    

    <!--Tours introduction in mobile-->
    <div class="flex flex-col items-center lg:hidden px-4">
      <div class="mb-4">
        <img :src="tourPicOne" alt="" class="tourPicOne">
        <img :src="tourPicTwo" alt="" class="tourPicTwo">
      </div>
      
      <div class="flex flex-col space-y-10">
        <div class="flex items-start space-x-8">
          <font-awesome-icon icon="fa-solid fa-clock" size="2xl"/>
          <div>
            <h3 class="text-xl font-bold mb-4">Length of The Tour</h3>
            <p ref="mobile_length_Paragraph">{{length_paragraph}}</p>
          </div>
        </div>


        <div class="flex items-start space-x-8">
          <font-awesome-icon icon="fa-solid fa-utensils" size="2xl"/>
          <div>
            <h3 class="text-xl font-bold mb-4">Meal and Water</h3>
            <p ref="mobile_meal_Paragraph">{{meal_paragraph}}</p>
          </div>
        </div>

        <div class="flex items-start space-x-8">
          <font-awesome-icon icon="fa-solid fa-map-location" size="2xl"/>
          <div>
            <h3 class="text-xl font-bold mb-4">Departure</h3>
            <p>For all our island hopping tours in the Bacuit Bay, the meeting point in the morning of your tour is located at our office just near El Nido beach front. The departure will be either from there or from Corong-Corong beach. All the practical informations will be sent to you by  email right after your booking.Note that we offer “counter-the-clock” and “reverse order” options for our private tours, which are designed to allow you to avoid the crowds during your island hopping day. You can check this page for more informations.</p>
          </div>
        </div>
      </div>

    </div>


  </section>


  
</template>

<script>
import { ref } from '@vue/reactivity'




export default {
  name: 'Home',
  components: {},
  setup(){

    const tourPicOne = ref(require('../assets/tour_photo/panel-1-first.jpg'))
    const tourPicTwo = ref(require('../assets/tour_photo/panel-1-second.jpg'))

    let desktop_length_Paragraph = ref(null)
    let desktop_meal_Paragraph = ref(null)
    let mobile_length_Paragraph = ref(null)
    let mobile_meal_Paragraph = ref(null)
    let length_paragraph = "The duration of the tour is about 7 hours in total. We will bring you back to El Nido around 4pm o’clock.During the island hopping Tour A, you will stop in Big Lagoon, Secret Lagoon, Shimizu Island and Seven Commando Beach."
    let meal_paragraph = "At noon, we will stop on an island for lunch. There, our crew will prepare a delicious grill for you. You can choose between grilled fish, grilled chicken and grilled pork. With that, you will have rice and fruits for dessert.You can bring your own beverages (soft drink or alcohol) if you wish. In any case, we will supply you with plenty of drinking water."

    const handleTabs = (e) => {
       const tabs = document.querySelectorAll('.tab')

       tabs.forEach((tab) => {
  
        if(!e.target.classList.contains('tabs')){
          tab.children[0].classList.remove('bottomline')
        }
   
       });

       if(e.target.classList.contains('tab')){
         e.target.firstChild.classList.add('bottomline')
       }else if(!e.target.classList.contains('tab') && !e.target.classList.contains('tabs')){
         e.target.classList.add('bottomline')
       }
       
      let panelOne_lengthpg = "The duration of the tour is about 7 hours in total. We will bring you back to El Nido around 4pm o’clock.During the island hopping Tour A, you will stop in Big Lagoon, Secret Lagoon, Shimizu Island and Seven Commando Beach."
      let panelOne_mealpg = "At noon, we will stop on an island for lunch. There, our crew will prepare a delicious grill for you. You can choose between grilled fish, grilled chicken and grilled pork. With that, you will have rice and fruits for dessert.You can bring your own beverages (soft drink or alcohol) if you wish. In any case, we will supply you with plenty of drinking water."
      let panelTwo_lengthpg = "Tour B will take about 7 hours in total, and you will be back in El Nido around 4pm o’clock.During the tour, you will stop in Snake Island (aka Vigan Island), Pinagbuyutan Island, Entalula Beach, Cudugnon Cave and in a special snorkeling site." 
      let panelTwo_mealpg = "For lunch, our crew will cook a delicious buffet, including grilled fish, chicken or pork, rice, seasoning sauce and local fruits.While on tour, you can bring you own beverages (for instance, if you also want to bring beer or rhum and coke). In any case, we will provide every guest with plenty of drinking water."
      let panelThree_lengthpg = "Tour C has a total duration of about 7 hours. So you will be back in town around 4pm after a day filled with adventures and discoveries.During the island hopping Tour C, you will stop on Helicopter Island, Matinloc Island, Secret Beach, Star Beach and Hidden Beach."
      let panelThree_mealpg = "We will stop for lunch on Talisay Island, where our crew will cook for you. On the menu: grilled fish, chicken or pork, rice, local fruits and traditional seasoning sauce. Be prepared to say “masarap” (which is the filipino word for “delicious”)!You are free to bring your own beverages (soft drink or alcohol) but, in any case, we’ll have plenty of drinking water for you."
      let panelFour_lengthpg = "The tour will last around about 7 hours. Plan to be back in town around 4 o’clock in the afternoon.During tour D, we will stop at the following destinations: Ipil Beach, Cadlao Lagoon, Paradise Beach, Pasandigan Beach, Natnat Beach, Bukal Beach."
      let panelFour_mealpg = "In every one of our tour, a lunch buffet is included. For lunch, we will stop on an island and our crew will grill and cook for you. In this buffet, you will find grilled fish, chicken or pork, rice, local fruits and typical filipino seasoning based on soja sauce, calamansi and, at your convenience, spices.You can bring your own soft drinks or alcohol beverages but, in any case, we will bring plenty of drinking water for you."



       const classString = e.target.getAttribute('data-target')
       if(classString === 'panel-1'){
          tourPicOne.value = require(`../assets/tour_photo/${classString}-first.jpg`)
          tourPicTwo.value = require(`../assets/tour_photo/${classString}-second.jpg`)
          desktop_length_Paragraph.value.textContent = panelOne_lengthpg
          desktop_meal_Paragraph.value.textContent = panelOne_mealpg
          mobile_length_Paragraph.value.textContent = panelOne_lengthpg
          mobile_meal_Paragraph.value.textContent = panelOne_mealpg
        }else if(classString === 'panel-2'){
          tourPicOne.value = require(`../assets/tour_photo/${classString}-first.jpg`)
          tourPicTwo.value = require(`../assets/tour_photo/${classString}-second.jpg`)
          desktop_length_Paragraph.value.textContent = panelTwo_lengthpg
          desktop_meal_Paragraph.value.textContent = panelTwo_mealpg
          mobile_length_Paragraph.value.textContent = panelTwo_lengthpg
          mobile_meal_Paragraph.value.textContent = panelTwo_mealpg
        }else if(classString === 'panel-3'){
          tourPicOne.value = require(`../assets/tour_photo/${classString}-first.jpg`)
          tourPicTwo.value = require(`../assets/tour_photo/${classString}-second.jpg`)
          desktop_length_Paragraph.value.textContent = panelThree_lengthpg
          desktop_meal_Paragraph.value.textContent = panelThree_mealpg
          mobile_length_Paragraph.value.textContent = panelThree_lengthpg
          mobile_meal_Paragraph.value.textContent = panelThree_mealpg
        }else if(classString === 'panel-4'){
          tourPicOne.value = require(`../assets/tour_photo/${classString}-first.jpg`)
          tourPicTwo.value = require(`../assets/tour_photo/${classString}-second.jpg`)
          desktop_length_Paragraph.value.textContent = panelFour_lengthpg
          desktop_meal_Paragraph.value.textContent = panelFour_mealpg
          mobile_length_Paragraph.value.textContent = panelFour_lengthpg
          mobile_meal_Paragraph.value.textContent = panelFour_mealpg
        }
    }


    return{
      tourPicOne,tourPicTwo,
      handleTabs,
      desktop_length_Paragraph,length_paragraph,mobile_length_Paragraph,
      desktop_meal_Paragraph,meal_paragraph,mobile_meal_Paragraph
      }
  }
}
</script>

<style scoped>
.tourPicOne{
  transform: rotate(-3deg);
}
.tourPicTwo{
  transform: rotate(3deg) translate(50px, -15px);
}
.meal{
  transform: translate(100px, 90px);
}
.bottomline{
  border-bottom: 4px solid white;
}
</style>