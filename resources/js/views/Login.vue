<template>
        <div class="container">
            <form class="login--form">
                <p>Logowanie</p>
                <input v-model="form.email" type="email" id="email" placeholder="Email"/><br>
                <input v-model="form.password" type="password" id="password" placeholder="Password"/><br>
                <input type="button" @click.prevent="login" value="Zaloguj">
            </form>
        </div>
</template>
<script>
    export default {
        inject: ["auth"],
        data() {
            return {
                form: {
                    email: "",
                    password: ""
                }
            };
        },
        methods: {
            async login() {
                try {
                    await this.auth.login(this.form);
                }catch (err) {
                    this.form.email = "";
                    this.form.password = "";
                }   
            }
        }
    };
</script>
<style>

body {
  height: 100vh;
  font-family: 'Montserrat', sans-serif;
}


.login--form {

  background: rgba(255,255,255,0.5);
  padding: 3em;
  height: 500px;
  width: 500px;
  border-radius: 20px;
  border-left: 1px solid rgba(255,255,255,0.3);
  border-top: 1px solid rgba(255,255,255,0.3);
  backdrop-filter: blur(10px);
  box-shadow: 20px 20px 40px -6px rgba(0,0,0,0.2);
  text-align: center;
  margin-left: 25%;
  margin-top: 100px;
  position: relative;
  transition: all 0.2s ease-in-out;
}

.login--form p {
    font-weight: 500;
    color: #fff;
    opacity: 1;
    font-size: 1.4rem;
    margin-top: 0;
    margin-bottom: 60px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  }

.login--form input {
    background: transparent;
    width: 300px;
    padding: 1em;
    margin-bottom: 2em;
    border: none;
    border-left: 1px solid rgba(255,255,255,0.3);
    border-top: 1px solid rgba(255,255,255,0.3);
    border-radius: 5000px;
    backdrop-filter: blur(5px);
    box-shadow: 4px 4px 60px rgba(0,0,0,0.2);
    color: rgb(151, 151, 151);
    font-family: Montserrat, sans-serif;
    font-weight: 500;
    transition: all 0.2s ease-in-out;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
    
    
    
  }

.login--form input:hover {
      background: rgba(255,255,255,0.1);
      box-shadow: 4px 4px 60px 8px rgba(0,0,0,0.2);
    }

    
    
      
.login--form input[type="email"]:focus {
        background: rgba(255,255,255,0.1);
        box-shadow: 4px 4px 60px 8px rgba(0,0,0,0.2);
    }
    

.login--form input[type="password"]:focus {
        background: rgba(255,255,255,0.1);
        box-shadow: 4px 4px 60px 8px rgba(0,0,0,0.2);
    }

.login--form input[type="button"] {
      margin-top: 10px;
      width: 150px;
      font-size: 1.1rem;
      
}

.login--form input[type="button"]:hover {
        cursor: pointer;
      }
      
.login--form input[type="button"]:active {
        background: rgba(255,255,255,0.2);
      }


</style>