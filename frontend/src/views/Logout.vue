<template>
  <div class="Logout">
    <h1>This is an Logout page</h1>
    <button @click="doLogout" class="btn btn-danger">Logout</button>
  </div>
</template>


<script>
    import axios from 'axios'

  export default{
    name:'Logout',
    methods: {
      doLogout(){
        
        // 
        // axios
        //     .get('/api/auth/token/logout/')
        //     .then(response => console.log(response))
        //     .catch(error => console.log(error))

 
            this.$store.commit("logout")
            this.$router.push("login")
      }
    }
  }
</script>