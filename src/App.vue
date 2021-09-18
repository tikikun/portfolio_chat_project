<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup


</script>

<template>
  <router-view  name="header"></router-view>
  <router-view  ></router-view>
  <router-view name="footer"></router-view>
</template>

<script>
export default {
  data(){
    return {
      login : 1
    }
  },methods:{
    printVal(){
      this.login++
      console.log(this.login)
    }
  }
}
</script>