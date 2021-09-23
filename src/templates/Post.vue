<template>
  <Layout>
    <p v-html="$page.post.date" />

    <article v-html="$page.post.content" />
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
    date
    description
    image
    content
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title,
      date: this.$page.date,
      description: this.$page.description,
      image: this.$page.image
    };
  },
  props: ['post']
};
</script>

<style lang="scss">
[data-theme='light'] {
  article {
    background-color: rgba(255, 255, 255, 0.3);
    box-shadow: 0 0 20px white;
  }
}

[data-theme='dark'] {
  article {
    background-color: rgba(0, 0, 0, 0.3);
    box-shadow: 0 0 120px rgba(0, 0, 0, 0.8);
  }
}

</style>
