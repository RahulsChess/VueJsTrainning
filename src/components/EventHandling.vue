<template>
  <div class="row">
<div class="col-md-6">
   <span id="dot"  @mouseover="moveFunction" @click="hitImage" style="color:white"><img src="@/images/scary.jpeg" alt="Dot Click" width="100" height="100" class="img-rounded"></span>


    <div  @mouseover="moveFunction"  class="MouseEvent">



      </div>

</div>

  <div class="col-md-6 catch">
          <h1>Catch me</h1>
           <h1>Score = {{score}}</h1>
           <h1 class="alert-danger"> CountDown:{{ countDown }}</h1>
           <button @click="countDownTimer">Start</button>

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
    score:0,
    countDown : 30

  }
},


methods: {
moveFunction:function(e){



 setTimeout(this.setXY(),500);

 setTimeout(this.placeDiv(this.showX,this.showY), 1000);

},
setXY:function()
{
    this.showX=this.generateDot();
  this.showY=this.generateDot();
},

generateDot(){
this.min=50;
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

this.score++;

 },

   countDownTimer:function(e) {
     if(this.countDown==0)
     {
       alert("Time Out")
       this.countDown=30;
       return false
     }
                if(this.countDown >= 0) {
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
width: 700px;

 border-radius: 10px;
 background-color: black;
 color:white;
}
.catch{
  position: relative;
}
</style>





