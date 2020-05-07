<template>
  <Layout>
    <div class="contents">
      <!-- Learn how to use images here: https://gridsome.org/docs/images -->
      <div class="contents__me">
        <p>
          I'm David, a software developer from London 👋
          I've built this site as a playground to try out new things out and write about nonsense.
          Click
          <a
            href="/about/"
          >here</a> if you'd like to see more, or alternatively check out my thoughts below.
        </p>
      </div>

      <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node" />
    </div>
  </Layout>
</template>


<page-query>
query Home ($page: Int) {
        posts: allPost (page: $page)  {
            edges {
                node {
                      title
                      date
                      description
                      path
                      image
                    }
                }
        }
    }
</page-query>

<script>
import PostCard from "~/components/PostCard.vue";

export default {
  components: {
    PostCard
  },
  metaInfo: {
    title: "David Harlow"
  }
};
</script>

<style lang="scss">
.contents {
  &__me {
    font-size: 20px;
    margin-bottom: 40px;

    a {
      font-size: 22px;
      color: black;
      text-decoration: none;
      border-bottom: 1px black dashed;

      &:hover {
        background-color: black;
        color: #4cffba;
        cursor: pointer;
      }
    }
  }
  div {
    background-color: rgba(255, 255, 255, 0.6);
  }
}
</style>
