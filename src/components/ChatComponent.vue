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
          v-model="username"
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
          <div v-if="message.username != username" :class="friendBubble">
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
        @keyup.enter="sendMessage"
        class="flex-grow px-4 py-2 m-2 mr-1 bg-gray-200 border border-gray-300 rounded-full resize-none "
        rows="1"
        placeholder="Message..."
        style="outline: none"
        v-model="typedMessage"
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

<script>
import { firebaseDb } from "../firebase/firebase.js";
import { ref, child, onChildAdded, push } from "firebase/database";

export default {
  data() {
    return {
      friendBubble:
        "clear-both w-3/4 p-2 mx-4 my-2 bg-gray-300 rounded-lg mb-1",
      myBubble:
        "clear-both float-right w-3/4 p-2 mx-4 my-2 bg-green-300 rounded-lg mb-3",
      SVG_info:
        "M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z",

      username: "alan",
      typedMessage: "",
      messages: [
        {
          timestamp: 1,
          message: "Hello i'm alan",
          username: "peter",
          isSender: false,
        },
      ],
    };
  },
  beforeMount() {
    this.listenForMessages();
  },
  mounted() {},
  updated() {
    this.$nextTick(() => this.scrollToEnd());
  },
  methods: {
    sendMessage() {
      let sent_data = this.chatPayLoad;
      let room_id = this.$route.params.chatid;
      push(
        child(ref(firebaseDb), `chatroom/${room_id}/messages`),
        sent_data
      ).catch((err) => console.log(err));
      this.typedMessage = "";
    },

    listenForMessages() {
      const room_id = this.$route.params.chatid;
      onChildAdded(
        child(ref(firebaseDb), `chatroom/${room_id}/messages`),
        (data) => {
          //console.log(data.val());
          this.messages.push(data.val());
        }
      );
    },
    scrollToEnd() {
      // scroll to the start of the last message
      window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
      //this.$el.scrollTop = this.$el.lastElementChild.offsetTop;
    },
  },
  computed: {
    chatPayLoad() {
      return {
        timestamp: Date.now(),
        message: this.typedMessage,
        username: this.username,
      };
    },
  },
};
</script>
