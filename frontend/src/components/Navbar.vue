<template>

	<div class="Navbar">
		<nav id="nav" class="navbar navbar-expand-md navbar-dark bg-primary mb-5 p-3">
    		<div class="container-fluid">
      			<router-link class="navbar-brand" to="/">Aiva</router-link>  
			      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
			        <span class="navbar-toggler-icon"></span>
			      </button>
			      	<div class="collapse navbar-collapse" id="navbarColor01">
				        <ul class="navbar-nav me-auto mb-2 mb-lg-0" style="text-transform: capitalize;">
					          <li class="nav-item">
					            <router-link class="nav-link" to="/">Home</router-link>  
					          </li>

					          <li class="nav-item">
					            <router-link class="nav-link" to="/about">About</router-link> 

					          </li>
					          
				          		
					          

					          <li class="nav-item" v-if="$store.state.isAuthenticated">
					            <router-link class="nav-link" to="/add">add article</router-link>

					          </li>
					          <li class="nav-item" v-if="!$store.state.isAuthenticated">
					            <router-link class="nav-link" to="/login">login</router-link>

					          </li>

					          <li class="nav-item" v-if="!$store.state.isAuthenticated">
					            <router-link class="nav-link" to="/register">register</router-link>

					          </li>
					          <li class="nav-item"  v-if="$store.state.isAuthenticated">
					            <router-link class="nav-link" to="/profile">Profile</router-link>

					          </li>
					          <li class="nav-item" v-if="$store.state.isAuthenticated">
					            <a class="nav-link"  @click.prevent="doLogout">logout</a>

					          </li>
					          
				        </ul>

				        <div class="d-flex" v-if="$route.name=='home'">
				          <input class="form-control me-2" type="search" v-model="$store.state.searchValue" placeholder="Search" aria-label="Search">
				        </div>
				        
		        	</div>
    		</div>
  		</nav>
	</div>
</template>

<script>
	import axios from "axios";

  export default {
		name: 'Navbar',
    methods: {
      doLogout(){


            axios
              .post('/api/auth/token/logout/')
              .then(response =>  {

                    this.$store.commit("logout")
                    this.$router.push("login")

              })
              .catch(error => {
                  console.log(error.response.data)
                  this.logoutError = error.response.data
              })



      }
    }
	}
</script>