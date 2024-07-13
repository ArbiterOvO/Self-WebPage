<script setup>
import { ref, onMounted } from 'vue'
// 创建一个布尔值变量showText，初始值为false
const showText = ref(false)
// 当组件挂载完成后，将showText的值设置为true
onMounted(() => {
  showText.value = true
})
</script>

<template>
  <body>
    <div class="main">
      <transition name="fade">
        <div v-if="showText" class="StartText">
          <p v-if="showText">WELCOME TO MY WEBSITE</p>
        </div>
      </transition>
    </div>
    <div class="box">
      <a @click="$router.push('/home')">ENTER</a>
      <span class="top"></span>
      <span class="bottom"></span>
      <span class="left"></span>
      <span class="right"></span>
    </div>
  </body>
</template>

<style>
.StartText {
  position: absolute;
  left: 7%;
  top: 25%;
  width: auto;
  font-family: Verdana;
  font-size: 110px;
  font-weight: bold;
  color: transparent;
  -webkit-text-stroke: 2px white;
  text-shadow: -3px 0 1px wheat;
}
/* 开始过度 */
.fade-enter-from {
  opacity: 0;
}
/* 开始过度了 */
.fade-enter-active {
  transition: opacity 3s;
}
/* 过度完成 */
.fade-enter-to {
  opacity: 1;
}
html,
body {
  margin-left: 0;
  margin-top: 0;
  margin-right: 0;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: silver;
}

.box {
  width: 9em;
  height: 3em;
  font-size: 30px;
  font-family: sans-serif;
  text-align: center;
  line-height: 3em;
  letter-spacing: 0.2em;
  position: relative;
  margin-left: -60%;
  margin-top: 190%;
  filter: blur(2px);
  transition: 0.5s;
}

.box:hover {
  filter: blur(0.2px);
}

.box::after {
  content: '';
  position: absolute;
  width: 3em;
  height: 3em;
  border: 1px solid red;
  border-radius: 50%;
  left: 3em;
  filter: opacity(0);
}

.box span:not(:first-child) {
  position: absolute;
  background-color: red;
  filter: opacity(0);
}

.box span.top,
.box span.bottom {
  width: 1px;
  height: 3em;
  left: 50%;
}

.box span.top {
  top: -3em;
}

.box span.bottom {
  bottom: -3em;
}

.box span.left,
.box span.right {
  width: 3em;
  height: 1px;
  top: 50%;
}

.box span.left {
  left: 0;
}

.box span.right {
  right: 0;
}
.box a {
  position: relative;
  top: 50%;
  left: 32%;
  text-decoration: none;
  cursor: pointer;
}
</style>
