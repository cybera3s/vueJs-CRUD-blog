<template>
  <div class="Detail">
    
      <!-- Articles -->
      <article >

        <h3>{{article.title}}</h3>
        <div>{{article.content}}</div>

      </article>
      <hr>
      <div v-if="$store.state.isAuthenticated">
        <button @click="edit=!edit" class="btn btn-warning me-1">Edit</button>
        <button class="btn btn-danger">Remove</button>
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
</template>


<script>

export default {
  name: 'Detail',
  data (){
    let articles = localStorage.getItem("articles")
    articles = JSON.parse(articles)

    let article = articles.find(
        article => article.slug == this.$route.params.slug
    )

    return {
      articles: articles,
      article: article,
      title: article.title,
      description: article.description,
      content : article.content,
      edit: false,
    }
  },
  methods: {
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
          console.log(this.articles[index])

          let database = JSON.stringify(this.articles)
          localStorage.setItem("articles", database)
          this.article = this.articles[index]
          this.edit = false
          this.$router.push(`/article/${this.articles[index].slug}`)

    },
  }
 
}
</script>
