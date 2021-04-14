<template>
    <div class="loginFrom">
        <form action="">
            <h1 class="formheader">Login Form</h1>
            <label for="email"></label>
                <input type="text" name="email" id="email" placeholder="Email *" required> <br>
            
                <label for="password"></label>
                <input type="password" name="password" id="password" placeholder="Password *" required> <br>

                <p>
                    Don't have an account? <a href="./signup"> <i><b>Sign up</b> </i></a> <br>
                    Go straight to  <a href="../"> <i><b>Home</b> </i></a>
                </p>
        
                <button class="loginbtn" type="submit">LogIn</button>
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

.loginFrom {
    margin-left: 2.5%;
}

.formheader{
font-style: italic;
}

input {
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