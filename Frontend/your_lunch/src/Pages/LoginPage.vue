<template >

    <div class = "page">
        <div class="loginPage">
            <SideLogo/>
            <LoginForm/>

        </div>
    </div>
    
</template>


<script>

import SideLogo from '../components/SideLogo.vue';
import LoginForm from '../components/LoginForm.vue'


export default {
    name: 'LoginPage',
    components: {
        SideLogo,
        LoginForm
  }
}
</script>

<style scoped>
    .page{
        background-color: #F7F4F2;
        height: 100vh;
        
            
    }

    .loginPage{
        position: relative;
        justify-content: center;
        display: flex;
        top: 20%;
       
    }


</style>