<template>
  <div class="row">
<div class="col-sm-6">
   <span id="dot" @click="hitImage" style="color:white"><img src="@/images/scary.jpeg" alt="Dot Click" width="100" height="100" class="img-rounded"></span>


    <div  @mouseover="moveFunction"  class="MouseEvent">


      </div>

</div>

  <div class="col-sm-6 catch">
        <h1 v-if="result > score " class="text-success">Highest Score:<span class="text-danger">{{result+1}}</span></h1>


          <h1>Catch me</h1>

           <h1>Score = {{score}}</h1>
           <h1 class="alert-danger"> CountDown:{{ countDown }}</h1>
           <button @click="countDownTimer" :disabled="isActive">Start</button>
      <ul v-if="showDiv" class="list-group" >
        <li class="list-group-item">Your Score Is  =<span class="text-danger">{{temp}}</span></li>
       <li v-if="result >= temp " class="list-group-item">Try Again  for better Score</li>
         <li v-if="temp >= result " class="list-group-item text-success">Your Winner </li>
      </ul>
      </div>




  </div>
</template>

<script>
export default {
data() {
  return {
    X:0,
    Y:0,
    dot:'',
    min:'',
    max:'',
    showX:'',
    showY:'',
    temp:0,
    score:0,
    result:33,
    flag:0,
      countDown : 30,
      isActive:false,
       showDiv:false
  }
},


methods: {
moveFunction:function(e){

if(this.flag==1){

 setTimeout(this.setXY(),500);

 setTimeout(this.placeDiv(this.showX,this.showY), 1000);
 }
else{
  return false;
}


},
setXY:function()
{
    this.showX=this.generateDot();
  this.showY=this.generateDot();
},

generateDot(){
this.min=100;
this.max=450;
 this.min = Math.ceil(this.min);
  this.max = Math.floor(this.max);
 return  Math.floor(Math.random() * (this.max - this.min)) + this.min;

},

 placeDiv:function(x_pos, y_pos){
 var d = document.getElementById('dot');
  d.style.position = "absolute";
  d.style.left = x_pos+'px';
  d.style.top = y_pos+'px';
 },
 hitImage:function(){

if(this.flag==1){
 setTimeout(this.setXY(),500);

 setTimeout(this.placeDiv(this.showX,this.showY), 1000);


this.score++;
}


 },

   countDownTimer:function(e) {

     if(this.countDown==0)
     {
 this.flag=0;
       alert("Time Out")
       this.countDown=30;
       this.isActive=false;
       this.showDiv=true;
       this.temp=this.score;
       this.score=0;
       return false

     }
                if(this.countDown >= 0) {
                if(this.result < this.score)
                  this.result=this.score;
                  this.flag=1;
                           this.isActive=true;
                             this.showDiv=false;

                    setTimeout(() => {
                        this.countDown -= 1
                        this.countDownTimer()
                    }, 1000)

                }
                else
                {

                  return false
                }
            }

}

}
</script>

<style scoped>
#dot
{
  position: absolute;
}
.MouseEvent{
height: 600px;
width: 550px;

 border-radius: 10px;
 background-color: black;
 color:white;
}
.catch{
  position: relative;
}
</style>





