
<template>
  <button
    role="button"
    aria-label="Toggle dark/light"
    @click.prevent="toggleTheme"
    class="toggle-theme"
  >
    <svg v-if="darkTheme">
      <use xlink:href="@/feather-sprite.svg#moon" />
    </svg>
    <svg v-else>
      <use xlink:href="@/feather-sprite.svg#sun" />
    </svg>
  </button>
</template>

<script>
export default {
  data() {
    return {
      darkTheme: false
    };
  },
  methods: {
    toggleTheme() {
      this.darkTheme = !this.darkTheme;
      // This is using a script that is added in index.html
      window.__setPreferredTheme(this.darkTheme ? "dark" : "light");
    }
  },
  mounted() {
    if (window.__theme == "dark") this.darkTheme = true;
  }
};
</script>

<style lang="scss">
.toggle-theme {

  background: none;
  border: none;
  cursor: pointer;

  svg {
    width: 25px;
    height: 25px;
    stroke: currentColor;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    fill: none;
  }
}

[data-theme="dark"] {

  .toggle-theme {
    svg {
      color: white;

      &:hover {
        color: #4cffba;
        cursor: pointer;
            filter: drop-shadow(0px 0px 6px #4cffba)
      }
    }
  }
}
[data-theme="light"] {
  .toggle-theme {
    svg {
      color: black;
    }
  }
}
</style>