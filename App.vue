<template>
  <div id="app">
    <div class="alert alert-warning" role="alert">
      <img src="./assets/kim.png">
      <h1>{{ msg }}</h1>
    </div> 
      <section1></section1> </br>
      <section2></section2> </br>
      <section3></section3>

  </div>
</template>

<script>
  //import the newly created component
  
  import section1 from './component/section1.vue'
  import section2 from './component/section2.vue'
  import section3 from './component/section3.vue'


export default {
  components: {
    section1,
    section2,
    section3
  },
  name: 'app',
  data () {
    return {
      msg: ' '
  }
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

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  font-size: 1.5em;
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
