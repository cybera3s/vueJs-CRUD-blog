<template>
  <div class="Login">

    <div class="row">
      <div class="col-11 col-sm-10 col-md-8 col-lg-6 col-xl-4 mx-auto border shadow rounded p-4 mt-3">
          <h1  class="text-center text-shadow">Login page</h1>
          <hr>
          <form @submit.prevent="doLogin">

              <div class="mb-3">
                <label for="username" class="form-label">Username</label>
                <input type="text" class="form-control" id="username" v-model="username">
              </div>

              <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" v-model="password">
              </div>

              <button type="submit" class="btn btn-primary w-100">Login</button>

          </form>
      </div>
    </div>
    

  </div>

</template>

<script>
  export default{
    name:'Login',
    data(){
        return {
          username: '',
          password: '',
        }
    },
    methods: {
      doLogin(){
        console.log(this.username)
        console.log(this.password)
        // this.$store.commit("login", "abc123")
        // this.$router.push("profile")
      }
    }
  }
</script>