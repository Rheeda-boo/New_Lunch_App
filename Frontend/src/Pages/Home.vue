<template>
  
  <div>
    <Navbar/>
    <Carousel/>
  </div>  
</template>
  

<script>

import Carousel from '../components/Carousel.vue'
import Navbar from "../components/Navbar"


export default {
  name: "Home",  
  components: { Navbar,Carousel,  },

}
</script>

<style scoped>

</style>