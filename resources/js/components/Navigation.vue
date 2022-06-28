<template>

    <div class="menu">
        <ul>
            <li>
                <router-link id="a__content" :to="{name: 'home' }">Home</router-link>
            </li>
            <li>
                <router-link id="a__content" v-if="!isLogged" :to="{name: 'login' }">Login</router-link>
            </li>
            <li>
                <a id="a__content" v-if="isLogged" @click.prevent="logout" href>Wyloguj</a>
            </li>
            <li>
                <router-link id="a__content" v-if="isLogged" :to="{name: 'dashboard' }">Dashboard</router-link>
            </li>
        </ul>

    </div>
</template>

<script>
    export default{
        inject: ["auth", "eventBus"],
        data() {
            return { isLogged: null};
        },
        created() {
            this.isLogged = localStorage.getItem("isLogged");
            this.eventBus.$on("isLogged", value => {
                this.isLogged = value;
            });
        },
        beforeDestroy() {
            this.eventBus.$off("isLogged");
        },
        methods: {
            async logout() {
                try {
                    await this.auth.logout();
                } 
                catch (err) {}
            }
        }
    };
</script>
<style>

body{
  font-family:Helvetica Neue, Helvetica, sans-serif;
  background: #82a8ee;
}

.menu{
    margin-top: 50px;
    
  text-align:center;
}

.menu ul{
  display:inline-block;
  margin:0;
  padding:0;
  list-style:none;
  transform:skew(-25deg);
}

.menu ul li{
  background:#fff;
  float:left;
  border-right:1px solid #eee;
  box-shadow:0 1px 1px rgba(0,0,0,0.1);
  text-transform:uppercase;
  color:#555;
  font-weight:bolder;
  transition:all 0.3s linear;
}

.menu ul li:first-child{
    border-radius:7px 0 0 7px;
  }
  
.menu ul li:last-child{
    border-right:none;
    border-radius:0 7px 7px 0;
  }
  
.menu ul li:hover{
    background:#eee;
    color:red;
  }

.menu ul li #a__content{
    display:block;
    padding:1em 2em;
    color:inherit;
    text-decoration:none;
    transform:skew(25deg);
  }
</style>
