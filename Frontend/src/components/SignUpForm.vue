<template>
    <div class="signupFrom">
        <form action="">
            <h2 class="usersHeader">Sign Up Form</h2>
       

            <label for="name"></label> <br/>
            <input type="name" name="name" class="name" id="name" placeholder="Name *"> <br/>

            <label for="email"></label>
            <input type="text" name="email" id="email" placeholder="Email *"> <br/>
    
            <label for="password"></label>
            <input type="password" name="password" id="password" placeholder="Password *"> <br/>

            <label for="password"></label>
            <input type="password" name="password2" id="password2" placeholder="Confirm Password *"> <br/><br>

            <label>Sign Up as:</label> <br>

            <input type="radio" id="staff" name="role" value="staff">
            <label for="staff">Staff</label> 
            <input type="radio" id="trainee" name="role" value="trainee">
            <label for="manager">Trainee</label><br><br>

            <p>Already have an accout? <router-link to="/login"> <i><b>Log in</b> </i></router-link> </p>
            <button class="signupbtn" type="submit" >Sign Up</button>
        </form>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

body {
    background-color: #F7F4F2;
}

.signupFrom {
    margin-left: 2.5%;
}

.formheader{
font-style: italic;
}

#name, #email, #password, #password2 {
    padding: 5px;
    margin: 5px;
    border-top: none;
    border-left: none;
    border-right: none;
    width: 275px;
    height: 35px;
}

button {
    float: right;
    border: none;
    background-color: #E5B7D2;
    /* color:#; */
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    font-size: 14px;
    border-radius: 25px;
    margin-right: 15px;
  }  

  button:hover {
    /* background-color: #3e8e41; */
    color: #E5B7D2;
    background-color: #848282;
    font-size: 17px;
    /* border-radius: 50%; */

  }

  button:active {
    transform: translateY(4px);
  }

</style>