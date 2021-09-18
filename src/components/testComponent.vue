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
          {{'room_2000' }}
        </div>
          <input v-model="thunghiem" @keydown.enter="sendMessage" />

  <div>{{ chatPayLoad }}</div>
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
        v-model="thunghiem"
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
      username: "alan",
      thunghiem: "anything",
      messages: []
    };
  },
  mounted(){this.listenForMessages()},
  methods: {
    printThunghiem() {
      console.log(this.chatPayLoad);
    },
    sendMessage() {
        console.log('sent message');
      let sent_data = this.chatPayLoad;
      let room_id = 'room_2000';
      push(
        child(ref(firebaseDb), `chatroom/${room_id}/messages`),
        sent_data
      ).catch((err) => console.log(err));
      this.thunghiem = "";
    },    listenForMessages() {
      const room_id = this.$route.params.chatid;
      onChildAdded(
        child(ref(firebaseDb), `chatroom/room_2000/messages`),
        (data) => {
          //console.log(data.val());
          this.messages.push(data.val());
        }
      );
    },
  },
  computed: {
    chatPayLoad() {
      return {
        timestamp: Date.now(),
        message: this.thunghiem,
        username: this.username,
      };
    },
  },
};
</script>
