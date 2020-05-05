<template>
  <div class="post-card">
    <p class="post-card__date" v-html="post.date"></p>
    <g-link class="post-card__link" :to="post.path">{{post.title}}</g-link>
    <p class="post-card__description" v-html="post.description"></p>
  </div>
</template>

<script>
export default {
  props: ["post"]
};
</script>

<style lang="scss">
.post-card {

  margin-bottom: 40px;

  &__link {
    font-size: 22px;
    color: black;

    &:hover {
      background-color:black;
      color: #4cffba;
      cursor: pointer;
    }
  }

  &__date {
    margin: 2px;
    font-size: 12px;
    color: #5a5a5a;
  }

  &__description {
    color: #5a5a5a;
    font-size: 15px;
    margin-top: 5px;
  }
}
</style>
