<template>
    <div class="tbl-content">
        <table cellpadding="0" cellspacing="0" border="0">
            <tr>
                <th>Imię</th>
                <th>Nazwisko</th>
                <th>Nr indeksu</th>
                <th>E-mail</th>
                <th>Wiek</th>
                <th>Płatność</th>
                <th colspan="2"><button class="list--button" id="list--button" v-on:click="$emit('create')">Dodaj</button></th>
            </tr>
            <tr v-for="st in students" :key="st.id" :class="{'mark': st.id == selected}">
                <td>{{st.first_name}}</td>
                <td>{{st.last_name}}</td>
                <td>{{st.index}}</td>
                <td>{{st.email}}</td>
                <td>{{st.age}}</td>
                <td>{{st.paid? '✔️':'❌'}}</td>
                <td><button class="list--button" v-on:click="$emit('edit', st)">Edytuj</button></td>
                <td><button class="list--button" v-on:click="$emit('delete', st)">Usuń</button></td>
            </tr>
        </table>
    </div>
</template>
<script>
    export default {
        props: ["students", "student"],
        computed:{
            selected(){return this.student?.id}
        }
    };
</script>
<style scoped>

    
h1{
  font-size: 30px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 500;
  text-align: center;
  margin-bottom: 15px;
}
table{
  width:100%;
  table-layout: fixed;
}
.tbl-header{
  background-color: rgba(255,255,255,0.3);
 }
.tbl-content{
  min-height: 500px;
  overflow-x: auto;
  margin-top: 10px;
  border: 1px solid rgba(255,255,255,0.3);
}
th{
  padding: 20px 15px;
  text-align: left;
  font-weight: 500;
  font-size: 15px;
  color: #fff;
  text-transform: uppercase;
}
td{
  padding: 15px;
  text-align: left;
  vertical-align:middle;
  font-weight: 300;
  font-size: 15px;
  color: #fff;
  border-bottom: solid 1px rgba(255,255,255,0.1);
}

.mark { 
  background-color: rgba(0, 0, 0, 0.4);
}

.list--button{
  align-items: center;
  appearance: none;
  background-color: #82a8ee;
  border: 1px solid #ffffff;
  border-radius: .375em;
  box-shadow: none;
  box-sizing: border-box;
  color: white;
  cursor: pointer;
  display: inline-flex;
  font-family: BlinkMacSystemFont,-apple-system,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 1rem;
  height: 2.5em;
  justify-content: center;
  line-height: 1.5;
  padding: calc(.5em - 1px) 1em;
  position: relative;
  text-align: center;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: top;
  white-space: nowrap;
}

.list--button:hover {
  border-color: #b5b5b5;
}


#list--button{
    background-color: rgba(0, 119, 255, 0.26);
}


</style>
