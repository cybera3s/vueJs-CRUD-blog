<template>
  <div class="Register">

    <div class="row">
      <div class="col-11 col-sm-10 col-md-8 col-lg-6 col-xl-4 mx-auto border shadow rounded p-4 mt-3">
          <h1  class="text-center text-shadow">Register page</h1>
          <hr>
          <form @submit.prevent="doRegister">

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
                    placeholder="Username here"
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
                  'is-valid': passwordE === true
                }"
                placeholder="Password here"
                >
                 <div class="invalid-feedback" v-if="passwordE">
                      {{passwordEM}}
                    </div>
              </div>

              <div class="mb-3">
                <label for="password2" class="form-label">Confirm Password</label>
                <input 
                type="password" 
                class="form-control" id="password2" 
                v-model="password2"
                :class="{
                  'is-invalid': password2E === true,
                  'is-valid': password2E === true
                }"
                placeholder="Confirm Password here"
                >
                 <div class="invalid-feedback" v-if="password2E">
                      {{password2EM}}
                    </div>
              </div>

              <button type="submit" class="btn btn-primary w-100">Register</button>

          </form>
      </div>
    </div>
    

  </div>

</template>

<script>
  import axios from 'axios'
  export default{
    name:'Register',
    data(){
        return {
          username: '',
          password: '',
          password2: '',

          usernameE: null,
          passwordE: null,
          password2E: null,
          usernameEM: null,
          passwordEM: null,
          password2EM: null,

        }
    },
    methods: {
      doRegister(){
        let access = true

        // username validation
        if (this.username.length < 5){
          this.usernameE = true
          access = false
          if (this.username.length == 0){
            this.usernameEM = "Username required!"

          } else {
              this.usernameEM = "Username must be at least 5 characters"            
          }
        } else {
          this.usernameE = false
          this.usernameEM = ''
        }

        // Password validation

        if (this.password.length < 6){
          this.passwordE = true
          access = false
          if (this.password.length == 0){
            this.passwordEM = "Password required!"

          } else {
              this.passwordEM = "Password must be at least 5 characters"            
          }
        } else {
          this.passwordE = false
          this.passwordEM = ''
        }
        // Confirm Password validation

        if (this.password2.length < 8){
          this.password2E = true
          access = false
          if (this.password2.length == 0){
            this.password2EM = "confirm Password required!"

          } else {
              this.password2EM = "Confirm Password must be at least 8 characters"            
          }
        } else {
          this.password2E = false
          this.password2EM = ''
        }

        // compare two passwords
        if (this.password != this.password2){
          access = false
          this.passwordE = true
          this.password2E = true
          this.passwordEM = "Password does not match!"
        } else {
          if (!this.passwordEM && !this.password2EM){
          this.passwordEM = ""
        }
        }

        if (access){

            axios
              .post('/api/auth/users/', {"username": this.username, "password": this.password})
              .then(response =>  {
                  console.log(response)
                  // this.$store.commit("login", response.data.auth_token)
                    this.$router.push("login")

              })
              .catch(error => {
                console.log(error)
                console.log(error.response.data)
                if (error.response.data.username){
                  this.usernameE = true
                  this.usernameEM = error.response.data.username.join(" ")
                } else if (error.response.data.password){
                  this.passwordE = true
                  this.password2E = true
                  this.passwordEM = error.response.data.password.join(" ")
                }
                  // this.usernameEM = true
                  // this.passwordE = true
                  // this.usernamee = true
              })
            // this.$store.commit("login", `${this.username}:${this.password}`)
            // this.$router.push("profile")
        }
        
      }
    }
  }
</script>