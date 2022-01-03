<template>
  <Layout>
    <div class="contents">
      <div class="contents__me">
        <h2>I'm David, a software developer from London 👋</h2>
        <p>
          I build things for the internet, including this site which is
          primarily an area for me to try out new shit and maybe write about
          some things (but probably not).
          <br />
          <br />
          The post below explains a little more I guess..
        </p>
      </div>
      <PostCard
        v-for="edge in $page.posts.edges"
        :key="edge.node.id"
        :post="edge.node"
      />
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
import PostCard from '~/components/PostCard.vue';

export default {
  components: {
    PostCard
  },
  metaInfo: {
    title: 'David Harlow'
  }
};
</script>

<style lang="scss">
.contents {
  &__me {
    font-size: 22px;
    margin-bottom: 40px;

    a {
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

[data-theme='light'] {
  .contents {
    color: black;
    div {
      background-color: rgba(255, 255, 255, 0.3);
      box-shadow: 0 0 20px white;
    }
  }
}

[data-theme='dark'] {
  .contents {
    color: white;
    div {
      background-color: rgba(0, 0, 0, 0.3);
      box-shadow: 0 0 120px rgba(0, 0, 0, 0.8);
    }
  }
}
</style>
