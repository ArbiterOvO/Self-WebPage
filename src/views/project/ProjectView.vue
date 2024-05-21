<script setup>
import DAL from '@/components/Date-A-Live-Img.vue'
</script>

<template>
  <div class="project1">
    <div class="project-title">
      <h1>约战同人SLG</h1>
    </div>
    <DAL></DAL>
  </div>
</template>

<style>
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
  margin-left: 25%;
}
h1 {
  position: relative;
  left: 23%;
  top: 35%;
  font-size: 50px;
  font-family: 'YouYuan';
  font-weight: 900;
}
body {
  margin: 0;
  padding: 0;
  line-height: 1.5em;
}
</style>
