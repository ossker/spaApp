<template>
    <div v-if="isError" class="modal">
        <div class="modal-content">
            <h3>Opps, coś poszło nie tak!</h3>
            <h6 class="wiadomosc">{{ message }}</h6>
            <div class="buttony">
                <button @click.prevent="hide" class="btnUkryj btn__content" >Ukryj</button>
                <button class="btnStronaGlowna"><a href="/" class="btn__content">Strona główna</a></button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    inject: ["eventBus"],
    created() {this.eventBus.$on("error", this.handleError);},
    beforeDestroy() {this.eventBus.$off("error");},
    data() {
        return {
            isError: false,
            message: ''
        };
    },
    methods: {
        hide() {this.isError = false;},
        handleError(err) {
            this.isError = true;
            if (err.response) 
            {
                this.message= `${err.response.statusText} - ${err.response.status}`;
            } 
            else 
            {
                this.message="HTTP Error!";
            }
            console.log(err);
        }
    },
    watch: {
        $route(to, from) {
            this.hide();
        }
    }
};

</script>
<style scoped>
.modal {
    display: block;
    background: rgba(100, 100, 100, 0.5);
	position: fixed;
	z-index: 5000;
	height: 100%;
	width: 100%;
	left: 0;
	top: 0;
}
.modal-content {
		max-width: 600px; 
		width: 70%; 
		position: fixed;
		transform: translate(-50%, -50%);
  		left: 50%;
	   top: 50%;
		background: #FFFFFF;
		padding: 30px;
		z-index: 5001;
		
		text-align: center;
		border: 5px solid #9AD3DE;
		border-radius: 10px;
		box-shadow: 0px 0px 15px 0px rgba(#000000, 0.4);
	}

.wiadomosc {
    font-size: 20px;
	text-align: center;
	color: #666666;
	margin: 30px 0 40px 0;
}

.buttony{
    align-items: center;
}
.btnUkryj, .btnStronaGlowna{
  outline:none;
  height: 40px;
  text-align: center;
  width: 130px;
  border-radius: 40px;
  background: #fff;
  border: 2px solid #9AD3DE;
  color: #9AD3DE;
  letter-spacing:1px;
  text-shadow:0;
  font-size:12px;
  font-weight:bold;
  
}
.btnUkryj{
    margin-right: 30px;
}

.btn__content{
    text-decoration: none;
    color: #5ba2b1;

}

</style>
