<template>
  <div class="Home">
      <h1 class="text-center mb-4">Home</h1>
      
      <!-- Articles -->
      <article v-if="articles.length" v-for="article in articles">
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
      <div class="alert alert-info">
        There is no any posts.
      </div>


  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HomeView',
  data (){
    return {
      articles: '',
    }
  },
  mounted() {
      axios
      .get("/article/") 
      .then(response => {
          this.articles = response.data
      })
  },
 
}
</script>
