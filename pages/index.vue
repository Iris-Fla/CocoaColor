<template>
  <div class="container">
    <div
      class="card mx-auto my-5 shadow-lg mb-5 bg-body rounded-5"
      style="max-width: 25rem"
    >
      <img
        src="@/assets/topimg.jpg"
        alt="カードの画像"
        class="icon rounded-circle mx-auto mt-4"
        style="max-width: 150px"
      />
      <div class="card-body mb-3 ">
        <p class="card-title text-center cocoa">
          <span class="work">課題用</span>
        </p>
        <div
          class="mx-auto mb-3 text-center border-bottom border-secondry rounded-5"
          style="max-width: 320px"
        ></div>
        <p class="card-text mx-4 info">
          アイコン:ClipStudio<br />
          背景:illustrator<br />
          フォント:Kiwi Maru<br />
        </p>
        <div
          class="mx-auto mt-3 text-center border-bottom rounded-5"
          style="max-width: 320px"
        ></div>
        <p class="card-text mx-4 mt-4 fs-5">
          bootstrap5のカードを使って簡単なサイトを作ってみた。<br />
          メインカラー:<span>#8d5e59</span>
        </p>
        <NuxtLink
          href="./about"
          class="btn mt-4 mx-3 d-flex align-items-center rounded-pill text-center"
          style="height: 60px"
          >かわいい生き物が見れるボタン♪</NuxtLink
        >
        <NuxtLink
          href="./zundaerror"
          class="btn gb mt-4 mx-3 d-flex align-items-center rounded-pill text-center"
          style="height: 60px"
          >エラーページを表示するのだ</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn {
  color: var(--bs-white);
  background: #8d5e59;
}
span {
  color: #8d5e59;
}
.gb {
  color: var(--bs-white);
  background: #207c3f;
}
.work{
  font-size: 50px;
}
.info{
  font-size: 20px;
}
</style>
<script>
</script>

