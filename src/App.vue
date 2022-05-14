<template>
  
  <navbar />
  <router-view class="container " />
</template>

<script>
  import Navbar from '@/components/Navbar.vue'

  export default {
    name: 'App',
    components: {
      Navbar,
    },
    watch :{
      $route(){
        this.$store.commit("onStart")
      }
    },
    mounted(){
      this.$store.commit("onStart")
    },
  }
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}



nav a {
  font-weight: bold;
  color: #2c3e50;
  margin-right: 10px;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: white!important;
}
</style>
