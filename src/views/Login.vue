<template>
  <div class="Login">
    <h1>This is an Login page</h1>
    <button @click="doLogin" class="btn btn-success">Login</button>
  </div>
  {{$store}}

</template>

<script>
  export default{
    name:'Login',
    methods: {
      doLogin(){
        this.$store.commit("login", "abc123")
        this.$router.push("profile")
      }
    }
  }
</script>