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
  return new URL('/src/assets/首页/' + imageId + '.png', import.meta.url).href
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
  <section></section>
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
  <br v-for="item in 20" :key="item" />
</template>

<style>
.circleImage {
  position: relative;
  top: 200px;
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
