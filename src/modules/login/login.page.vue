<template>
  <div class="login-page">
    <div class="glass">
      <LoginForm />
    </div>
    <div class="frosted-bg"></div>
  </div>
</template>

<script lang="ts" setup>
import axios from "axios";
import LoginForm from "./login-form.vue";
// 请求bing获取每日背景图片
const imgReq = axios
  .get("bing/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN")
  .then((res) => {
    return "url(" + "https://cn.bing.com" + res.data.images[0].url + ")";
  })
  .catch(() => {
    return "url(https://w.wallhaven.cc/full/72/wallhaven-72rxqo.jpg)";
  });
const imgUrl = ref<string>("");

onBeforeMount(async () => {
  imgUrl.value = await imgReq;
});
</script>

<style lang="scss" scoped>
div.login-page {
  height: 100%;

  .frosted-bg,
  .glass {
    background: v-bind(imgUrl);
    background-position: center;
    background-repeat: no-repeat;
    // background-size: contain;
  }

  .glass {
    padding: 116px 216px;
  }

  .frosted-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: 1s;
  }

  .glass {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1;
    width: 400px;
    height: 300px;
    transform: translate(-50%, -50%);
    transition: 1s;

    &:hover {
      box-shadow: 0 0.7px 1.7px rgba(0, 0, 0, 0.248),
        0 1.7px 4.3px rgba(0, 0, 0, 0.355), 0 3.5px 8.9px rgba(0, 0, 0, 0.445),
        0 7.3px 18.3px rgba(0, 0, 0, 0.552), 0 20px 50px rgba(0, 0, 0, 0.8);
    }

    &:hover ~ .frosted-bg {
      filter: blur(10px);
    }
  }
}
</style>
