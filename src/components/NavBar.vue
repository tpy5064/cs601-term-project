<template>
  <nav class="nav-bar">
    <ul class="nav-btn-container">
      <li class="nav-logo">
        <router-link to="/" class="nav-link nav-logo">
          <img
            src="../assets/img/YTQLogo.png"
            alt="Yang Tianqi Logo"
            class="header-logo"
          />
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/" class="nav-link">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path
              d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c.2 35.5-28.5 64.3-64 64.3H128.1c-35.3 0-64-28.7-64-64V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24zM352 224c0-35.3-28.7-64-64-64s-64 28.7-64 64s28.7 64 64 64s64-28.7 64-64zm-96 96c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16c0-44.2-35.8-80-80-80H256z"
            />
          </svg>
          <span class="link-text">Home</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/about" class="nav-link">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path
              d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 256h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm96-96c0 35.3-28.7 64-64 64s-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64zm128-32H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
            />
          </svg>
          <span class="link-text"> About </span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/skills" class="nav-link">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path
              d="M176 88v40H336V88c0-4.4-3.6-8-8-8H184c-4.4 0-8 3.6-8 8zm-48 40V88c0-30.9 25.1-56 56-56H328c30.9 0 56 25.1 56 56v40h28.1c12.7 0 24.9 5.1 33.9 14.1l51.9 51.9c9 9 14.1 21.2 14.1 33.9V304H384V288c0-17.7-14.3-32-32-32s-32 14.3-32 32v16H192V288c0-17.7-14.3-32-32-32s-32 14.3-32 32v16H0V227.9c0-12.7 5.1-24.9 14.1-33.9l51.9-51.9c9-9 21.2-14.1 33.9-14.1H128zM0 416V336H128v16c0 17.7 14.3 32 32 32s32-14.3 32-32V336H320v16c0 17.7 14.3 32 32 32s32-14.3 32-32V336H512v80c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64z"
            />
          </svg>
          <span class="link-text">Skills</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/contact" class="nav-link">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path
              d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
            />
          </svg>
          <span class="link-text">Contact</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/gallery" class="nav-link">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path
              d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48z"
            />
          </svg>
          <span class="link-text">Gallery</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/language" class="nav-link">
          <img src="../assets/img/Manju.png" alt="">
          <span class="link-text">Language</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.nav-bar {
  height: 100vh;
  position: fixed;
  background-color: var(--dark-default);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 5;
  transition: width 250ms ease;
}

.nav-btn-container {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.nav-item {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-link {
  display: flex;
  align-items: center;
  height: 5rem;
  text-decoration: none;
  color: var(--white-default);
  width: 100%;
  transition: var(--transition-time);
}

.nav-link svg {
  width: 2rem;
  margin: 0 1.5rem;
  transition: var(--transition-time);
  filter: invert(53%) sepia(65%) saturate(383%) hue-rotate(128deg)
    brightness(98%) contrast(91%);
}

.nav-link:hover svg {
  filter: invert(94%) sepia(15%) saturate(553%) hue-rotate(125deg)
    brightness(92%) contrast(91%);
}

.nav-logo img {
  width: 2rem;
  min-width: 2rem;
  margin: 0 1.5rem;
}

.link-text {
  display: none;
  margin-left: 1rem;
  font-size: 20px;
}

.nav-link:hover:not(.nav-logo) {
  background-color: var(--dark-extra);
}

.nav-item img {
  height: 3rem;
  margin: 0 1.5rem;
  transition: var(--transition-time);
  filter: invert(53%) sepia(65%) saturate(383%) hue-rotate(128deg)
    brightness(98%) contrast(91%);
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
