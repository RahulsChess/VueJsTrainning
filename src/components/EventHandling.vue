<template>
<div>
  <div class="container row" >

<div class="col-md-4">



</div>
<div class="col-md-4">
      <div class="row">

        <textarea disabled style="font-size:30px; color:red" class="bg-light" v-if="(sec=='' && total== 0)" name="name" v-model="first" rows="2" cols="20" ></textarea>
          <textarea disabled style="font-size:30px; color:red" class="bg-light" v-if="(first!='' && sec!= '' && total== 0)" name="name" v-model="sec" rows="2" cols="20" ></textarea>
                 <textarea disabled style="font-size:30px; color:red" class="bg-light" v-if="(total!=0)"  name="name" v-model="total" rows="2" cols="20"></textarea>
      </div>
  <div class="row">
<button type="button" @click="setFirst" class="btn-lg" value="1">1</button>
<button type="button"  @click="setFirst" class="btn-lg" value="2">2</button>
<button type="button"  @click="setFirst" class="btn-lg" value="3">3</button>

<button type="button"  @click="sub" class="btn-lg" value="sub">-</button>

    </div>

  <div class="row">
    <button type="button"  @click="setFirst"  class="btn-lg" value="4">4</button>
<button type="button"  @click="setFirst" class="btn-lg" value="5">5</button>
<button type="button"  @click="setFirst" class="btn-lg" value="6">6</button>

<button type="button"  @click="sub" class="btn-lg" value="add" >+</button>

    </div>

      <div class="row">
        <button type="button"  @click="setFirst" class="btn-lg" value="7">7</button>
<button type="button"  @click="setFirst" class="btn-lg" value="8">8</button>
<button type="button"  @click="setFirst" class="btn-lg" value="9">9</button>
<button type="button" @click="sub" class="btn-lg" value="devide">/</button>

    </div>
    <div class="row">
      <button type="button"  @click="setFirst" class="btn-lg" value="0">0</button>
<button type="button" @click="sub" class="btn-lg" value="multi">*</button>
<button type="button"  @click="clear" class="btn-lg" value="clear">C</button>
 <button type="button"  @click="equal"  class="btn-lg">=</button>
    </div>
  </div>
<div class="col-md-4">



</div>

          <!-- <div class="row">



<button type="button" class="btn-lg">X</button>
    </div> -->

  </div>
  </div>
</template>

<script>
export default {
data() {
  return {
    firstArray:[],
        secArray:[],
    sec:'',
    first:'',
    total:0,
    flag:0,


    total:'',
    oper:''
  }
},
methods: {
  clear:function(e){

    if(e.target.value=='clear'){
    this.total='';
    this.firstArray=[];
    this.secArray=[];
      this.first='';
        this.sec='';

  }
  },

setFirst:function(e){
if(this.flag==0 )
{


  if(e.target.value=='.')
  {
      this.firstArray.push(.1);
  }
  else{
  this.firstArray.push(e.target.value);

  }
  this.first=this.firstArray.join();
  this.first=parseInt(this.first.replace(/,/g , ""));


}


if(this.flag==1)
{

    if(this.total!=0 || this.total!='' )
    {
      this.first=this.total;
      this.secArray=[];
    }
this.secArray.push(e.target.value);

  this.sec=this.secArray.join();
  this.sec=parseInt(this.sec.replace(/,/g , ""));

}



},
sub:function(e){
  if((e.target.value=="sub" || e.target.value=="add" || e.target.value=="devide" || e.target.value=="multi") && this.firstArray.length !=0)
  {
    if(this.total!=0 || this.total!='' )
    {
      this.first=this.total;
    }
    this.flag=1;
  }
  else{
    alert("please enter values");
     this.flag=0;
  }
this.oper=e.target.value

},









equal:function(){

  this.flag=0;
  if(this.total!=0 || this.total!='' )
    {
      this.first=this.total;
        this.flag=1;
    }

  if(this.oper=='sub'){

    this.total=this.substract(this.first,this.sec);
  }
   if(this.oper=='add'){
    this.total=this.addition(this.first,this.sec);
  }
    if(this.oper=='devide'){
    this.total=this.division(this.first,this.sec);
  }
   if(this.oper=='multi'){
    this.total=this.multiply(this.first,this.sec);
  }




},

substract:function(first,sec){
return first-sec;

},
division:function(first,sec){
 return (first / sec);
},
addition:function(first,sec){
 return first + sec;
},
multiply:function(first,sec){
 return first * sec;
}


}

}
</script>

<style scoped>
button{
  padding:20px;
  margin:10px;
}
</style>
