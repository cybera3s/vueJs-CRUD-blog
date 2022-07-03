<template>
  <div class="Login">

    <div class="row">
      <div class="col-11 col-sm-10 col-md-8 col-lg-6 col-xl-4 mx-auto border shadow rounded p-4 mt-3">
          <h1  class="text-center text-shadow fw-bold text-primary" style="font-family: Georgia, serif;">Login</h1>
          <hr>
          <form @submit.prevent="doLogin">

              <div class="mb-3">
                <label for="username" class="form-label">Username</label>
                <input 
                    type="text" 
                    class="form-control" id="username" 
                    v-model="username"
                    :class="{
                      'is-invalid': usernameE === true,
                      'is-valid': usernameE === false
                    }"
                    placeholder="username here"
                >
                    <div class="invalid-feedback" v-if="usernameE">
                      {{usernameEM}}
                    </div>
              </div>

              <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input 
                type="password" 
                class="form-control" id="password" 
                v-model="password"
                :class="{
                  'is-invalid': passwordE === true,
                  'is-valid': passwordE === false
                }"
                placeholder="password here"
                >
                 <div class="invalid-feedback" v-if="passwordE">
                      {{passwordEM}}
                    </div>
              </div>

              <button type="submit" class="btn btn-primary w-100 fw-bold">Login</button>

          </form>
      </div>
    </div>
    

  </div>

</template>

<script>
  import axios from 'axios'
  export default{
    name:'Login',
    data(){
        return {
          username: '',
          password: '',
          usernameE: null,
          passwordE: null,
          usernameEM: null,
          passwordEM: null,
        }
    },
    methods: {
      doLogin(){
        let access = true

      // username validation
        if (this.username.length < 4){
          this.usernameE = true
          access = false
          if (this.username.length == 0){
            this.usernameEM = "Username required!"

          } else {
              this.usernameEM = "Username must be at least 4 characters"            
          }
        } else {
          this.usernameE = false
          this.usernameEM = ''
        }

      // password validation
        if (this.password.length < 8){
          this.passwordE = true
          access = false
          if (this.password.length == 0){
            this.passwordEM = "Password required!"

          } else {
              this.passwordEM = "Password must be at least 8 characters"            
          }
        } else {
          this.passwordE = false
          this.passwordEM = ''
        }

        if (access){
            axios
              .post('/api/auth/token/login/', {"username": this.username, "password": this.password})
              .then(response =>  {
                    this.$store.commit("login", response.data.auth_token)
                    this.$router.push("profile")

              })
              .catch(error => {
                  console.log(error)
                  this.usernameEM = error.response.data.non_field_errors.join(" ")
                  this.passwordE = true
                  this.usernameE = true
              })

            
        }
        
      }
    }
  }
</script>