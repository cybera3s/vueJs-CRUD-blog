<template>
  <div class="Detail">
    
      <!-- Articles -->
      <article >

        <h3>{{article.title}}</h3>
        <div>{{article.content}}</div>

      </article>

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
    }
  }
 
}
</script>
