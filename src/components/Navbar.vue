<template>

	<div class="Navbar">
		<nav id="nav" class="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
    		<div class="container-fluid">
      			<router-link class="navbar-brand" to="/">Aiva</router-link>  
			      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
			        <span class="navbar-toggler-icon"></span>
			      </button>
			      	<div class="collapse navbar-collapse" id="navbarColor01">
				        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
					          <li class="nav-item">
					            <router-link class="nav-link active" to="/">Home</router-link>  
					          </li>

					          <li class="nav-item">
					            <router-link class="nav-link" to="/about">About</router-link> 

					          </li>
					          <li class="nav-item">
					            <router-link class="nav-link" to="/profile">Profile</router-link>

					          </li>

				        </ul>

				        <form class="d-flex">
				          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
				          <button class="btn btn-outline-light" type="submit">Search</button>
				        </form>
				        
		        	</div>
    		</div>
  		</nav>
	</div>

</template>

<script>
	export default {
		name: 'Navbar',
		data() {
			return {

			}
		}
	}
</script>