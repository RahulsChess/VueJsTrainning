<template>
<div>
<div class="row" id="content">
  <div class="col-md-6">
    <h4 class="jumbotron"><span >Name : </span>{{name}}<img src="@/images/shubham.jpeg" class="image"></h4>
   <h4 class="jumbotron"><span >Email : </span>{{email}}</h4>
      <h4 class="jumbotron"><span >Description : </span>{{desc}}</h4>
  </div>
    <div class="col-md-6">
      <h1>Shubham youtube Channel</h1>
<iframe width="560" height="315" src="https://www.youtube.com/embed/DfxHl-1pCGw" ></iframe>
    </div>
  </div>
</div>
</template>

<script>
export default {
data() {
  return {
    desc:"Shubham Is  Developer in Neosoft",

    isActive:true,
    youtube:"https://www.youtube.com/embed?v=JO0-CUV0Mfg",
    email:"Shubham@gmail.com",
    name:"Shubham Ingole"

  }
},
}
</script>

<style scoped>
.image{
  height:100px;
  width:100px;
}


</style>
