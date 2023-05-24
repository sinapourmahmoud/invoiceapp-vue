<template>
    <div class="main-box " :class="editToggle ? 'navbar-active' : ''">
        <form>
            <div class="flex  flex-column tracker-input">
            <label for="name2" class="invoice-label">Invoice Title</label>
            <input type="text" class="invoice-input" id="name2" required v-model="name">
            </div>
            <div class="flex  flex-column tracker-input">
            <label  class="invoice-label" for="email2">Email</label>
            <input type="text" class="invoice-input" id="email2" required v-model="email">
            </div>
        
            <div class="flex  flex-column tracker-input">
            <label class="invoice-label" for="Fee2">Fee</label>
            <input type="number" class="invoice-input" id="Fee2" required v-model="fee">
            </div>
            <div class="flex  flex-column tracker-input">
            <label  class="invoice-label" for="Num2">Num</label>
            <input type="number" class="invoice-input" id="Num2" required v-model="num">
            </div>
            <div class="flex  flex-column tracker-input">
            <label  class="invoice-label" for="total2">Total</label>
            <input disabled type="number" class="invoice-input" id="total2" v-model="total">
            </div>
            <div class="flex  flex-column tracker-input">
            <label  class="invoice-label" for="sistem2">Paying Sistem</label>
            <select  type="number" class="invoice-input" id="sistem2" v-model="payingSistem">
                <option value="notPayed">notPayed</option>
                <option value="paying">Paying</option>
                <option value="payed">payed</option>
            </select>
            </div>
        
                <button class="btn-part green  text-white" @click.prevent="changeEditMode(list.id)">Submit</button>
        
        </form>
          </div>
</template>

<script>
import store from '@/store'
import { mapState } from 'vuex'
export default {
    props:['list'],
data(){
    return{
        name:'',
            email:'',
            payingSistem:'',
            total:parseInt(this.fee)*parseInt(this.num),
            fee:0,
            num:0,
    }
},created(){
    console.log(this.list);
    this.name=this.list.name;
    this.email=this.list.email;
    this.payingSistem=this.list.payingSistem;
    this.fee=this.list.fee;
    this.num=this.list.num;

},
watch:{
    num(newVal){
        this.total=parseInt(this.fee)*parseInt(newVal)
    },
    fee(newVal){
        this.total=parseInt(newVal)*parseInt(this.num)

    }
},
computed:{
    ...mapState(['editToggle']),
},
methods:{
    changeEditMode(id){
        store.commit('saveChanges',{id,name:this.name,email:this.email,payingSistem:this.payingSistem,total:this.total,fee:this.fee,num:this.num,editMode:false})
        store.commit('changeEditToggle')
         store.commit('clearEditMode',id)

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