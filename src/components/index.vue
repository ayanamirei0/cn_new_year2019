<template>
  <div class="new_year_2019">
    <!-- <h1>{{content}}</h1> -->
    <div class="logo_juren">
      <img
        src="../assets/img/logo.png"
        alt=""
      >
    </div>
    <ul class="list_new_year">
      <li
        class="item" 
        v-for="(item,index) in img_list"
        :key="index"
        @click="switchTab(index)"
      >
        <img
          :class="num == item.id ? '' : 'normal'"
          :src="num == item.id ? item.img_active : item.img"
          alt=""
        >
      </li>
    </ul>
    <div class="xunchun new_year_content" v-show = "num === 1">
        <div class="nav_button">
            <img src="../assets/img/page_up.png" @click="pageUp" alt="">
            <img src="../assets/img/page_down.png" @click="pageDown" alt="">
            <img src="../assets/img/close.png" @click="closePage" alt="">
        </div>
        <img src="../assets/img/second_content_title.png" alt="">
        <p>
            一种传说是：历史上黄帝曾跟蚩尤大战，黄帝在农历正月初一那一天战胜了蚩尤，人们就把这一天定为节日，以纪念黄帝的战绩。
        </p>
        <p>
            另一种传说：我国古代有一种叫做“年”的奇怪的野兽，其生性异常凶残，每年冬春之交，常出来伤害人畜，毁坏田园，闹得人心惶惶。当时，有些比较聪明勇敢的人，想出了巧妙之计：在院子架起木柴堆，大门外摆着桌子，桌上放上猪头、牛头、羊头、狗头和雄黄酒等等。

        </p>
        <p>
            那个叫“年”的怪兽看见猪头、羊头等之后，立即赶来，张开血盆大口，想饱餐一顿。人们看见怪兽来了，马上点燃柴堆，敲起锣鼓，大放鞭炮，顿时火光冲天，锣鼓、鞭炮响声不绝，把怪兽吓得落荒而逃。于是，人们互相祝贺平安，后来人们就把正月初一定为吉祥的日子。

        </p>
    </div>
    <div class="naochun new_year_content" v-show = "num === 2">
        <div class="nav_button">
            <img src="../assets/img/page_up.png" @click="pageUp" alt="">
            <img src="../assets/img/page_down.png" @click="pageDown" alt="">
            <img src="../assets/img/close.png" @click="closePage" alt="">
        </div>
        <img src="../assets/img/third_content_title.png" alt="">
    </div>
    <div class="huanchun new_year_content" v-show = "num === 3">
        <div class="nav_button">
            <img src="../assets/img/page_up.png" @click="pageUp" alt="">
            <img src="../assets/img/page_down.png" @click="pageDown" alt="">
            <img src="../assets/img/close.png" @click="closePage" alt="">
        </div>
        <img src="../assets/img/fourth_content_title.png" alt="">
    </div>
    <div class="jichun new_year_content" v-show = "num === 4">
        <div class="nav_button">
            <img src="../assets/img/page_up.png" @click="pageUp" alt="">
            <img src="../assets/img/page_down.png" @click="pageDown" alt="">
            <img src="../assets/img/close.png" @click="closePage" alt="">
        </div>
        <img src="../assets/img/fifth_content_title.png" alt="">
    </div>
    <div class="hechun new_year_content" v-show = "num === 5">
        <div class="nav_button">
            <img src="../assets/img/page_up.png" @click="pageUp" alt="">
            <img src="../assets/img/page_down.png" @click="pageDown" alt="">
            <img src="../assets/img/close.png" @click="closePage" alt="">
        </div>
        <img src="../assets/img/sixth_content_title.png" alt="">
    </div>
  </div>
</template>

<script>
// @import '../assets/styles/color.less'
export default {  
  data() {
    return {
      num: "0",
      img_list: [
        {
          id: "0",
          page: "/",
          img: require("../assets/img/00.png"),
          img_active: require("../assets/img/00_selected.png")
        },
        {
          id: "1",
          page: "/src/components/xunchun.vue",
          img: require("../assets/img/01.png"),
          img_active: require("../assets/img/01_selected.png")
        },
        {
          id: "2",
          page: "/src/components/naochun.vue",
          img: require("../assets/img/02.png"),
          img_active: require("../assets/img/02_selected.png")
        },
        {
          id: "3",
          page: "/src/components/huanchun.vue",
          img: require("../assets/img/03.png"),
          img_active: require("../assets/img/03_selected.png")
        },
        {
          id: "4",
          page: "/src/components/jichun.vue",
          img: require("../assets/img/04.png"),
          img_active: require("../assets/img/04_selected.png")
        },
        {
          id: "5",
          page: "/src/components/hechun.vue",
          img: require("../assets/img/05.png"),
          img_active: require("../assets/img/05_selected.png")
        }
      ]
    };
  },
  methods: {
    switchTab(index) {
        console.log(index);
        this.num = index;
        document.getElementById('app').className = "theme_" + this.num;
    },
    pageUp() {
        if(this.num == 0){
            return
        }else{
            let page = --this.num;
            console.log(this.num, '--');
            document.getElementById('app').className = "theme_" + page;
        }        
    },
    pageDown() {
        if(this.num == 5){
            this.num = 0;
            document.getElementById('app').className = "theme_" + 0;
        }else{
            let page = ++this.num;
            console.log(this.num, '++');
            document.getElementById('app').className = "theme_" + page;    
        } 
    },
    closePage() {
        this.num = 0;
        document.getElementById('app').className = "theme_" + 0;
    }
  }
};
</script>


<style lang="less" scoped>
@import url('../assets/styles/theme_change.less');
.new_year_2019 {
  background-image: url('../assets/img/bg_first.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 1920px;
  height: 1080px;
  .logo_juren {
    padding: 100px 0 0 24px;
  }
  .list_new_year {
    list-style: none;
    margin-top: 100px;
    padding: 0;
    .item {
      width: 204px;
      height: 65px;
      .normal {
        padding: 22px 0 22px 18px;
      }
    }
  }
  .new_year_content{
      width: 1100px;
      position: relative;
      bottom: 46%;
      left: 43%;
      .nav_button{
            position: absolute;
            top: 1%;
            right: 35%;
            img{
                padding-right: 10px;
            }
        }
      p{
           color: #e21205;
           font-size: 26px;
           width: 720px;
           text-indent: 53px;
           line-height: 40px;
           margin: 0
      }
  }
}
</style>



