<template>
  <router-view></router-view>
</template>

<script>
//import HomePage from './components/HomePage.vue';

export default {
  name: "App",
  components: {
    //HomePage,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Rubik&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Alegreya+Sans:ital,wght@1,700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,600&display=swap");

@font-face {
  font-family: Manchu;
  src: url(./assets/fonts/XM_XingShu.ttf);
}

:root {
  font-size: 16px;
  --bg-default: #3aafa9;
  --bg-dark: #2b7a78;
  --white-default: #feffff;
  --white-turqoise: #def2f1;
  --dark-default: #17252a;
  --dark-extra: #101b1e;
  --transition-time: 500ms;
  font-family: "Rubik", sans-serif;
}

body {
  margin: 0;
  padding: 0;
  background-color: var(--bg-default);
  color: var(--white-default);
}

main {
  margin-left: 5rem;
  padding: 1rem;
  height: 100vh;
  width: 100vw;
}

::-webkit-scrollbar {
  width: 1rem;
}

::-webkit-scrollbar-track {
  background: var(--white-turqoise);
}

::-webkit-scrollbar-thumb {
  background: var(--bg-default);
  border-radius: 10px;
}

.about-main-title,
.skills-header-title,
.contact-header-title,
.project-header-title,
.language-header-title {
  font-family: 'Alegreya Sans', sans-serif;
  font-size: 6rem;
  margin-top: 2rem;
  margin-left: 1rem
}

@media only screen and (max-width: 768px) {
  .nav-bar {
    bottom: 0;
    width: 100vw;
    height: 5rem;
  }

  .nav-logo {
    display: none;
  }

  .nav-btn-container {
    flex-direction: row;
  }

  .nav-link {
    justify-content: center;
  }

  main {
    margin: 0;
  }

  .about-content-textarea {
    width: 100%;
  }

  .about-content-visuals {
    display: none;
  }

  .index-large-logo {
    height: 500px;
  }

  .contact-thanks {
    display: none;
  }

  .contact-form {
    width: 100%;
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

  .contact-form {
    width: 70%;
  }

  .contact-thanks {
    width: 30%;
  }

  .contact-thanks span {
    font-size: 4rem;
  }
}

@media only screen and (min-width: 1024px) {
  .nav-bar {
    top: 0;
    width: 5rem;
    height: 100vh;
  }

  .nav-bar:hover {
    width: 16rem;
  }

  .nav-bar:hover .link-text {
    display: inline;
  }

  .nav-bar:hover .nav-logo svg {
    margin-left: 11rem;
  }

  .nav-bar:hover {
    width: 15rem;
  }

  .nav-bar:hover .link-text {
    display: block;
  }
}
</style>
