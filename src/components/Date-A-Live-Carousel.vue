<script setup>
const getImageUrl = (imageId) => {
  return new URL('../assets/Date-A-Live/' + imageId + '.png', import.meta.url).href
}
</script>

<template>
  <div class="carousel">
    <el-carousel :interval="3000" arrow="hover" motion-blur="true" height="700px">
      <el-carousel-item v-for="item in 6" :key="item">
        <img :src="getImageUrl(item)" alt="" width="100%" height="100%" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped>
.carousel {
  margin-top: 2%;
  padding-right: 10%;
  margin-left: 10%;
}
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item {
  margin-top: auto;
  background-color: #99a9bf;
  border-radius: 30px;
}
</style>
