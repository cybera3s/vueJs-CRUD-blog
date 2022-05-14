<template>
  <div class="Home">
      <h1 class="text-center mb-4">Home</h1>
      
      <!-- Articles -->
      <article v-for="article in articles">
        <h3>
          <router-link :to="`/article/${article.slug}`">
            {{article.title}}
          </router-link>  
        </h3>
        <div>
          {{article.description}} 
           <router-link :to="`/article/${article.slug}`">
            + continue reading
          </router-link>  
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
