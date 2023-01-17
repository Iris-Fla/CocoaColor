<template>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Kiwi+Maru&display=swap"
    rel="stylesheet"
  />
  <transition name="page" mode="out-in">
    <NuxtPage></NuxtPage>
  </transition>
</template>

<style scope>
body {
  font-family: "Kiwi Maru", serif;
}
.page-enter {
  opacity: 0;
}
.page-enter-active {
  transition: opacity 2s;
}
</style>
<script setup lang="ts">
useHead({
  title: "CocoaColor",
});
</script>
