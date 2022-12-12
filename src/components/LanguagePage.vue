<template>
  <div class="language-body">
    <NavBar />
    <main class="language-main">
      <h1 class="language-header-title">The Manchu Language and Origins</h1>
      <h2 v-if="currentTemp" class="weather-info">
        It is currently {{ currentTemp }} degrees celcius in Yakeshi, Inner
        Mongolia
      </h2>
      <h2 v-else class="weather-info">Loading...</h2>
      <div class="language-text">
        <p>
          The modern written Manchurian language is based off of the Mongolian
          language. However, this isn't always the case. Before the Manchurian
          people were known as Manchurians, we were referred to as the Jurchen
          people. The Jurchen was successful in military campaigns lead by the
          great Wanyan Aguda. He captured most of the territory that was ruled
          by another previous northern minority, the Khitans. The Jurchen
          dynasty then conquered much of the northern territory of China,
          leaving the Song dynasty in the south.
        </p>
        <img
          src="../assets/img/Jin-Map.png"
          alt="Jin Dynasty Map"
          width="400"
        />
        <p>
          The Jurchen Dynasty ruled the North from 1115 to 1234, and was
          subsequently defeated by the Mongolian Empire, which started the
          largest empire in the world. The Souther Song dynasty was also
          subjugated by the Mongols which became the Yuan Dynasty. At the time,
          Jurchens were using the Jurchen script, which was a slightly modified
          version of the Khitan script, a pseudo-chinese-esque script.
        </p>
        <img src="../assets/img/jurchen.gif" alt="Jurchen Script" />
        <p>
          After the Jurchen was defeated, they retreated back to the
          north-eastern parts of modern-day China, and was not heard from for
          another 400 years. Until one fateful day, the first Manchu leader,
          Nurhaci, decided to once again wage war against the Han Chinese. He
          did not live to witness the victory, but was pivotal to uniting all
          the Jurchen people, and launching the initial sieges against the Han
          Chinese. He was wounded by cannon fire during the Battle of Ningyuan,
          and subsequently died from complications a few months later. It was
          only his son, Huang Taiji that got to witness the conquering of China
          proper. Huang Taiji renamed their people the Manchu, a word that came
          from their own language instead of something that was named by the
          Chinese, re-written their language from the Mongolian alphabet, and
          named the new dynasty the Qing Dynasty.
        </p>
        <p>
          To understand the way that Manchu/Mongolian is written, is that it is
          based on an alphabet system. However, the way that each letter is
          written changes depending on whether it is the first letter in a word,
          the middle or the last. The Mongolian/Manchu script is also written
          vertically, and left to right, making it very hard to display on the
          internet. Here is the example of the voewls of Manchu:
        </p>
        <img src="../assets/img/vowels.gif" alt="Manchu Vowels" />
        <p>
          Manchu has 6 vowels, like Chinese, rather than 5, like English, which
          are: A, E, I, O, U and V. The V vowel sounds like a mixture of O and
          U, and is hard for beginners to grasp. Furthermore, Manchu has a
          distinct advantage over Mongolian because it has extra features that
          allow readers to discern between the 3 main consonant sounds that
          cannot be distinguished in Mongolian unless you are aware of the
          context of the sentence. In particualr, they are the ᡴᠠ &#40;ka&#41;,
          ᡥᠠ &#40;ha&#41; and ᡤᠠ &#40;ga&#41; To indicate the 'k' sound, nothing
          extra is done to the word, to indicate 'g' sound, a dot is added to
          the right of the script, and to indicate 'h', a circle is added.
          Mongolian does not have this and needs the reader to have experience
          to be able to discern the word properly. This dotted and circle styled
          script is called the tongki fuka sindaha hergen:
        </p>
        <p class="manchu-script">ᡨᠣᠩᡴᡳ ᡶᡠᡴᠠ ᠰᡳᠨᡩᠠᡥᠠ ᡥᡝᡵᡤᡝᠨ</p>
        <p>
          So lets start by teaching you some basic phrases! To begin, I will
          teach you how to greet someone you meet. You would say: Si sain nio?
          or Si saiyvn? Here's the written version:
        </p>
        <p class="manchu-script">ᠰᡳ ᠰᠠᡳᠨ ᠨᡳᠣ / ᠰᡳ ᠰᠠᡳᠶᡡᠨ</p>
        <p>
          You can then respond by saying: Sain! or Umesi sain, meaning good, or
          very good. In general, umesi just means "very". Here's the written
          version:
        </p>
        <p class="manchu-script">ᠰᠠᡳᠨ ᡠᠮᡝᠰᡳ ᠰᠠᡳᠨ</p>
        <p>To thank someone, you can simply just say Baniha:</p>
        <p class="manchu-script">ᠪᠠᠨᡳᡥᠠ</p>
        <p>
          And you guessed it, you can also say umesi baniha, to indicate you're
          particularly grateful!
        </p>
        <p>Lastly, to say goodbye, you can say Sirame Achaki:</p>
        <p class="manchu-script">ᠰᡳᡵᠠᠮᡝ ᠠᠴᡥᠠᡴᡳ</p>
        <p>
          Thank you so much for embarking on this journey of learning something
          about Manchurian culture and its unique language. In fact, Manchu is a
          critically endangered language with less than a dozen native,
          first-language speakers left. The Chinese government is doing as much
          as they can to preserve this language by setting up Manchu classes in
          schools local to the North-east of China. I would love to spread the
          word about my special identity and this beautiful language.
        </p>
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
  data() {
    return {
      currentTemp: null,
    };
  },
  mounted() {
    this.getTemp();
  },
  methods: {
    async getTemp() {
      const response = await fetch(
        "https://api.weatherapi.com/v1/current.json?key=47ea65ef12e24d2ba39203603221112&q=Yakeshi&aqi=no"
      );
      const weather = await response.json();
      this.currentTemp = weather.current.temp_c;
    },
  },
};
</script>

<style>
.language-body {
  background: url("../assets/img/Golden-Fields.jpg");
  background-size: cover;
  overflow: hidden;
}

h1 {
  margin-bottom: 0;
}

.language-main {
  overflow: hidden;
  padding-left: 3rem;
  display: flex;
  flex-direction: column;
}

.language-text {
  width: 80%;
  height: 70%;
  background: rgba(0, 0, 0, 0.6);
  padding: 1rem;
  border-radius: 15px;
  overflow-y: auto;
}

.language-text p {
  font-size: 18px;
}

.manchu-script {
  font-family: Manchu;
  font-size: 50px;
  writing-mode: vertical-rl;
  text-orientation: mixed;
}

@media only screen and (max-width: 768px) {
  main {
    margin: 0;
  }

  .language-text {
    height: 48%;
  }
}
</style>
