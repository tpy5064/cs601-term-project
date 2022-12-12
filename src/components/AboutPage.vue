<template>
  <div class="about-body">
    <NavBar />
    <main class="about-main">
      <h1 class="about-main-title">About me</h1>
      <div class="about-main-content">
        <div class="about-content-textarea">
          <p>
            Hello! My name is Tianqi Yang. I am an aspiring font-end web
            developer with a keen sense of style. I wish to create websites and
            content as visually appealing as possible with all the functionality
            too. I enjoy working with React and SCSS and they are the tools of
            my choice! Please feel free to contact me if you wish to chat!
          </p>
          <p>
            A little more about myself. I am from China, specifically from the
            north-eastern region of Inner Mongolia, Hulunbuir. I am also of
            Manchu descent, a northern Tungusic minority in China. This is how
            you greet each other in Manchu: ᠰᡳ ᠰᠠᡳᠶᡡᠨ ᠨᡳᠣ &#40;Si sain
            nio?&#41;. Inner Mongolia is a beautiful place where you get to see
            the vast grasslands, green pasture and herds of sheep. It is a place
            where you get to be close to nature and experience the hospitality
            of the locals.
          </p>
          <p>
            Sadly, Manchu is a critically endangered language and fewer and
            fewer people are able to speak it. I am doing my part to preserve
            the language. I would like to teach you, the viewer
            <router-link to="/language">some phrases</router-link> if you are
            interested.
          </p>
          <p>
            Please feel free to explore around the site and contact me from the
            navbar. I have also recently completed a Spotify clone project in
            React. If you are interested, please click
            <a target="_blank" href="https://github.com/tpy5064/spotify-clone"
              >this link</a
            >
            to view it. Until next time...
          </p>
        </div>
        <div class="about-content-visuals">
          <h2 class="manchu-text">
            ᠶᠠᠩ ᡨᡳᠠᠨᠨᠴᡳ <br />
            ᠮᠠᡤᡳᠶᠠ ᡥᠠᠯᠠ
          </h2>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";

export default {
  components: {
    NavBar,
  },
};
</script>

<style scoped>
.about-body {
  overflow: hidden;
}

.about-main {
  padding-left: 3rem;
  background: url("../assets/img/AboutBg.jpg");
  background-size: cover;
  display: flex;
  flex-direction: column;
}

.about-main-content {
  display: flex;
  flex-direction: row;
}

.about-content-textarea {
  width: 55%;
  backdrop-filter: blur(1rem);
  border: 1px solid var(--white-turqoise);
  border-radius: 10px;
  padding: 0 1rem 0 1rem;
  overflow-y: auto;
}

.about-content-textarea p {
  font-size: 22px;
}

.about-content-visuals {
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.about-main-title {
  font-family: "Alegreya Sans", sans-serif;
  font-size: 6rem;
  margin-top: 2rem;
}

.manchu-text {
  font-family: Manchu;
  font-size: 7rem;
  transform: rotate(90deg);
  line-height: 12rem;
  white-space: nowrap;
}

@media only screen and (max-width: 768px) {
  main {
    margin: 0;
  }

  .about-content-textarea {
    width: 80%;
  }

  .about-content-visuals {
    display: none;
  }

  .manchu-text {
    display: none;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) {
  .manchu-text {
    font-size: 4rem;
    line-height: 7rem;
  }

  .about-content-textarea p {
    font-size: 20px;
  }
}

</style>
