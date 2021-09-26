
<template>
  <router-view  name="header"></router-view>
  <router-view   ></router-view>
  <router-view name="footer"></router-view>
</template>


<script setup>
import global from "./global.js";
import { provide } from "vue"

provide('global',global)
</script>
