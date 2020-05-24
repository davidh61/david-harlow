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
    font-size: 20px;
  }

  &__date {
    margin: 2px;
    font-size: 12px;
  }

  &__description {
    font-size: 15px;
    margin-top: 5px;
  }
}

[data-theme="light"] {
  .post-card {
    &__link {
      color: black;
    }
    &__date,
    &__description {
      color: #5a5a5a;
    }
  }
}

[data-theme="dark"] {
  .post-card {
    &__link {
      color: white;
    }
    &__date,
    &__description {
      color: #c9c9c9;
    }
  }
}
</style>
