<template>
  <div class="card">
    <div class="card-title-box">
        <router-link class="card-title text-white" :to="`/invoice/${list.id}`">
            {{list.name}}
        </router-link>
        <smal class="text-white title-small">{{list.email}}</smal>
    </div>
    <div class="right-side">
        <p class="money-side" :class="list.payingSistem=='payed' ? 'green-theme' : list.payingSistem=='paying' ? 'orange-theme' : 'red-theme'">
           {{list.total}}
        </p>
        <a href="#" class="close-tab" @click.prevent="deleteItem(list.id)">
            <i class='bx bx-x'></i>
        </a>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
props:['list'],
methods:{
    ...mapMutations(['deleteItem'])
}
}
</script>

<style>
.card{
    margin-top: 1rem;
    background-color: #22253b;
    border-radius: 10px;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.title-small{
    font-size: 12px;
    font-weight: 300;
}
.money-side{
  
    padding: 0.3rem;
    font-size: 13px;
    border-radius: 5px;
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
.close-tab{
    font-size: 18px;
    color: #2f3249;
}
.right-side{
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 1rem;
}
.card-title{
    display: block;
    
}
</style>