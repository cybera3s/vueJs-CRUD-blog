<template>
  <div class="Detail">
      
      <div v-if="!articleNotFound">
        <article >

        <h3>{{article.title}}</h3>
        <div>{{article.content}}</div>

         </article>
      <hr>

      <!-- modify buttons -->

      <div class="alert alert-danger" v-if="errorDel">
          Something went wrong 

      </div>

      <div v-if="$store.state.isAuthenticated">
        <button @click="edit=!edit" class="btn btn-warning me-1">Edit</button>
        <button class="btn btn-danger" @click="doRemove">Remove</button>
        <hr>

      <!-- Edit Form -->
        <div class="alert alert-danger" v-if="errorEdit">
          Something went wrong 

        </div>
        <form @submit.prevent="doEdit" v-if="edit" id="edit-form">
          <div class="mb-3">

            <label for="title" class="form-label">Title</label>
            <input type="text" v-model="title" class="form-control" id="title" >

          </div>

          <div class="mb-3">

            <label for="description" class="form-label">Description</label>

            <textarea class="form-control" v-model="description" id="description" rows="3"></textarea>

          </div>

          <div class="mb-3">

            <label for="content" class="form-label">Content</label>

            <textarea class="form-control" v-model="content" id="content" rows="6"></textarea>

          </div>

          <button class="btn btn-primary">Edit Article</button>
        </form> 
      </div>
      </div>
      <div v-else class="alert alert-danger">
          Article Not Found !!! 
      </div>
      
  </div>
</template>


<script>
import axios from "axios"
export default {
  name: 'Detail',
  data (){

    return {
      article: {} ,
      articleNotFound :false,
      title: '',
      description: '',
      content : '',
      edit: false,
      errorEdit: false,
      errorDel: false ,
    }
  },

  mounted() {
      axios
        .get(`/article/${this.$route.params.slug}`) 
        .then(response => {
        this.article = response.data
        this.title= this.article.title
        this.description=this.article.description
        this.content =this.article.content
        })
        .catch(error => {
          this.error = true
        })
  
  },
  methods: {
    // edit form func
    doEdit(){

      let article = {
        title: this.title,
        slug: this.title.replaceAll(" " , "-").toLowerCase(),
        description: this.description,
        content: this.content,
      }

      axios
          .put(`/article/${this.$route.params.slug}/`, article) 
          .then(response => {
            console.log(response)
            this.article = article
            this.edit = false
            this.$router.push(`/article/${article.slug}`)

          })
          .catch(error => {
            this.errorEdit = true
          })
         
          

    },
    // remove form func
    doRemove() {

        axios
          .delete(`/article/${this.$route.params.slug}/`) 
          .then(response => {
            
            this.$router.push("/")

          })
          .catch(error => {
            this.errorDel = true
            console.log(error)
          })
          
          

    },
  }
 
}
</script>
