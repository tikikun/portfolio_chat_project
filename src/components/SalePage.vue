<template>
  <!-- Section Hero -->

  <div class="bg-green-100 py-14">
    <h3 class="text-2xl tracking-widest text-center text-green-600">DỊCH VỤ</h3>
    <h1 class="mt-8 text-5xl font-bold text-center text-green-600">
      Nhanh chóng & Chính xác.
    </h1>

    <!-- Box -->
    <div :class="boxStyle">
      <!-- box-1 -->
      <div v-for="(item, index) in contentData" :key="index" :class="cardStyle">
        <div class="w-sm">
          <img class="w-64" :src="item.fImageLink" alt />
          <div class="mt-4 text-center text-green-600">
            <h1 class="text-xl font-bold">{{ item.title }}</h1>
            <p class="mt-4 text-gray-600">{{ item.content }}</p>
            <button :class="buttonStyle">{{ item.button }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { firebaseDb } from "../firebase/firebase.js";
import { ref, child, get, onChildAdded } from "firebase/database";

const boxStyle = "md:flex md:justify-center md:space-x-8 md:px-14";
const cardStyle =
  "px-4 py-4 mx-auto mt-16 transition duration-500 transform bg-white shadow-lg bg-whit w-72 rounded-xl hover:shadow-xl hover:scale-110 md:mx-0";
const buttonStyle =
  "py-2 mt-8 mb-4 tracking-widest text-white transition duration-200 bg-green-600 rounded-full px-14 hover:bg-green-500";

const contentData = [
  {
    title: "A",
    content: "contentA",
    fImageLink:
      "https://images01.nicepage.com/c461c07a441a5d220e8feb1a/a17abde8d83650a582a28432/users-with-speech-bubbles-vector_53876-82250.jpg",
    button: "ButtonName",
  },
  {
    title: "B",
    content: "contentB",
    fImageLink:
      "https://images01.nicepage.com/c461c07a441a5d220e8feb1a/3b242447f922540fbe750cab/fdf.jpg",
    button: "ButtonName",
  },
  {
    title: "C",
    content: "contentC",
    fImageLink:
      "https://images01.nicepage.com/c461c07a441a5d220e8feb1a/8cc47b39e719570b996d9879/dsds.jpg",
    button: "ButtonName",
  },
];
</script>
