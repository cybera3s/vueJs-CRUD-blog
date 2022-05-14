<template>
  <div class="Logout">
    <h1>This is an Logout page</h1>
    <button @click="doLogout" class="btn btn-danger">Logout</button>
  </div>
</template>


<script>
  export default{
    name:'Logout',
    methods: {
      doLogout(){
        this.$store.commit("logout")
      }
    }
  }
</script>