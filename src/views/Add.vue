<template>

  <div class="Add">
      <h1 class="text-center mb-4">Add Article</h1>
      
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

export default {
  name: 'Add',
  data (){
    let articles = localStorage.getItem("articles")
    articles = JSON.parse(articles)

    return {
      articles: articles,
      title: '',
      description: '',
      content: '',
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
      this.articles.push(article)
      let database = JSON.stringify(this.articles)
      localStorage.setItem("articles", database)
      this.$router.push(`/article/${article.slug}`)
    }
  }
 
}
</script>
