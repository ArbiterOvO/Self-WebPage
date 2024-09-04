<script setup>
import DAL from '@/components/Date-A-Live-Carousel.vue'
</script>

<template>
  <div class="project1">
    <div class="project-title">
      <h1>约战同人SLG</h1>
    </div>
    <DAL></DAL>
  </div>
  <div class="title2">
    <div class="circle"></div>
    <h1>玩法简介</h1>
  </div>
  <div class="content">
    <p>1. 游戏类型为回合制养成SLG。</p>
    <p>2. 玩家可以自由分配体力，在地图上触发交互事件。</p>
    <p>3. 战斗为回合制，一个队伍中最多4个人，可自由编队，有普攻、技能、大招和特殊的灵装化模式。</p>
    <p>4. 可以通过赠送礼物、交互事件和战斗胜利获得经验，不同等级会解锁不同技能。</p>
    <p>5. 除了初始精灵（琴里）外，其他精灵需要通过对应的特殊事件来获得。</p>
  </div>
  <div class="title2">
    <div class="circle"></div>
    <h1>体力和时间系统</h1>
  </div>
  <img class="introduce-img" src="@/assets/Date-A-Live/images/home.png" />
  <div class="content">
    <p>1. 一天有5个时间段，前4个为白天，最后一个为黑夜，黑夜的事件会与白天有所不同。</p>
    <p>2. 在家中可以休息直接进入第二天，如果前一天晚上没有休息，第二天会直接跳过前2个时间段。</p>
    <p>3. 每次在地图上进行事件交互都会消耗1个时间段。</p>
  </div>
  <div class="title2">
    <div class="circle"></div>
    <h1>战斗系统</h1>
  </div>
  <img class="introduce-img" src="@/assets/Date-A-Live/images/fight.png" />
  <div class="content">
    <p>1. 回合制战斗中，角色可使用普攻、技能，进入特殊的灵装化模式后可以获得属性加成和使用绝招。</p>
    <p>2. 角色默认为半灵装状态，半灵装不能使用大招。进入灵装模式需要消耗灵力槽的灵力</p>
    <p>
      3.
      灵力可以通过战斗房间内胜利和事件获得，每次进入房间重置，上限可以通过地图上的事件增加和通关战斗房间获得。
    </p>
    <p>
      4.
      正常情况下攻击顺序都为一轮，无速度之分，除非某些控制和加速技能：四糸乃的冰冻、狂三的刻刻帝。
    </p>
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
  left: 22%;
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
