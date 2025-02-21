<script setup>
import mangerCarousel from '@/components/JavaManager-Carousel.vue'
</script>

<template>
  <div class="project1">
    <div class="project-title">
      <h1>商品管理后台</h1>
    </div>
    <mangerCarousel></mangerCarousel>
  </div>
  <div class="title2">
    <div class="circle"></div>
    <h1>前端</h1>
  </div>
  <div class="content">
    <p>1.基于Vue3+element-plus搭建</p>
    <p>2.利用pinia搭建用户仓库，存储token和用户信息，利用axios实现接口传输，利用OSS对象存储存放图片</p>
    <p>3.有多个自定义组件，超过3个模块，实现了多种数据通信</p>
  </div>
  <div class="title2">
    <div class="circle"></div>
    <h1>后端</h1>
  </div>
  <div class="content">
    <p>1.基于ssmp开发，以mysql为数据库</p>
    <p>2.利用JWT搭建Service验证服务，用自定义拦截器搭建异常捕获，在合适时候把错误交给前端</p>
    <p>3.对DTO、PO、VO有合理的分装</p>
    <p>4.涉及超过10张表，利用触发器实现操作时间的记录</p>
    <p>5.使用OSS对象存储保存图片</p>
  </div>
</template>

<style scoped>
.introduce-img {
  border-radius: 20px;
  height: 730px;
  position: relative;
  margin-left: 10%;
}
.content p {
  font-family: 'YouYuan';
  font-size: 25px;
  text-decoration: underline;
}
.project1 {
  position: relative;
  margin-left: 20px;
  margin-top: 20px;
}
.project-title {
  border-radius: 50px;
  background: #55b9f3;
  box-shadow:
    20px 20px 60px #489dcf,
    -20px -20px 60px #62d5ff;
  width: 450px;
  height: 100px;
  margin-left: 35%;
}
.project-title h1 {
  position: relative;
  left: 18%;
  font-size: 50px;
  font-family: 'YouYuan';
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

body {
  margin: 0;
  padding: 0;
  line-height: 1.5em;
}
.circle {
  position: relative;
  top: 90px;
  left: 0px;
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background-color: crimson;
  border: 5px solid#740505;
}
.title2 {
  margin-left: 10%;
}
.title2 h1 {
  font-family: 'YouYuan';
  font-size: 50px;
  left: 4%;
  position: relative;
}
.content p {
  margin-left: 10%;
}
</style>