<template>
  <div>
<!--Main Navigation-->

<nav class="navbar navbar-expand-lg fixed-top navbar-light  bg-info">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
 <router-link to="/"> <a class="navbar-brand" href="#">Rahul Sonawane</a></router-link>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
      <router-link to="/index"><a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a></router-link>
      </li>

    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" @keyup="onSubmit">

    </form>
    <button type="button" class="btn btn-light" data-toggle="modal" data-target="#login">
Login
</button>
<button type="button" class="btn btn-light" data-toggle="modal" data-target="#register">
Registration
</button>
  </div>
</nav>

<!--Main Navigation-->
<div class="modal fade" id="login" tabindex="-1" role="dialog" aria-labelledby="loginLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="loginLabel">Login</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">



























                <form role="login" @submit="onLoginSubmit" method="POST" action="#">
                    <input type="hidden" name="_token" value="">

                      <p v-if="errors.length" class="text-danger">
    <b>Please correct the following error(s):</b>
    <ul>
      <li v-for="(error,key) in errors" :key="key">{{ error }}</li>
    </ul>
  </p>
                    <div class="form-group">
                        <label class="control-label">E-Mail Address</label>
                        <div>
                            <input type="email" class="form-control input-lg" v-model="loginEmail" name="loginEmail" id="loginEmail" value="">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label">Password</label>
                        <div>
                            <input type="password" class="form-control input-lg" v-model="loginPassword" name="loginPassword" id="loginPassword">
                        </div>
                    </div>
                    <div class="form-group">
                        <div>
                            <div class="checkbox">
                                <label>
                                    <input type="checkbox" name="remember"> Remember Me
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div>
                            <button type="submit" @click="checkLoginForm" class="btn btn-success">Login</button>

                            <a class="btn btn-link" href="">Forgot Your Password?</a>
                        </div>
                    </div>
                </form>

















      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

      </div>
    </div>
  </div>
</div>




<div class="modal fade" id="register" tabindex="-1" role="dialog" aria-labelledby="registerLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="registerLabel">Registration Form</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">



























<form role="register" ref="editModal"   id="app"
  @submit.prevent="checkForm"
  action="#"
  method="post">
    <p v-if="errors.length" class="text-danger">
    <b>Please correct the following error(s):</b>
    <ul>
      <li v-for="(error,key) in errors" :key="key">{{ error }}</li>
    </ul>
  </p>
                    <input type="hidden" name="_token" value="">
                    <div class="form-group">
                        <label class="control-label">Username</label>
                        <div>
                            <input type="text" class="form-control input-lg" name="username" v-model="registerUserName" value="">

                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label">E-Mail Address</label>
                        <div>
                            <input type="text" class="form-control input-lg" name="email" v-model="registerEmail" value="">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label">Password</label>
                        <div>
                            <input type="password" class="form-control input-lg" name="password" v-model="registerPassword">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label">Confirm Password</label>
                        <div>
                            <input type="password" class="form-control input-lg" name="confirmPassword" v-model="registerConfirmPassword">
                        </div>
                    </div>
                    <div class="form-group">
                        <div>
                            <button type="submit" @click.prevent="onSubmit"  class="btn btn-success">
                                Register
                            </button>
                        </div>
                    </div>
                </form>












      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

      </div>
    </div>
  </div>
</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      registerData:[],
      registerEmail:'',
      registerPassword:'',
    registerConfirmPassword:'',
    registerUserName:'',
    loginEmail:'',
    loginPassword:'',
    Email:'',
    Password:'',
  errors: [],
    name: null,
    email: null,
    movie: null
    }
  },
  methods:{
    checkLoginForm:function(){

      this.errors=[];
  if (!this.loginEmail ) {
        this.errors.push('Email required.');
      } else if (!this.validEmail(this.loginEmail) ) {
        this.errors.push('Valid email required.');
      }




       if (!this.loginPassword ) {
        this.errors.push('Password required.');
      } else if (!this.validPassword(this.loginPassword) ) {
        this.errors.push('Valid Password required.');
      }
    },

    onLoginSubmit:function(){
   console.log(this.loginEmail)
         console.log(this.loginPassword)
      this.checkLoginForm();
      if( localStorage.Email==this.loginEmail && localStorage.Password == this.loginPassword){


   return true;
      }
      else{

        console.log(localStorage)
          alert("your password or email is incorrect")
        window.event.preventDefault()
      }
      },

    onSubmit:function(){
this.checkForm();
 if ((this.errors.length == 0) && this.registerUserName!='' && this.registerEmail!='' && this.registerConfirmPassword!='' && this.registerPassword!='' ) {

// var person = [{
//     'userName': this.registerUserName,
//     'email': this.registerEmail,
//     'password':this.registerPassword

// }];
//     this.registerData.push(person);
// if(localStorage.getItem('registerData')){
// var data=localStorage.getItem('registerData');

// data=JSON.parse(data);
// console.log(data);
// this.registerData.push(data);
// }

// localStorage.setItem('registerData', JSON.stringify(this.registerData));

   localStorage.UserName = this.registerUserName;
     localStorage.Email = this.registerEmail;

          localStorage.confirmPassword = this.registerConfirmPassword;
                  localStorage.Password = this.registerPassword;

  alert("your registration is successfully")
  return true;


      }

      alert("Please Fill data Propely")
         window.event.preventDefault();

    },

     checkForm: function () {
      this.errors = [];

      if (!this.registerUserName) {
        this.errors.push("registerUserName required.");
      }
      if (!this.registerEmail ) {
        this.errors.push('Email required.');
      } else if (!this.validEmail(this.registerEmail) ) {
        this.errors.push('Valid email required.');
      }




       if (!this.registerPassword ) {
        this.errors.push('Password required.');
      } else if (!this.validPassword(this.registerPassword) ) {
        this.errors.push('Valid Password required.');
      }





       if (!this.registerConfirmPassword) {
        this.errors.push('Confirm Password required.');
      } else if (!this.validConfirmPassword(this.registerConfirmPassword)) {
        this.errors.push('Valid Confirm Password required.');
      }
            else if(this.registerConfirmPassword!==this.registerPassword)
{
  this.errors.push('Your Password does not match with confirm password.');

}




      if (!this.errors.length) {
        return true;
      }

      window.event.preventDefault();
    },
    validEmail: function (email) {

   var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
return re.test(email);
    },
    validPassword : function (password) {

   var re = /^[A-Za-z]\w{7,14}$/;
return re.test(password);

    },


  validConfirmPassword : function (confirmPassword) {

   var re = /^[A-Za-z]\w{7,14}$/;


return re.test(confirmPassword);
    },

  },
  watch:{
    username(username){

        this.registerUserName=username
    },
    email(email){
 this.registerEmail=email
    },
    password(password){
 this.registerPassword=password
    },
    confirmPassword(confirm)
    {
       this.registerConfirmPassword=confirm
    },
     loginEmail(email){

 this.loginEmail=email
    },
       loginPassword(password){

 this.loginPassword=password
    },

  },



}
</script>

<style scoped>
button{
  margin-left:20px;
}
</style>
