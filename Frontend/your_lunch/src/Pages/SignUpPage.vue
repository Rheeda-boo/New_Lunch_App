<template >

    <div class = "page">
        <div class="signupPage">
            <SideLogo/>
            <SignUpForm/>

        </div>
    </div>
    
</template>


<script>

import SideLogo from '../components/SideLogo.vue';
import SignUpForm from '../components/SignUpForm.vue'


export default {
    name: 'SignUpPage',
    components: {
        SideLogo,
        SignUpForm
  }
}
</script>

<style scoped>
    .page{
        background-color: #F7F4F2;
        height: 100vh;
        
            
    }

    .signupPage{
        position: relative;
        justify-content: center;
        display: flex;
        top: 20%;
       
    }


</style>