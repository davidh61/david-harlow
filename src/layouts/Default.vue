<template>
  <div class="layout">
    <header class="header">
      <g-image alt="Example image" src="~/favicon.png" width="135" />

      <h1>Hello World</h1>

      <nav class="nav">
        <!-- <g-link class="nav__link" to="/about-me/">About Me</g-link>
        <g-link class="nav__link" to="/about/">Blogs</g-link> -->
      </nav>
    </header>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.layout {
  padding-top: 20px;
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.content {
}
.header {
  text-align: center;
  padding-right: 20px;
}

@media screen and (min-width: 1200px) {
  .header {
    float: left;
  }
}
@media screen and (max-width: 1000px) {
  .header {
    display: block;
  }
}

.nav__link {
  margin-left: 20px;
}
</style>
