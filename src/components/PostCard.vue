<template>
  <div class="post-card">
    <!-- <h2 class="post-card__title" v-html="post.title" /> -->
    <img class="post-card__image" :src="post.image" width="225" />
    <span class="post-card__info">
      <g-link class="post-card__link" :to="post.path">{{post.title}}</g-link>
      <p class="post-card__date" v-html="post.date"></p>
    </span>
    <p v-html="post.description"></p>
    <hr />
  </div>
</template>

<script>
export default {
  props: ["post"]
};
</script>

<style lang="scss">
.post-card {
  &__info {
    color:black;

    &:active {
    color:black;
    }

    &:hover {
      border-bottom: 2px;
      border-color: #49f740;
      border-bottom-style: solid;
    }
  }

  &__image {
    display: none;
  }

  &__link {
    text-decoration: none;
    font-size: 25px;

    &:hover {
    }
  }

  &__date {
    padding: 5px;
    display: inline;
    font-size: 12px;
  }
}
</style>
