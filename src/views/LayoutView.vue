<script setup></script>

<template>
  <el-container class="layout-container">
    <nav>
      <ul>
        <li><span @click="$router.push('/')">首页</span></li>
        <li><span @click="$router.push('/self')">个人介绍</span></li>
        <li><span @click="$router.push('/project')">unity项目</span></li>
        <li><span @click="$router.push('/about')">相关信息</span></li>
      </ul>
    </nav>
  </el-container>
  <div class="layout-main">
    <router-view></router-view>
  </div>
</template>

<style>
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
  width: 200px;
  position: fixed;
  left: 0%;
  top: 25%;
}
body {
  background-color: blanchedalmond;
}
.layout-main {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 220px;
  top: 0;
  background-color: blanchedalmond;
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
