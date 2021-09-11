import { createRouter, createWebHistory } from "vue-router";
import LoginComponent from "/src/components/LoginComponent.vue";
import NavBarComponent from "/src/components/NavBarComponent.vue";
import FooterComponent from "/src/components/FooterComponent.vue";
import SalePage from "/src/components/SalePage.vue";
import UserInfoPage from "/src/components/UserInfoPage.vue";
import ChatComponent from "/src/components/ChatComponent.vue";

const routes = [
  {
    path: "/",
    name: "welcome",
    components: {
      default: SalePage,
      header: NavBarComponent,
      footer: FooterComponent,
    },
  },
  {
    path: "/login",
    name: "Login Component",
    components: {
      default: LoginComponent,
      header: NavBarComponent,
      footer: FooterComponent,
    },
  },
  {
    path: "/sale",
    name: "Sale page",
    components: {
      default: SalePage,
      header: NavBarComponent,
      footer: FooterComponent,
    },
  },
  {
    path: "/user/:id",
    name: "User page",
    components: {
      default: UserInfoPage,
      header: NavBarComponent,
      footer: FooterComponent,
    },
    
  }, {
    path: "/chat",
    name: "Chat page",
    components: {
      default: ChatComponent
    },
    
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
