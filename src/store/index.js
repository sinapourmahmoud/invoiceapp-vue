import { createStore } from 'vuex'

export default createStore({
  state: {
    navbarToggle:false,
    editToggle:false,
    invoices:JSON.parse(localStorage.getItem('invoiceList')) || []
  },
  getters: {
  },
  mutations: {
    addToggle(state){
      state.navbarToggle=!state.navbarToggle;
      
    },
    addInvoice(state,obj){
      let id;
      if(state.invoices.length){
        id=state.invoices[state.invoices.length-1].id+1
      }else{
        id=1
      }
      obj.id=id
      state.invoices.push(obj)
      localStorage.setItem('invoiceList',JSON.stringify(state.invoices))
    },
    deleteItem(state,id){
      state.invoices=state.invoices.filter(item=> item.id !=id)
      localStorage.setItem('invoiceList',JSON.stringify(state.invoices))

    },
    changePayingSistem(state,id){
      console.log('hi');
      state.invoices=state.invoices.map(item=>{
        if(item.id==id){
          return{
            ...item,
            payingSistem:'payed'
          }
        }else{
          return item
        }
      })
      localStorage.setItem('invoiceList',JSON.stringify(state.invoices))
    },
    changeEditToggle(state){
      state.editToggle=!state.editToggle
    },
    addEditMode(state,id){
      state.invoices=state.invoices.map(item=>{
        if(item.id==id){
          return{
            ...item,
            editMode:true,
          }
        }else{
          return item
        }
      })
    },
    clearEditMode(state,id){
      state.invoices=state.invoices.map(item=>{
        if(item.id==id){
          return{
            ...item,
            editMode:false
          }
        }else{
          return item
        }
      })
    },
    saveChanges(state,{id,name,fee,num,payingSistem,editMode,total,email}){
    state.invoices=state.invoices.map(item=>{
      if(item.id==id){
        return{
          ...item,
          name,
          fee,
          num,
          payingSistem,
          editMode,
          total,
          email
        }
      }else{
        return item
      }
    })
    }

  },
  actions: {
  },
  modules: {
  }
})
