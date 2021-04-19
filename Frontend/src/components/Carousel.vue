<template>

    <div id="myCarousel" class="carousel slide carousel-fade" data-ride="carousel" data-interval= "3000">
    
    <ol class="carousel-indicators">
        <li data-target = "#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target = "#myCarousel" data-slide-to="1"></li>
        <li data-target = "#myCarousel" data-slide-to="2"></li>

    </ol>

    <div class="carousel-inner">
        <div class="carousel-item active">
            <div class="over-lay-image" style="background-image:url(https://images.pexels.com/photos/3662136/pexels-photo-3662136.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500) ;"></div>
            <div class="container-car">
              <div class="container">
                <div class="carousel-caption text-left">
                  
                    <h1 class="carouHeader">Welcome ......... </h1>
                   
                      <h1 class="carouHeader"> </h1>
                 
                  <p class="carouPara"> <i>Whatever your lunch preference, We gotch you </i> <span style='font-size:50px;'>&#128521;</span> </p>
                </div>
              </div>
            </div>

        </div>

        <div class="carousel-item"  >
            <div class="over-lay-image" style="background-image:url(https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500) ;"></div>
            <div class="container-car">
              
            </div>

        </div>

        <div class="carousel-item " >
            <div class="over-lay-image" style="background:url(https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500) ;"></div>
            <div class="container-car">
            
            </div>

        </div>

    </div>        
</div> 
  
</template>

<script>
export default {
    name: "Carousel",


}
</script>

<style scoped>
#myCarousel{
    margin-top: 0px;
}

.carousel-item {
    width: 100%;
    height: 60vh;
    background-color: black;
    color: whitesmoke;
    position: relative;
    margin-bottom: 20px;
    /* margin-top: -20px; */
    
}

.container-car {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding-bottom: 50px ;
    
}

.over-lay-image {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    background-position: center ;
    background-size: cover ;
    opacity: 0.5;
}
    

</style>