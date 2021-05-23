<template>
    <div>
        <Nav/>
    <swiper ref="mySwiper" :options="swiperOptions">
         <swiper-slide class="item"><img src="/image/p01.jpg" alt="" class="ig"></swiper-slide>
         <swiper-slide class="item"><img src="/image/p02.jpg" alt="" class="ig"></swiper-slide>
         <swiper-slide class="item"><img src="/image/ASD.png" alt="" class="ig"></swiper-slide>
         <swiper-slide class="item"><img src="/image/ASD1.jpg" alt="" class="ig"></swiper-slide>
         <swiper-slide class="item"><img src="/image/img.jpg" alt="" class="ig"></swiper-slide>
         <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <ul class="tabs">
        <li class="tabs-item " :class="{action: items === 'hoting'}" @click="hander('hoting')">正在热映</li>
        <li class="tabs-item " :class="{action: items === 'coming'}" @click="hander('coming')">即将上映</li>
    </ul>
     <!-- 电影数据列表 -->
     <ul class="lis" v-if="moviesStatus">
         <li class="it" v-for="ele in movies">
             <img :src="ele.poster" alt="" class="img1">
             <div>
                 <h1>电影名字：{{ ele.name }}</h1>
                 <p>观影评分：<span>8.5</span></p>
                 <p>主演：{{ ele.actors[0].name }}</p>
                 <p>地区：{{ ele.nation }}</p>
                 <p>上映时间：{{ele.premiereAt}}</p>
             </div>
             <div class="p">购票</div>
         </li>
     </ul>

       <Loading v-else/>
    </div>
</template>
<script>
import Nav from '../../components/nav/index'
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import { getHotList,getWillList } from '../../api/movie.js'
import Loading from '../../components/Loading/loading'
export default {
   components: {
       Nav,
       Swiper,
       SwiperSlide,
       Loading
   },
    data() {
      return {
        movies: [],
        moviesStatus: false,  
        items: 'hoting',
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination'
          },
          // Some Swiper option/callback...
        }
      }
    },
     directives: {
       swiper: directive
     },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
    created() {
        this.moviesStatus = false
        getHotList().then(response =>{
          console.log(response.data,'热映电影')
          this.movies = response.data.data.films
          this.moviesStatus = true
        })
    },
    mounted() {
      console.log('Current Swiper instance object', this.swiper)
      this.swiper.slideTo(3, 1000, false)
    },
    
    methods: {
        hander(type) {
           if(type === 'hoting'){
              this.items = 'hoting'
              this.moviesStatus = false
              getHotList().then(response => {
                  console.log(response.data, '热映电影')
                  this.movies = response.data.data.films
                  this.moviesStatus = true
              })
           }else if(type === 'coming'){
               this.items = 'coming'
               this.moviesStatus = false
               getWillList().then(response => {
                   console.log(response.data,'即将上映电影')
                   this.movies = response.data.data.films
                   this.moviesStatus = true
               })
           }
        },
       
    }
 
}
</script>
<style lang="less" scoped>
  .item{
      height: 100%;
  }
  .ig{
      width: 100%;
  }
  .tabs{
      display: flex;
      justify-content: space-around;
      align-items: center;
      font-size: 16px;
      height: 45px;
      .tabs-item{
          padding-top: 10px;
          padding-bottom: 8px;
      }
      .action{
          border-bottom: 2px solid yellow;
      }
  }
  .img1{
    width: 70px;
   }
   .it{
       display: flex;
       justify-content: space-around;
       align-content: center;
       padding-bottom: 10px;
       padding-top: 10px;
   }
   .p{
    border: 1px solid#BAC80F;
    color:  #BAC80F;
    width: 50px;
    height: 25px;
    text-align: center;
    line-height: 25px;
    margin-top: 30px;
   }
</style>