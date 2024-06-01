<script setup>
import { onMounted } from 'vue'
onMounted(() => {
  window.addEventListener(
    'hashchange',
    () => {
      var currentPath = window.location.hash.slice(1) // 获取输入的路由
      if (this.$router.path !== currentPath) {
        this.$router.push(currentPath) // 动态跳转
      }
    },
    false
  )
})
</script>

<template>
  <RouterView />
</template>
