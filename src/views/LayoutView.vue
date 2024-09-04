<script setup>
import { ref } from 'vue'
const currentPage = ref(0)
const changeLi = (index) => {
  if (index == currentPage.value) {
    return {
      left: '20px'
    }
  }
}
</script>

<template>
  
  <!-- 左上角头像 -->
  <div class="border-square-out">
    <div class="border-circle-out"></div>
    <div class="border-circle"></div>
    <div class="border-square"></div>
    <div class="tag"></div>
  </div>
  <!-- 左侧导航栏 -->
  <el-container class="layout-container">
    <nav>
      <ul>
        <li>
          <span :style="changeLi(0)" @click="(currentPage = 0), $router.push('/home')">首页</span>
        </li>
        <li>
          <span :style="changeLi(1)" @click="(currentPage = 1), $router.push('/self')"
            >个人介绍</span
          >
        </li>
        <li>
          <span :style="changeLi(2)" @click="(currentPage = 2), $router.push('/unityProject')"
            >unity项目</span
          >
        </li>
        <li>
          <span :style="changeLi(3)" @click="(currentPage = 3), $router.push('/javaProject')"
            >java项目</span
          >
        </li>
        <li :style="changeLi(4)">
          <span @click="(currentPage = 4), $router.push('/about')">相关信息</span>
        </li>
      </ul>
    </nav>
  </el-container>
  <!-- 左侧书签 -->
  <div class="bookmark-out"></div>
  <div class="bookmark">
    <div class="bookmark-circle-out"></div>
    <div class="bookmark-circle"></div>
    <p>Arbiter</p>
  </div>

  <div class="layout-main">
    <router-view class="router"></router-view>
  </div>
</template>

<style>
.border-circle {
  width: 190px;
  height: 190px;
  position: fixed;
  top: 40px;
  left: 10px;
  border-radius: 95px;
  background-color: coral;
}
.border-square {
  width: 98px;
  height: 190px;
  position: fixed;
  left: 0px;
  top: 40px;
  background-color: coral;
}
.border-square-out {
  width: 98px;
  height: 200px;
  position: fixed;
  left: 0px;
  top: 35px;
  background-color: rgb(122, 18, 13);
}
.border-circle-out {
  width: 200px;
  height: 200px;
  position: fixed;
  top: 35px;
  left: 5px;
  border-radius: 100px;
  background-color: rgb(122, 18, 13);
}
.tag {
  position: fixed;
  left: 21px;
  top: 52px;
  width: 160px;
  height: 160px;
  border-radius: 80px;
  border: 3px solid rgb(247, 30, 63);
  background-color: #f0ddc1;
  background-image: url(../assets/头像.png);
  background-size: cover;
}
.bookmark {
  position: fixed;
  left: 0px;
  bottom: 70px;
  width: 190px;
  height: 70px;
  background-color: coral;
}
.bookmark-out {
  position: fixed;
  left: 0px;
  bottom: 65px;
  width: 200px;
  height: 80px;
  background-color: rgb(122, 18, 13);
}
.bookmark p {
  margin-top: 6px;
  font-size: 40px;
  font-family: 'Apple Color Emoji';
  display: inline-block;
  font-weight: bold;
  color: #def;
  text-shadow:
    0 0 1px currentColor,
    -1px -1px 1px #000,
    0 -1px 1px #000,
    1px -1px 1px #000,
    1px 0 1px #000,
    1px 1px 1px #000,
    0 1px 1px #000,
    -1px 1px 1px #000,
    -1px 0 1px #000;
  -webkit-filter: url(#diff1);
  filter: url(#diff1); /*background:#def;padding:0 .2em*/
}
.bookmark-circle {
  position: fixed;
  left: 157px;
  bottom: 64px;
  width: 82px;
  height: 82px;
  border-radius: 42px;
  background-color: gainsboro;
  border-left: 0px solid rgb(247, 30, 63);
}
.bookmark-circle-out {
  position: fixed;
  left: 150px;
  bottom: 65px;
  width: 80px;
  height: 80px;
  border-radius: 40px;
  background-color: rgb(122, 18, 13);
}
.layout-header {
  width: 100%;
  height: 80px;
  background-color: brown;
  position: fixed;
  left: 0%;
  top: 0%;
  border-radius: 8px;
}
.layout-container {
  width: 210px;
  position: fixed;
  left: 0%;
  top: 25%;
}
body,
html {
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  background-color: gainsboro;
  display: block;
  color: black;
}
.layout-main {
  left: 12%;
  right: 0;
  top:1%;
  position: absolute;
  background-color: blanchedalmond;
  border-radius: 30px;
  box-shadow: -15px 0px 3px #e3ccaa;
  min-height: 98%;
}
.layout-main .router{
  min-height: 90%;
}

nav ul {
  padding: 0;
  list-style-type: none;
  transform: translateX(0.65em);
}

nav li {
  width: 8em;
  height: 2em;
  font-size: 25px;
  color: orange;
  box-sizing: border-box;
  border-left: 0.08em solid;
  position: relative;
  margin-top: 50px;
  cursor: pointer;
}

nav li::before,
nav li::after {
  content: '';
  position: absolute;
  width: inherit;
  border-left: 0.08em solid;
  z-index: -1;
}

nav li::before {
  height: 80%;
  top: 10%;
  left: -0.3em;
  filter: brightness(0.8);
}

nav li::after {
  height: 60%;
  top: 20%;
  left: -0.55em;
  filter: brightness(0.6);
}

nav li:hover span {
  transform: translateX(0.15em);
}

nav li span {
  position: relative;
  height: 120%;
  top: -10%;
  box-sizing: border-box;
  border: 0.08em solid;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
  text-transform: capitalize;
  transform: translateX(-0.65em);
  transition: 0.3s;
}
</style>
