<template>
  <add-invoice-form></add-invoice-form>
<div class="container">
  <router-view/></div>
</template>
<script>

import AddInvoiceForm from './components/AddInvoiceForm.vue';
export default {
    data() {
        return {};
    },
    components: { AddInvoiceForm }
}
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap");

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style-type: none;
  font-family: "Poppins", sans-serif;
  text-decoration: none;
}
body{
  background-color: #141625;
}
.container{
  max-width:600px;
  height: 2rem;
margin-top: 3rem;
  margin-inline: auto;
}
.dark-purple {
  background-color: #252945;
}

.red {
  background-color: #ec5757;
}

.purple {
  background-color: #7c5dfa;
}

.green {
  background-color: #33d69f;
}

.orange {
  background-color: #ff8f00;
}
.text-white{
  color: #fff;
}


.flex {
  display: flex;
}

.flex-column {
  flex-direction: column;
}
</style>
