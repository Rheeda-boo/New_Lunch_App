<template>
  <div>
      <nav class="navbar">
        <img src="../assets/lunchlogo.png" alt="Logo" class="logo">

        <div class="menu">
            <router-link to="/" class="menuList"><i class="fas fa-home"> </i> Home</router-link>
            <router-link to="/menu" class="menuList"><i class="fas fa-bars"> </i> Menu</router-link>
            <router-link to="/login" class="menuList"><i class="fas fa-sign-in-alt"> </i> Login</router-link>
        </div>

      </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",

}
</script>



<style scoped>

.navbar {
  display: flex;
  background-color: #848282;
   
}

.logo {
  height: 50px;
  width: 150px;
  float: left;
  margin: 5px 10px;
  border-radius: 25px;
  padding: 2px;
}

.menu {
  /* float: right; */
  right: 0px;
 
}

.menuList {
  list-style-type: none;
  display: inline-block;
  margin: 0px 30px;
  font-size: larger;
  padding: 10px 0;
  color: whitesmoke;
  text-decoration: none;
  text-transform: uppercase;
}

</style>