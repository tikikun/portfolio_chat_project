<template>
  <div class="bg-white">
    <nav class="flex flex-col sm:flex-row">
      <ul class="inline-flex">
        <li v-for="(item, index) in nav_bar_content" :key="index">
          <button
            v-if="item.isActive"
            @click="tabClicked(index)"
            :class="button_selected"
          >
            {{ item.name }}
          </button>
          <button
            v-else
            @click="
              tabClicked(index);
              tabChosen(item.link);
            "
            :class="button_css"
          >
            {{ item.name }}
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUpdated, computed } from "vue";
import { useRouter } from "vue-router";

const button_css =
  "block px-6 py-4 text-gray-600 hover:text-green-500 focus:outline-none";
const button_selected =
  "block px-6 py-4 font-medium text-gray-600 text-blue-500 border-b-2 border-blue-500 hover:text-green-500 focus:outline-none";
const router = useRouter();

const nav_bar_content = reactive([
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
  },
]);

const resetTabState = () => {
  for (var item of nav_bar_content) {
    item.isActive = false;
  }
};

const tabClicked = (index) => {
  resetTabState();
  nav_bar_content[index].isActive = true;
};

const tabChosen = (input_link) => {
  if (input_link === "/chat") {
    // const random_chatid = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    const random_chatid = "room_2000";
    router.push(input_link + `/${random_chatid}`);
  } else {
    router.push(input_link);
  }
};
</script>
