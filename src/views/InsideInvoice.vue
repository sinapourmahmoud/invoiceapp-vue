<template>
  <EditNavbar :list="reciveInvoice[0]"></EditNavbar>
 <div class="invoice-page-header">
  <div class="invoice-left">
    <h4 class="text-white">{{reciveInvoice[0].name}}</h4>
    <small  class="money-side" :class="reciveInvoice[0].payingSistem=='payed' ? 'green-theme' : reciveInvoice[0].payingSistem=='paying' ? 'orange-theme' : 'red-theme'">{{reciveInvoice[0].payingSistem}}</small>
  </div>
  <div class="invoice-right">
    <button class="pay-button" @click.once="changePayingSistem(reciveInvoice[0].id)" v-if="reciveInvoice[0].payingSistem!='payed'">pay</button>
    <button class="delete-Button text-white red" @click="deleteItem(reciveInvoice[0].id)">Delete</button>
    <button class="delete-Button text-white orange" @click="getEditMode(reciveInvoice[0].id)">Edit</button>
  </div>
 </div>
 <div class="invoice-page-body">
  <div class="info-container">
    <div class="info-item">
      <h4 class="text-white">Fee</h4>
      <small class="text-white">{{reciveInvoice[0].fee}}</small>
    </div>
    <div class="info-item">
      <h4 class="text-white">Total</h4>
      <small class="text-white">{{reciveInvoice[0].total}}</small>
    </div>
  
  </div>
 </div>
</template>

<script>
import EditNavbar from '@/components/EditNavbar.vue'
import store from '@/store'
export default {
  components:{
    EditNavbar
  },
computed:{
  reciveInvoice(){
   return store.state.invoices.filter(item=>item.id==this.$route.params.id)
   
}},
methods:{
  changePayingSistem(id){
    store.commit('changePayingSistem',id)
  },
  deleteItem(id){
    store.commit('deleteItem',id)
    this.$router.push('/')
  },
  getEditMode(id){
    store.commit('addEditMode',id)
    store.commit('changeEditToggle')
  }
},
}
</script>

<style>
.invoice-page-header{
  background-color: #22253b;
  border-radius: 10px;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.invoice-page-body{
  background-color: #22253b;
  border-radius: 10px;
  padding: 1rem;
margin-top: 1rem;
}
.money-side.green-theme{
  background-color: rgba(54, 88, 54, 0.582);
  color: #33d69f;
}
.money-side.orange-theme{
  background-color: #57432ac7;
  color: #ff8f00;
}
.money-side.red-theme{
  background-color: #683434ce;
  color: #ec5757;
}
.pay-button{
  cursor: pointer;
  padding: 0.2rem 0.5rem;
  border-radius: 40px;
  background-color: #ff8f00;
  outline: none;
  border: 0;
  font-size: 14px;
}
.delete-Button{
  cursor: pointer;
  padding: 0.2rem 0.5rem;
  border-radius: 40px;

  outline: none;
  border: 0;
  font-size: 14px;
}
.invoice-right{
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: end;
}
.info-container{
  display: flex;
  align-items: center;

}
.info-item{
  flex-basis: 33%;
}
</style>