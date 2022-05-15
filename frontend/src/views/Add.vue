<template>

  <div class="Add">
      <h1 class="text-center mb-4">Add Article</h1>
        <div v-if="error" class="alert alert-danger">
          Something went
        </div>

        <form @submit.prevent="doAdd">
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

          <button class="btn btn-primary">Add Article</button>
        </form> 

  </div>

</template>

<script>
import axios from "axios"
export default {
  name: 'Add',
  data (){
    
    return {
      title: '',
      description: '',
      content: '',
      error: false,

    }
  },
  methods: {
    doAdd(){
      let article = {
          title: this.title,
          slug: this.title.replaceAll(" " , "-").toLowerCase(),
          description: this.description,
          content: this.content,
      }
        if (!article.title || !article.description || !article.content){
          this.error = true

        }

        if (!this.error){
          axios
          .post('/article/', article) 
          .then(response => {
            console.log(response)
            this.article = response.data
            this.$router.push(`/article/${article.slug}`)

          })
          .catch(error => {
            this.error = true
          })
        }
            

      
    }
  }
 
}
</script>
