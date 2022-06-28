<template>
    <form @submit.prevent="$emit('submit', form)" class="form--center">
        <div class="edit--form">
            <p>Edytuj studenta</p>
            <div>
                <input class="form--input" type="text" v-model="form.first_name" placeholder="Imię" />
                
            </div>
            <div>
                <input class="form--input" type="text" v-model="form.last_name" placeholder="Nazwisko" />
                
            </div>
            <div>
                <input class="form--input" type="text" v-model="form.index" placeholder="Numer indeksu np. s123" />
                
            </div>
            <div>
                <input class="form--input" type="text" v-model="form.email" placeholder="Email" />
                
            </div>
            <div>
                <input class="form--input" type="number" step="1" v-model="form.age" placeholder="Wiek" />
                
            </div>
            <div class="checkbox">
                <input id="checkbox" type="checkbox" v-model="form.paid"/>
                <label id="checkbox--label" for="checkbox"></label>
                <label id="checkbox--label--text">Student uiścił opłatę</label>
                
            </div>
            <div>
                <textarea id="textarea" v-model="form.description" cols="50" rows="5" placeholder="Opis"></textarea>
                
            </div>

            <button type="submit">{{ student ? 'Aktualizuj' : 'Dodaj' }}</button>
        </div>
    </form>
</template>
<script>

    export default {
        props: {
            student: { type: Object },
            students: { type: Array }
        },
        data() {
            return {
                form: {
                    first_name: this.student?.first_name || "",
                    last_name: this.student?.last_name || "",
                    index: this.student?.index || "",
                    email: this.student?.email || "",
                    age: this.student?.age || 18,
                    description: this.student?.description || "",
                    paid: this.student?.paid || false
                }
            };
        },
    };
</script>
<style>
body {
  height: 100vh;
  font-family: 'Montserrat', sans-serif;
}

.form--center{
    display: flex;
    justify-content: center;
}
.edit--form {
  background: rgba(255,255,255,0.5);
  padding: 3em;
  height: 800px;
  width: 500px;
  border-radius: 20px;
  border-left: 1px solid rgba(255,255,255,0.3);
  border-top: 1px solid rgba(255,255,255,0.3);
  backdrop-filter: blur(10px);
  box-shadow: 20px 20px 40px -6px rgba(0,0,0,0.2);
  text-align: center;
  
  margin-top: 20px;
  margin-bottom: 100px;
  position: relative;
  transition: all 0.2s ease-in-out;
}

.edit--form p {
    font-weight: 500;
    color: #fff;
    opacity: 1;
    font-size: 1.4rem;
    margin-top: 0;
    margin-bottom: 30px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  }

.form--input {
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

.form--input:hover {
      background: rgba(50, 146, 255, 0.11);
      box-shadow: 4px 4px 60px 8px rgba(0,0,0,0.2);
    }

.checkbox{
    display:flex;
    margin-bottom: 10px;
}

#checkbox{
    display: none;
}

#checkbox--label {
    margin-left: 60px;
    cursor: pointer;
	width: 28px; 
    height: 28px;
	border: 2px solid #ffffff;
	-webkit-border-radius: 50%; 
    -moz-border-radius: 50%; border-radius: 50%;
	-webkit-transition: 0.2s ease; 
    -moz-transition: 0.2s ease; transition: 0.2s ease;
	box-sizing:border-box; 
    -moz-box-sizing:border-box;
}
.checkbox input[type="checkbox"]:checked ~ #checkbox--label {
     border: 8px solid #00ff1571; 
}

#checkbox--label--text{
    font-weight: 500;
    color: #fff;
    font-size: 1.3rem;
    margin-left: 30px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
}

#textarea{
    width: 300px;
    padding: 10px;
    line-height: 1.5;
    border-radius: 20px;
    border: 1px solid #ccc;
    box-shadow: 1px 1px 1px #999;
    background-color: rgba(255,255,255,0.5);
}

.edit--form button{
    margin-top: 10px;
  align-items: center;
  appearance: none;
  background-color: rgba(255,255,255,0.5);
  border-radius: 24px;
  border-style: none;
  box-shadow: rgba(0, 0, 0, .2) 0 3px 5px -1px,rgba(0, 0, 0, .14) 0 6px 10px 0,rgba(0, 0, 0, .12) 0 1px 18px 0;
  box-sizing: border-box;
  color: #3c4043;
  cursor: pointer;
  display: inline-flex;
  fill: currentcolor;
  font-family: "Google Sans",Roboto,Arial,sans-serif;
  font-size: 14px;
  font-weight: 500;
  height: 48px;
  justify-content: center;
  letter-spacing: .25px;
  line-height: normal;
  max-width: 100%;
  overflow: visible;
  padding: 2px 24px;
  position: relative;
  text-align: center;
  text-transform: none;
  transition: box-shadow 280ms cubic-bezier(.4, 0, .2, 1),opacity 15ms linear 30ms,transform 270ms cubic-bezier(0, 0, .2, 1) 0ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: auto;
  will-change: transform,opacity;
  z-index: 0;
}

.edit--form button:hover {
  background: #F6F9FE;
  color: #174ea6;
}


</style>