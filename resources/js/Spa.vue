<template>
    <div class="container--content">
        <error/>
        <navigation/>
        <router-view></router-view>

    </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import Error from "./components/Error.vue";
export default { 
    inject: ["auth"],
    components: {
        Navigation, Error
    },
    created() {
        axios.interceptors.response.use(
            (response) => {
                return response
            },
            (error) => {
                if (error.response.status === 401) 
                {
                    this.auth.reset();
                }
                return Promise.reject(error);
            }
        );
    }
};
</script>
<style>
.container--content{
    margin: 50px
}

</style>


