<template>
    <div>User {{ $route.params.name }}</div>
</template>

<script>

export default {
    data(){
        return {}
    },
    mounted(){
        console.warn(this.$route.params.name)
    }
}
</script>