<template>
  <div class="body-header">
    <div class="web-title">
      <h4 class="invoice-name text-white">Invoice App</h4>
      <p class="text-white">This is great website</p>
    </div>
    <div class="option-buttons">
      <div class="option-click" :class="listActive ? 'active' : ''">
      <a href="#" class="text-white dropdown-link" @click.prevent="listActive=!listActive">Paid Statuse <i class='bx bx-chevron-down'></i></a>
      <ul class="links-list">
        <li class="list-item" @click.prevent="activeButton='all'" :class="activeButton=='all' ? 'active' : ''">
         All
        </li>
        <li class="list-item" @click.prevent="activeButton='payed'" :class="activeButton=='payed' ? 'active' : ''">
          Payed
        </li>
        <li class="list-item"  @click.prevent="activeButton='onPayed'" :class="activeButton=='onPayed' ? 'active' : ''">
         On Payed
        </li>
        <li class="list-item"  @click.prevent="activeButton='notPayed'" :class="activeButton=='notPayed' ? 'active' : ''">
         Not Payed
        </li>
      </ul>
</div>
<button class="add-inoice purple text-white" @click.prevent="addToggle">Add Invoice</button>
    </div>
  </div>
  <div class="cards-container">
    <MainCard v-for="invoice in ShowCards" :key="invoice" :list="invoice"></MainCard>
  </div>
</template>

<script>
import store from '@/store';
import { mapMutations } from 'vuex'
import MainCard from '../components/MainCard.vue'
export default {
    data() {
        return {
            activeButton: "all",
            listActive: false
        };
    },
    methods: {
        ...mapMutations(["addToggle"])
    },
    computed:{
      
      ShowCards(){
        let invoice= store.state.invoices
       if(this.activeButton=='all'){
        return invoice
       }else if (this.activeButton=='payed'){
        return invoice.filter(item=> item.payingSistem=='payed')
       }else if (this.activeButton=='onPayed'){
        return invoice.filter(item=> item.payingSistem=='paying')

       }else{
        return invoice.filter(item=> item.payingSistem=='notPayed')

       }
      }
    },
    components: { MainCard }
}
</script>

<style>
.body-header{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.option-buttons{
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 1rem;
}
.dropdown-link{
  font-size: 15px;
}
.add-inoice{
  font-size: 15px;
  cursor: pointer;
  outline: none;
  border: 0;
  padding: 5px 10px;
  border-radius: 40px;
}
.option-click{
  position: relative;
}
.links-list{
  position: absolute;
  bottom: -2px;
  transform: translateY(100%);
  background-color: #202338;
  width: 100%;
  display: none;
  padding: 0.5rem;
  border-radius: 10px;
}
.list-item{
color: white;
transition: all 0.3s ease;
  border-radius: 5px;
  cursor: pointer;
  font-size: 15px;
}
.list-item:hover{
  color: rgba(255, 255, 255, 0.767);
}
.item.active{
  color: rgba(255, 255, 255, 0.767);
}
.list-item:not(:first-child){
margin-top: 0.5rem;

}
.option-click.active .links-list{
  display: block;
}
























</style>
