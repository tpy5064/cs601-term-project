<template>
  <div class="skills-body">
    <NavBar />
    <main class="skills-main">
      <h1 class="skills-header-title">My Skills</h1>
      <section class="tech-stack-container">
        <h2 class="skills-content-subtitle">My Tech Stack</h2>
        <div class="skills-carousel-container">
          <div class="skill-card">
            <img src="../assets/img/react-icon.png" alt="React Icon" />
            <span>React</span>
          </div>
          <div class="skill-card">
            <img src="../assets/img/js-icon.png" alt="JavaScript Icon" />
            <span>JavaScript</span>
          </div>
          <div class="skill-card">
            <img src="../assets/img/python-icon.png" alt="Python Icon" />
            <span>Python</span>
          </div>
          <div class="skill-card">
            <img src="../assets/img/scss-icon.png" alt="SCSS Icon" />
            <span>SCSS</span>
          </div>
        </div>
      </section>
      <section class="education-section">
        <h2>Education</h2>
        <div class="education-card">
          <img src="../assets/img/bu-logo.png" alt="BU Logo" />
          <div class="ed-info">
            <h3>Master of Science in Software Development</h3>
            <h4>Boston University - &#40;2022 - Current&#41;</h4>
          </div>
        </div>
        <div class="education-card">
          <img
            class="psu-logo"
            src="../assets/img/psu-logo.png"
            alt="PSU Logo"
          />
          <div class="ed-info">
            <h3>Bachelor of Science in Computer Science</h3>
            <h4>Pennsylvania State University - &#40;2018 - Current&#41;</h4>
          </div>
        </div>
      </section>
      <h2>External Links</h2>
      <div class="external-links">
        <a href="https://github.com/tpy5064/cs601-portfolio">
          My Github Page!
          <img src="../assets/img/github-logo.png" alt="Github Logo" />
        </a>
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
.skills-body {
  overflow-y: auto;
  overflow-x: hidden;
  background: url("../assets/img/SkillsBg.jpg");
  background-size: cover;
  background-attachment: fixed;
  height: 100%;
}

.skills-main {
  padding-left: 3rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
}

.skills-main h2 {
  filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.9));
}

.tech-stack-container {
  display: flex;
  flex-direction: column;
  width: 50%;
}

.skills-carousel-container {
  display: flex;
  width: 100%;
  height: 100%;
}

.skill-card {
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.5);
  border: 2px solid white;
  border-radius: 6px;
  margin: 0 1rem 0 0;
  transition: background var(--transition-time) ease-in-out;
  width: 25%;
}

.skill-card img {
  width: 75%;
  height: auto;
}

.skill-card span {
  margin-top: 1rem;
  color: black;
  font-size: 20px;
}

.skill-card:hover {
  background: rgba(255, 255, 255, 0.8);
}

.education-section {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.education-card {
  backdrop-filter: blur(5px);
  border: 1px solid white;
  border-radius: 6px;
  padding: 1rem;
  display: flex;
  align-items: center;
  width: 50%;
  margin-bottom: 1rem;
}

.education-card img {
  width: 25%;
}

.psu-logo {
  width: 10%;
}

.ed-info {
  margin-left: 2rem;
  color: black;
}

.external-links {
  backdrop-filter: blur(5px);
  width: 50%;
  border: 1px solid white;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-bottom: 1rem;
}

.external-links a {
  margin: 1rem 0;
  color: black;
  font-size: 25px;
  text-decoration: none;
  transition: text-decoration 500ms ease-in-out;
}

.external-links a:hover {
  text-decoration: underline;
}

.external-links a img {
  width: 2rem;
}

@media only screen and (max-width: 768px) {
  main {
    margin: 0;
    overflow-y: auto;
  }
  
  .skill-card {
    height: 40px;
    width: 75px;
  }

  .skill-card img {
    width: 40px;
  }

  .skill-card span {
    font-size: 15px;
  }


}
</style>
