<template>
  <div class="main-box " :class="navbarToggle ? 'navbar-active' : ''">
<form>
    <div class="flex  flex-column tracker-input">
    <label for="name" class="invoice-label">Invoice Title</label>
    <input type="text" class="invoice-input" id="name" required v-model="name">
    </div>
    <div class="flex  flex-column tracker-input">
    <label  class="invoice-label" for="email">Email</label>
    <input type="text" class="invoice-input" id="email" required v-model="email">
    </div>

    <div class="flex  flex-column tracker-input">
    <label class="invoice-label" for="Fee">Fee</label>
    <input type="number" class="invoice-input" id="Fee" required v-model="fee">
    </div>
    <div class="flex  flex-column tracker-input">
    <label  class="invoice-label" for="Num">Num</label>
    <input type="number" class="invoice-input" id="Num" required v-model="num">
    </div>
    <div class="flex  flex-column tracker-input">
    <label  class="invoice-label" for="total">Total</label>
    <input disabled type="number" class="invoice-input" id="total" v-model="total">
    </div>
    <div class="flex  flex-column tracker-input">
    <label  class="invoice-label" for="sistem">Paying Sistem</label>
    <select  type="number" class="invoice-input" id="sistem" v-model="payingSistem">
        <option value="notPayed">notPayed</option>
        <option value="paying">Paying</option>
        <option value="payed">payed</option>
    </select>
    </div>

        <button class="btn-part green  text-white" @click.prevent="confirmSistem()">Payed</button>

</form>
  </div>
</template>

<script>
import {  mapState } from 'vuex'
import store from '@/store'
export default {
    data(){
        return{
            name:'',
            email:'',
            payingSistem:'',
            total:parseInt(this.fee)*parseInt(this.num),
            fee:0,
            num:0,

        }
    },
methods:{
    confirmSistem(){
        store.commit('addInvoice',{name:this.name,email:this.email,payingSistem:this.payingSistem,total:this.total,fee:this.fee,num:this.num,editMode:false})
        store.commit('addToggle')
   this.name=''
   this.email=''
        this.payingSistem=''
        this.total=''
        this.fee=''
        this.num=''
    }
},
computed:{
    ...mapState(['navbarToggle'])
},
watch:{
    fee(newVal){
        this.total=newVal*this.num
    },
    num(newVal){
        this.total=newVal*this.fee
    },
    payingSistem(newval){
        console.log(newval);
    }
}
}
</script>

<style>
.main-box{
    width: 30%;
    height: 100vh;
    position: absolute;
    left: -100%;
    top: 0;
    transition: all 0.3s ease;
    z-index: 20;
  background-color: #1a1d2e;
  padding: 2.5rem;

}
.main-box.navbar-active{
    left: 0;
}
.invoice-input{
    background-color: #2b3046;
    border: 0;
    outline: none;
    padding: 0.5rem;
    height: 2rem;
    color: white;
    border-radius: 5px;
}
.invoice-label{
    font-size: 14px;
    color: white;
}
.tracker-input{
    margin-top: 1rem;
}

.btn-part{
    cursor: pointer;
    outline: none;
    border: 0;
    border-radius: 40px;
    padding: 0.5rem;
    margin-top: 1rem;
}
</style>