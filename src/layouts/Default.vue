<template>
  <div class="layout">
    <header class="header">
      <!-- https://github.com/gridsome/gridsome/pull/758 -->

      <div class="image-container">
        <img alt="Example image" src="/me.jpg" width="300" />
      </div>

      <h1>David Harlow</h1>

      <nav class="nav">
        <a class="nav__link" href="https://www.instagram.com/dave_harlow/">
          <svg>
            <use xlink:href="/feather-sprite.svg#instagram" />
          </svg>
        </a>
        <a class="nav__link" href="https://www.linkedin.com/in/harlowdavid/">
          <svg>
            <use xlink:href="/feather-sprite.svg#linkedin" />
          </svg>
        </a>
        <a class="nav__link" href="mailto:davidh_95@hotmail.com?subject=Hey%20David!">
          <svg>
            <use xlink:href="/feather-sprite.svg#mail" />
          </svg>
        </a>
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
.image-container {
  text-align: center;
  height: 200px;
  width: 200px;
  overflow: hidden;
  border-radius: 50%;
  border-style: double;
  border: 1;
  display: inline-block;

  img {
    margin: -70px -90px;
  }
}

body {
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.layout {
  display: flex;
  padding-top: 20px;
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  flex: 1;
}

.content {
  flex: 70%;
}
.header {
  flex: 30%;

  text-align: center;
  align-items: center;
}

@media screen and (max-width: 1000px) {
  .layout {
    display: block;
  }
}


@media screen and (min-width: 1000px) {
  .header {
    padding-right: 30px;
  }
}

.nav__link {
  margin-left: 20px;

  svg {
    width: 24px;
    height: 24px;
    stroke: currentColor;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    fill: none;
  }
}
</style>
