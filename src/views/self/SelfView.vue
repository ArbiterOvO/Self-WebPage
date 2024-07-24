<script setup></script>

<template>
  <section class="content">
    <section>
      <h2>基本信息</h2>
      <ul>
        <li>姓名: 张嘉磊</li>
        <li>年龄: 22岁</li>
        <li>居住地: 绍兴</li>
        <li>期望职业: Unity开发测试、Java后端</li>
      </ul>
    </section>

    <section>
      <h2>教育背景</h2>
      <ul>
        <li>2021-2025 中国计量大学 计算机科学与技术 本科</li>
        <li>专业成绩：GPA 3.13/4 （专业前20%）</li>
        <li>主修课程：Java程序设计、JavaWeb开发、计算机网络原理、计算机操作系统、数据结构与算法、软件工程等</li>
      </ul>
    </section>
    <section>
      <h2>专业技能</h2>
      <h3>Unity:</h3>
      <ul>
        <li>熟悉掌握 Unity 引擎操作和调试方法</li>
        <li>
          有过多种 2D 游戏开发经验,制作过的游戏 demo 超过 10 个,如: Rouge、平台跳跃、塔防、SLG
        </li>
        <li>熟悉 UGUI 和常用 UI 组件</li>
        <li>熟悉 Animator 行为树和有限状态机</li>
        <li>了解计算机图形和 URP</li>
      </ul>

      <h3>C#:</h3>
      <ul>
        <li>掌握并实际使用过多种设计模式,如单例模式、线程池</li>
        <li>掌握 JSON 数据存储和其他数据持久化技术</li>
        <li>掌握接口、携程、委托等技术,并能进行合理的封装</li>
        <li>熟悉常用数据结构和算法</li>
      </ul>
      <h3>Java:</h3>
      <ul>
        <li>
          熟悉 SpringBoot 集成 SSMP 的开发流程,参与制作了 2 个已上线模块的开发,提供给超过 100 人使用
        </li>
        <li>能够独立搭建较为完善的单体架构</li>
        <li>熟悉接口文档的编写规范,提高 30% 沟通效率,在团队中参与编写超过 20 个接口文档</li>
        <li>熟悉 MySQL、Redis 等关系型和非关系型数据库</li>
      </ul>

      <h3>前端:</h3>
      <ul>
        <li>熟悉基本 HTML、CSS,掌握 Vue.js 3、ElementUI,能参与基本的 Vue.js 3 网页开发</li>
        <li>独立制作过基于 Vue.js 3 和 ElementUI 的数据管理系统和个人网页</li>
        <li>掌握 Arcts 基础,能够进行鸿蒙应用的开发</li>
      </ul>
    </section>
    <section class="content-inner">
      <section>
        <h2>实习经历</h2>
        <ul>
          <li>2023/6/25——2023/8/25 杭州阿虎科技有限公司 Java后端</li>
          <li>能够在团队协作中进行积极有效的交流</li>
          <li>负责单个专项培训模块的开发</li>
          <li>能够使用ssmp开发后端接口和分析业务进行数据库的创建</li>
          <li>能够利用postman等工具进行接口测试</li>
        </ul>
      </section>
      <section>
        <h2>奖项及证书</h2>
        <ul>
          <li>CET6级</li>
          <li>学业优秀奖学金</li>
          <li>HarmonyOS应用开发基础认证</li>
          <li>acm二等奖</li>
        </ul>
      </section>

      <section>
        <h2>兴趣爱好</h2>
        <ul>
          <li>热爱编程,对新技术保持好奇心</li>
          <li>热爱游戏及创作,对内容玩法进行探讨</li>
        </ul>
      </section>
    </section>
  </section>
</template>

<style scoped>
h2 {
  color: #e65921;
}

h3 {
  color: #089ce1;
}

.content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-left: 20px;
  padding-top: 5px;
}

.content-inner {
  display: grid;
  grid-template-rows: repeat(3, 1fr);
}
</style>
