<template>
  <div class="index-body">
    <video
      class="index-video"
      src="../assets/video/HomeBgVideo.mp4"
      autoplay
      muted
      loop
    ></video>
    <NavBar />
    <main class="index-main">
      <img
        class="index-large-logo"
        src="../assets/img/YTQLogo.png"
        alt="YTQ Logo"
      />
      <h1 class="index-name-title">Yang Tianqi</h1>
      <span class="index-content-intro"
        >Aspiring front-end web developer with a passion for style.</span
      >
      <router-link class="index-button" to="./contact">Contact Me</router-link>
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
main {
  overflow: hidden;
}
.index-body {
  overflow: hidden;
}
.index-video {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}

.index-main {
  height: 100vh;
  width: auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-wrap: break-word;
  overflow: hidden;
}

.index-large-logo {
  position: absolute;
  z-index: -1;
  height: 650px;
}

.index-name-title {
  font-family: "Alegreya Sans", sans-serif;
  font-size: 10rem;
  margin: 0 0 2rem 0;
  text-align: center;
  background: url("../assets/img/stripes.png") repeat-y;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: aitf 8s linear infinite;
  filter: drop-shadow(10px 10px 5px rgba(0, 0, 0, 0.5));
}

@keyframes aitf {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}

.index-content-intro {
  text-align: center;
  font-size: 1.5rem;
  filter: drop-shadow(8px 2px 5px rgba(0, 0, 0));
}

.index-button {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid white;
  color: white;
  width: 15rem;
  height: 3rem;
  cursor: pointer;
  box-shadow: inset 0 0 0 0 var(--bg-default);
  transition: box-shadow 300ms ease-out;
}

.index-button:hover {
  box-shadow: inset 15rem 0 0 0 var(--bg-default);
}

@media only screen and (max-width: 768px) {
  main {
    margin: 0;
  }

  .index-large-logo {
    height: 500px;
  }
}
</style>
