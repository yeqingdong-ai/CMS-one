<template>
  <div id="app">
      <ul class="tab">
        <li class="tab-item"><router-link to="/movie">
        <i class="fa fa-film"></i>电影</router-link></li>
        <li class="tab-item"><router-link to="/home">
        <i class="fa fa-map-o"></i>影院</router-link></li>
        <li class="tab-item"><router-link to="/new">
         <i class="fa fa-file-o"></i>新闻</router-link></li>
        <li class="tab-item"><router-link to="/my">
         <i class="fa fa-user"></i>我的</router-link></li>
      </ul>
      <router-view></router-view>
  </div>
</template>

<style lang="less">

  .tab{
    position: fixed;
    bottom: 0;
    left: 0;
     width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 50px;
    .tab-item{
        a{
            display: flex;
            // 改为Y轴
            flex-direction: column;
            align-items: center;
        }
    }
     .action{
         color: yellow;
     }
  
  }
</style>