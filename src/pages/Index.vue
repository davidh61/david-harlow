<template>
  <Layout>
    <div class="contents">
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <div class="me">
    <p>David is a software developer, attendee of gigs, amateur football kit collector and all round top guy 👍 
      He's built this site as somewhere to post about tech, places I go, music I listen to and other stuff you're probably not interested by.
      Click <a href="/about">here</a> to learn some more about myself, or check out some of my posts below.
      </p>

    </div>

      <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>

    </div>

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

<style lang="scss">

.contents {


  .me {
      padding: 10px;
      // border-color:black;
      // border-style: solid;
      background-color:rgba(255, 255, 255, 0.5);

  }
}

.home-links a {
  margin-right: 1rem;
}
</style>
