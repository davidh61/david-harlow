<template>
  <div class="post-card">
    <h2 class="post-card__title" v-html="post.title" />
    <g-link class="post-card__link" :to="post.path">{{post.title}}</g-link>
  
  <hr>
  </div>

</template>

<script>
export default {
  props: ["post"]
};
</script>

<style lang="scss">
</style>
