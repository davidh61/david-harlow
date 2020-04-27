<template>
  <Layout>
    <p v-html="$page.post.date"/>

    <div v-html="$page.post.content"/>
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
    }
  },
  props: ['post'],
};
</script>