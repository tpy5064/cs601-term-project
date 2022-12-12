<template>
  <div class="gallery-body">
    <NavBar />
    <main class="gallery-main">
      <h1 class="gallery-header-title">My Gallery</h1>
      <section class="gallery-container">
        <div class="gallery">
          <div class="img-container">
            <img
              :src="img1Src"
              @mouseenter="updateImg1Src"
              @mouseleave="resetImg1Src"
            />
            <p>{{ img1Subtitle }}</p>
          </div>
          <div class="img-container">
            <img
              :src="img2Src"
              @mouseover="updateImg2Src"
              @mouseleave="resetImg2Src"
            />
            <p>{{ img2Subtitle }}</p>
          </div>
          <div class="img-container">
            <img
              :src="img3Src"
              @mouseover="updateImg3Src"
              @mouseleave="resetImg3Src"
            />
            <p>{{ img3Subtitle }}</p>
          </div>
          <div class="img-container">
            <img
              :src="img4Src"
              @mouseover="updateImg4Src"
              @mouseleave="resetImg4Src"
            />
            <p>{{ img4Subtitle }}</p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";

export default {
  components: {
    NavBar,
  },
  data() {
    return {
      img1Src: require("../assets/img/Prairie.jpg"),
      img1Subtitle: "Beautiful grassland with horses",
      img2Src: require("../assets/img/Prairie2.jpg"),
      img2Subtitle: "Prairie with Mongolian huts",
      img3Src: require("../assets/img/River.jpg"),
      img3Subtitle: "River Valley under the clouds",
      img4Src: require("../assets/img/Golden-Fields.jpg"),
      img4Subtitle: "Golden fields",
    };
  },
  methods: {
    updateImg1Src() {
      this.img1Src = require("../assets/img/Halair.jpg");
      this.img1Subtitle = "Halair Airport";
    },
    updateImg2Src() {
      this.img2Src = require("../assets/img/Russian-Buildings.jpg");
      this.img2Subtitle = "Russian-styled buildings at Manzhouli";
    },
    updateImg3Src() {
      this.img3Src = require("../assets/img/Yakeshi.jpg");
      this.img3Subtitle = "Snowed-in resort at my Hometown, Yakeshi";
    },
    updateImg4Src() {
      this.img4Src = require("../assets/img/Calligraphy.jpg");
      this.img4Subtitle = "Beautiful Mongolian calligraphy";
    },
    resetImg1Src() {
      this.img1Src = require("../assets/img/Prairie.jpg");
      this.img1Subtitle = "Beautiful grassland with horses";
    },
    resetImg2Src() {
      this.img2Src = require("../assets/img/Prairie2.jpg");
      this.img2Subtitle = "Prairie with Mongolian huts";
    },
    resetImg3Src() {
      this.img3Src = require("../assets/img/River.jpg");
      this.img3Subtitle = "River Valley under the clouds";
    },
    resetImg4Src() {
      this.img4Src = require("../assets/img/Golden-Fields.jpg");
      this.img4Subtitle = "Golden fields";
    },
  },
};
</script>

<style scoped>
.gallery-body {
  overflow-y: auto;
  overflow-x: hidden;
  background: url("../assets/img/ProjectBg.jpg");
  background-size: cover;
  height: 100%;
}

.gallery-header-title {
  text-align: center;
}

.gallery-main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.gallery-container {
  width: 850px;
  height: 850px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.gallery {
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  justify-content: space-evenly;
  grid-template-columns: repeat(2, auto);
  z-index: 1;
}

.img-container {
  width: 275px;
  height: 275px;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 15px;
  z-index: 2;
  display: flex;
  flex-direction: column;
}

.img-container img {
  width: 100%;
  height: 85%;
  object-fit: cover;
  border-radius: 15px;
}

.img-container p {
  color: white;
  text-align: center;
}

@media only screen and (max-width: 768px) {
  main {
    margin: 0;
  }

  .gallery-container {
    width: 600px;
    height: 600px;
  }
}
</style>
