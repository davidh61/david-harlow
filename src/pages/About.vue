<template>
  <Layout>
    <section>
      <h2>about me</h2>
      <p>
        <i>
          A software developer with a passion for all things tech related and a
          problem with spending money on gig tickets and football kits.
        </i>
      </p>
    </section>
    <section>
      <h3>🔧</h3>
      <p>
        <b>I build things for the internet.</b>
        Whether it's an e-commerce platform,
        <a href="/post/a-new-beginning">this website</a>
        you're staring at or super complex language processing tools. A back-end
        developer by job title focusing on the .NET framework and Azure, however
        I love trying out new technologies and occasionaly get lost in the world
        of front-end. I consider myself an expert in abandoning projects, and
        something I hope to stop doing so often.. Currently this site has been
        my latest pet, and if you're reading this, success!
      </p>
    </section>
    <section>
      <h3>👷‍♂️</h3>
      <p>
        I graduated from Bournemouth Uni in 2017 with a degree in Software
        Engineering, not spending enough time by the beach however motivated me
        to stick around and was fortunate enough to work for one of the
        <a href="https://redweb.com">top agencies</a>
        in the south west and introduced me to CMS development. After moving
        back to London I started working for this
        <a href="https://thetin.net">super cool agency</a>
        where we develop on a range of different technologies and platforms.
        I now collect my salary from this <a href="https://www.thetrainline.com/">company</a> you may have heard of 🚝🚝🚝
      </p>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About me'
  }
};
</script>

<style lang="scss">
[data-theme='light'] {
  section {
    background-color: rgba(255, 255, 255, 0.3);
    box-shadow: 0 0 20px white;
  }
}

[data-theme='dark'] {
  section {
    background-color: rgba(0, 0, 0, 0.3);
    box-shadow: 0 0 120px rgba(0, 0, 0, 0.8);
  }
}
</style>
