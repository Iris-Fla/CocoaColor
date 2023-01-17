<template>
  <div class="container">
    <div
      class="card mx-auto my-5 shadow-lg mb-5 bg-body rounded-5"
      style="max-width: 25rem"
    >
      <img
        src="@/assets/about.jpg"
        class="card-img-to rounded-5 rounded-bottom"
        alt="..."
      />
      <div class="card-body mb-3">
        <p class="card-title text-center">{{ error }}</p>
        <p class="card-text text-center cocoa title_text">
          <span>エラー</span>
        </p>
        <p class="card-text text-center fs-5">
          なのだ by <span class="zunda">ずんだもん</span>
        </p>
        <NuxtLink
          href="/"
          class="btn mt-4 mx-3 d-flex align-items-center text-center rounded-pill text-center"
          style="height: 60px"
          >詰んだもんなのだ</NuxtLink
        >
      </div>
    </div>
  </div>
</template>
<style scoped>
.cocoa {
  color: #207c3f;
}
.btn {
  color: var(--bs-white);
  background: #207c3f;
}
.title_text {
  font-size: 100px;
}
.zunda {
  font-size: 30px;
  color: #207c3f;
}
</style>
<script setup lang="ts">
useHead({
  title: "CocoaColor | エラーなのだ",
});
const error = useError();
</script>
