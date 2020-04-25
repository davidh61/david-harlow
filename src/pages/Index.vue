<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
      Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores
    </p>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
      Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores
    </p>

    <p class="home-links">
      <a href="https://davidharlow.dev/" target="_blank" rel="noopener">Old Site</a>
    </p>

      <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>


  </Layout>
</template>


<page-query>
query Home ($page: Int) {
        posts: allPost (page: $page)  {
            edges {
                node {
                    title
                    path
                    }
                }
        }
    }
</page-query>

<script>
import PostCard from '~/components/PostCard.vue'

export default {
  components: {
    PostCard
  },
  metaInfo: {
    title: 'David Harlow'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
