<template>
  <div class="contact-body">
    <NavBar />
    <main class="contact-main">
      <h1 class="contact-header-title">Contact Me</h1>
      <div class="contact-content">
        <div class="contact-form">
          <p>Please feel free to fill out this form below to contact me!</p>
          <form
            action="mailto:andrewyang0828@gmail.com"
            method="post"
            enctype="text/plain"
          >
            <div class="name-inputs">
              <div>
                <label for="fname">Name:</label>
                <input type="text" id="fname" name="fname" />
              </div>
              <div>
                <label for="email">Email:</label>
                <input type="email" name="email" id="email" /><br />
              </div>
            </div>
            <label for="message">Message:</label><br />
            <textarea class="message-box" name="message" id="message"></textarea
            ><br />
            <input
              type="submit"
              name="submit-message"
              id="submit-button"
              value="Send"
            />
          </form>
          <h3>Until next time...</h3>
        </div>
        <div class="contact-thanks"><p>ᡠᠮᡝᠰᡳ ᠪᠠᠨᡳᡥᠠ</p></div>
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
.contact-body {
  overflow: hidden;
}

.contact-main {
  padding-left: 3rem;
  background: url("../assets/img/ContactBg.jpg");
  background-size: cover;
  display: flex;
  flex-direction: column;
}

.contact-content {
  display: flex;
  height: 100%;
}

.contact-form {
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
}

.contact-form form {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 50%;
}

.name-inputs {
  display: flex;
  justify-content: space-between;
}

.name-inputs div {
  display: flex;
  flex-direction: column;
  width: 45%;
}

.message-box {
  height: 100%;
  overflow: auto;
  text-align: start;
  resize: none;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.8);
  font-family: "Rubik", sans-serif;
  font-size: 1rem;
  transition: border 300ms ease-in-out;
}

.contact-main form input {
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.8);
  font-family: "Rubik", sans-serif;
  font-size: 2rem;
  height: 2rem;
  transition: border 300ms ease-in-out;
}

.contact-main form input:hover:not(#submit-button),
.message-box:hover {
  border: 1px solid rgba(58, 175, 169);
}

#submit-button {
  width: 20%;
  height: 15%;
  font-size: 20px;
  cursor: pointer;
  transition: background var(--transition-time) ease-in-out,
    color var(--transition-time) ease-in-out;
}

#submit-button:hover {
  background: rgba(255, 255, 255, 0.7);
  color: black;
}

.contact-thanks {
  transform: rotate(90deg);
  width: 50%;
  height: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  justify-self: center;
}

.contact-thanks p {
  font-family: Manchu;
  font-size: 6rem;
  word-spacing: 50px;
  margin-top: 5rem;
}

@media only screen and (max-width: 768px) {
  main {
    margin: 0;
  }

  .contact-thanks {
    display: none;
  }

  .contact-form {
    width: 85%;
  }

  .manchu-text {
    display: none;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) {
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
</style>
