<script setup>
import { computed, ref } from 'vue'
//圆形分布
const getAxis = (angle) => {
  return `translate(${300 * Math.sin((angle * Math.PI) / 180) + 300}px, ${300 - 300 * Math.cos((angle * Math.PI) / 180)}px)`
}
const transform = computed(() => {
  let num = 6
  let angle = 360 / num
  let arr = []
  for (let index = 0; index < num; index++) {
    arr.push(index * angle)
  }
  arr = arr.map((d) => getAxis(d))
  return arr
})
//图片
const getImageUrl = (imageId) => {
  return new URL('/assets/home/' + imageId + '.png', import.meta.url).href
}
//轮播图
const currentIndex = ref(1)
var timer = setInterval(() => {
  currentIndex.value++
  // console.log(currentIndex.value)
  if (currentIndex.value > 6) {
    currentIndex.value = 1
  }
}, 3000)
const setBorder = (index) => {
  if (index === currentIndex.value) return 'red solid 5px'
  else return 'white solid 5px'
}
const resetTimer = () => {
  clearTimeout(timer)
  timer = setInterval(() => {
    currentIndex.value++
    // console.log(currentIndex.value)
    if (currentIndex.value > 6) {
      currentIndex.value = 1
    }
  }, 3000)
}
</script>

<template>
  <!-- 圆形轮播图 -->
  <div class="circleImage">
    <ul :style="{ 'background-image': 'url(' + getImageUrl(currentIndex) + ')' }">
      <li
        v-for="(item, index) in transform"
        :key="item"
        :style="{ transform: item, border: setBorder(index + 1) }"
        @click="resetTimer(), (currentIndex = index + 1)"
      >
        <div style="width: 150px; height: 150px; border-radius: 50%">
          <img :src="getImageUrl(index + 1)" width="100%" height="100%" />
        </div>
      </li>
    </ul>
  </div>
  <div class="home-text">
    <p class="title">欢迎来到我的站点</p>
    <p class="content">此网站只用于项目和个人介绍</p>
  </div>
  <div class="icon">
    <img src="@/assets/icon/UNITY.png">
    <img src="@/assets/icon/JAVA.png">
    <img src="@/assets/icon/VUE.png">
  </div>
</template>

<style scoped>
.icon{
  margin-left: 50%;
  margin-top: 5%
}
.icon img{
  width: 100px;
  height: 100px;
}
.home-text{
  margin-left: 50%;
  margin-top: -12%;
}
.home-text .title{
  position: relative;
  font-size: 90px;
  font-family: 'YouYuan';
  display: inline-block;
  font-weight: bold;
  color: rgb(10, 233, 249);
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
}
.home-text .content{
  font-size: 30px;
}
.circleImage {
  position: relative;
  top: 250px;
  left: 200px;
}
.circleImage img {
  border-radius: 50%;
}
.circleImage ul,
.circleImage li {
  margin: 0;
  list-style-type: none;
  padding: 0;
}
.circleImage ul {
  width: 400px;
  height: 400px;
  background-color: #fff;
  border-radius: 50%;
  position: relative;
  background-size: cover;
  border: black solid 5px;
}
.circleImage li {
  width: 150px;
  height: 150px;
  position: absolute;
  background-color: rgb(255, 0, 0);
  color: white;
  font-size: 25px;
  border-radius: 50%;
  line-height: 80px;
  text-align: center;
  /* left: 50%; */
  margin-left: -180px;
  margin-top: -180px;
  transform-origin: 0px 0px;
  border: white solid 5px;
  cursor: pointer;
}
</style>
