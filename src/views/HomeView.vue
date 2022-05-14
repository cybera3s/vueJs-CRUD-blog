<template>
  <div class="Home">
      <h1 class="text-center mb-4">Home</h1>
      
      <!-- Articles -->
      <article v-for="article in articles">
        <h3>
          <a :href="`/article/${article.slug}`">{{article.title}}</a>
        </h3>
        <div>
          {{article.description}} 
          <a :href="`/article/${article.slug}`">+ continue reading</a>
        </div>
        <hr>
      </article>


  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  data (){
    let articles = localStorage.getItem("articles")
    articles = JSON.parse(articles)
    return {
      articles: articles,
    }
  }
 
}
</script>
