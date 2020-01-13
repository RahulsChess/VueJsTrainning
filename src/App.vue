
<template>
  <div id="app">
      <Header></Header>
    <router-view/>

     <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'App',
  components:{
    Header
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

}
.footer {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 114px;
}

</style>

