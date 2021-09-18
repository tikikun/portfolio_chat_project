<template>
  <body>
    <div style="overscroll-behavior: none">
      <div
        class="fixed flex justify-between w-full h-16 pt-2 text-black bg-green-400 shadow-md "
        style="top: 0px; overscroll-behavior: none"
      >
        <!-- back button -->
        <router-link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="w-12 h-12 my-1 ml-2 text-green-100"
          >
            <path
              class="text-green-100 fill-current"
              d="M9.41 11H17a1 1 0 0 1 0 2H9.41l2.3 2.3a1 1 0 1 1-1.42 1.4l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 0 1 1.42 1.4L9.4 11z"
            />
          </svg>
        </router-link>
        <div class="my-3 text-lg font-bold tracking-wide text-green-100">
          {{ $route.params.chatid }}
        </div>
        <!-- Input nickanme -->
        <textarea
          v-model="chatPayLoad.username"
          style="outline: none"
          class="px-4 m-2 mr-1 bg-gray-200 border border-gray-300 rounded-full resize-none "
          placeholder="Input nickname here"
        ></textarea>
        <!-- 3 dots -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="w-8 h-8 mt-2 mr-2 icon-dots-vertical"
        >
          <path
            class="text-green-100 fill-current"
            fill-rule="evenodd"
            d="M12 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
          />
        </svg>
      </div>
      <!-- fetch chat -->
      <div class="mt-20 mb-20">
        <div v-for="(message, index) in messages" :key="index" class="clearfix">
          <div
            v-if="message.username != chatPayLoad.username"
            :class="friendBubble"
          >
            {{ message.message }}
          </div>
          <div v-else :class="myBubble">{{ message.message }}</div>
        </div>
      </div>
    </div>

    <div
      class="sticky flex justify-between w-full bg-green-100"
      style="bottom: 0px"
    >
      <textarea
        @keyup.enter="sendMessage(room_id)"
        class="flex-grow px-4 py-2 m-2 mr-1 bg-gray-200 border border-gray-300 rounded-full resize-none "
        rows="1"
        placeholder="Message..."
        style="outline: none"
        v-model="chatPayLoad.typedMessage"
      ></textarea>
      <button @click="sendMessage" class="m-2" style="outline: none">
        <svg
          class="w-12 h-12 py-2 mr-2 text-green-400 svg-inline--fa fa-paper-plane fa-w-16"
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="paper-plane"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path fill="currentColor" :d="SVG_info" />
        </svg>
      </button>
    </div>
  </body>
</template>

<script setup>
import { firebaseDb } from "../firebase/firebase.js";
import {
  ref as fire_db_ref,
  child,
  onChildAdded,
  push,
} from "firebase/database";
import { ref, reactive, onMounted, onUpdated, computed } from "vue";
import { useRoute } from "vue-router";

// get the router
const route = useRoute();

// styling sectio
const friendBubble =
  "clear-both w-3/4 p-2 mx-4 my-2 bg-gray-300 rounded-lg mb-1";
const myBubble =
  "clear-both float-right w-3/4 p-2 mx-4 my-2 bg-green-300 rounded-lg mb-3";
const SVG_info =
  "M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z";

// messages to display
const messages = reactive([
  {
    timestamp: 1,
    message: "Hello i'm alan",
    username: "peter",
    isSender: false,
  },
]);

// chat state data
const chatPayLoad = reactive({
  timestamp: null,
  typedMessage: "",
  username: "alan",
});

// Specify room id
const room_id = route.params.chatid ;

// On mounted function
onMounted(() => {
  listenForMessages(room_id);
  //console.log(room_id);
});

// On update ** scroll to the bottom
onUpdated(() => {
  scrollToEnd();
});

// Listen for update on database 
const listenForMessages = (room_id) => {
  onChildAdded(
    child(fire_db_ref(firebaseDb), `chatroom/${room_id}/messages`),
    (data) => {
      messages.push(data.val());
    }
  );
};

// Scroll to end 
const scrollToEnd = () => {
  window.scrollTo(
    0,
    document.body.scrollHeight || document.documentElement.scrollHeight
  );
};

// Send message
const sendMessage = (room_id) => {
  chatPayLoad.timestamp = Date.now();
  let sent_data = {
    timestamp: Date.now(),
    message: chatPayLoad.typedMessage,
    username: chatPayLoad.username,
  };
  push(
    child(fire_db_ref(firebaseDb), `chatroom/${room_id}/messages`),
    sent_data
  ).catch((err) => console.log(err));
  chatPayLoad.typedMessage = "";
};
</script>
