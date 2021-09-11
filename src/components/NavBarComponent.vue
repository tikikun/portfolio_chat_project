<template>
  <div class="bg-white">
    <nav class="flex flex-col sm:flex-row">
      <ul class="inline-flex">
        <li v-for="(item, index) in nav_bar_content" :key="index">
          <button
            v-if="item.isActive"
            @click="tabClicked(index)"
            :class="button_selected"
          >{{ item.name }}</button>
          <button
            v-else
            @click="tabClicked(index); testRouterPush(item.link)"
            :class="button_css"
          >{{ item.name }}</button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
const button_css =
  "block px-6 py-4 text-gray-600 hover:text-green-500 focus:outline-none";
const button_selected =
  "block px-6 py-4 font-medium text-gray-600 text-blue-500 border-b-2 border-blue-500 hover:text-green-500 focus:outline-none";
</script>

<script>import router from "../router";

export default {
  data() {
    return {

      nav_bar_content: [
        {
          name: "Sale page",
          link: "/sale",
          isActive: true,
        },
        {
          name: "Login",
          link: "/login",
          isActive: false,
        },
                {
          name: "Chat",
          link: "/chat",
          isActive: false,
        }
      ],
    };
  },
  methods: {
    resetTabState() {
      for (var item of this.nav_bar_content) {
        item.isActive = false;
      }
    },
    tabClicked(index) {
      this.resetTabState();
      this.nav_bar_content[index].isActive = true;
    },
    testRouterPush(input_link) {
      router.push(input_link)
    }

  },
};
</script>