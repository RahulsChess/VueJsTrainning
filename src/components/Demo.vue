<template>
  <div>
    <h1>Testing Module</h1>





<!-- Button trigger modal -->

<!-- Modal -->


  <TodoList>

<h1 slot="manoj">Manoj is Great</h1>
  </TodoList>
  </div>
</template>

<script>
import TodoList from './TodoList'
export default {
data() {
  return {
    message:"I AM Updated"
  }
},
components:{
  TodoList
},
// beforeCreate(){
//   alert("Before Create Call ")
// },
// created(){
//   alert("Created Method Called")
// },
// beforeMount(){
//   alert("After Render The Component BeforeMount ")
// },
// mounted(){
//   alert("After Replacing call Mounted method")
// },
// beforeUpdate(){
//   alert("before  update value on ON CLICK Called BeforeUpdate")
// },
// updated(){
//   alert("After update value on ON CLICK Called Updated")
// }
}
</script>

<style>

</style>
