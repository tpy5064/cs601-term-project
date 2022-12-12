import {createRouter, createWebHistory} from 'vue-router'
import AboutPage from '../components/AboutPage.vue';
import HomePage from '../components/HomePage.vue';
import SkillsPage from '../components/SkillsPage.vue';
import ContactPage from '../components/ContactPage.vue';
import GalleryPage from '../components/GalleryPage.vue';
import LanguagePage from '../components/LanguagePage.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: AboutPage
  },
  {
    path: '/skills',
    name: 'SkillsPage',
    component: SkillsPage
  },
  {
    path: '/contact',
    name: 'ContactPage',
    component: ContactPage
  },
  {
    path: '/gallery',
    name: 'GalleryPage',
    component: GalleryPage
  },
  {
    path: '/language',
    name: 'LanguagePage',
    component: LanguagePage
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router