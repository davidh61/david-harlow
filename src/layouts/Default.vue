<template>
  <div class="layout">
    <header>
      <!-- https://github.com/gridsome/gridsome/pull/758 -->

      <a href="/" class="image-container">
        <img alt="Example image" src="/me-me.jpeg" width="200" />
      </a>

      <h1>davidharlow</h1>
  
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
    <main>
      <slot />
    </main>
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

  .layout {
    padding-top: 20px;
    max-width: 760px;
    margin: 0 auto;
    padding: 20px;
    flex: 1;

    header {
      padding-top: 20px;
      flex: 30%;
      text-align: center;
      align-items: center;

      .image-container {
        background-color: white;
        text-align: center;
        height: 140px;
        width: 140px;
        overflow: hidden;
        border-radius: 50%;
        border: 4px solid black;
        display: inline-block;
        box-shadow: 2px black;

        &:hover {
          cursor: pointer;
          box-shadow: 0 0 20px #4cffba;
        }

        img {
          margin: 10px -90px;
        }
      }
      h1 {
        text-shadow: 2px 2px #4cffba;
        color: #000000;
        margin: 10px;
      }
      .nav__link {
        color: black;

        &:nth-child(2) {
          margin: 10px;
        }
        svg {
          width: 18px;
          height: 18px;
          stroke: currentColor;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
          fill: none;
        }
        &:hover {
          color: #4cffba;
          cursor: pointer;
        }
      }
    }

    main {
      flex: 70%;
      a {
        text-decoration: none;
        color: black;
        border-bottom: 1px black dashed;

        &:hover {
          background-color: black;
          color: #4cffba;
          cursor: pointer;
        }
      }
    }
  }
}

@media screen and (max-width: 1000px) {
  .layout {
    display: block;
  }
}

@media screen and (min-width: 1000px) {
  .layout {
    display: flex;
  }
  header {
    padding-right: 30px;
  }
}
</style>
