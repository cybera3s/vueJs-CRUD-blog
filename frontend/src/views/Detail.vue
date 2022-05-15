<template>
  <div class="Detail">
      
      <div v-if="!articleNotFound">
        <article >

        <h3>{{article.title}}</h3>
        <div>{{article.content}}</div>

         </article>
      <hr>
      <div v-if="$store.state.isAuthenticated">
        <button @click="edit=!edit" class="btn btn-warning me-1">Edit</button>
        <button class="btn btn-danger" @click="doRemove">Remove</button>
        <hr>
        
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
      // title: '',
      // description: '',
      // content : '',
      // edit: false,
    }
  },

  mounted() {
      axios
        .get(`/article/${this.$route.params.slug}`) 
        .then(response => {
        this.article = response.data
        })
        .catch(error => {
          this.error = true
        })
  
  },
  methods: {
    // edit form func
    doEdit(){

          let index = this.articles.findIndex(
          article => article.slug == this.$route.params.slug
        )
          console.log(index)
          console.log(this.articles[index])

          this.articles[index] = {
            title: this.title,
            slug: this.title.replaceAll(" " , "-").toLowerCase(),
            description: this.description,
            content: this.content,
          }

          let database = JSON.stringify(this.articles)
          localStorage.setItem("articles", database)
          this.article = this.articles[index]
          this.edit = false
          this.$router.push(`/article/${this.articles[index].slug}`)

    },
    // remove form func
    doRemove() {

        let index = this.articles.findIndex(
          article => article.slug == this.$route.params.slug
        )
        this.articles.splice(index, 1)

          let database = JSON.stringify(this.articles)
          localStorage.setItem("articles", database)
          this.$router.push("/")

    },
  }
 
}
</script>
