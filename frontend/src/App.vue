<template>
  <div id="app" :class="{activemenu:visible == 0}">
    
    <div class="header">
      <div class="container">
        <a href="/" target="_blank" class="logo">Perugino.club</a>
        <div @click="showToolBar(1)" class="menu-trigger">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav class="main-menu">
          <ul>
            <li
              :class="{current:indexOfLi == 0}"
              @click="moveTo(0), showToolBar(2)"
              style="cursor: pointer"
            >
              <a>Главная</a>
            </li>
            <li
              :class="{current:indexOfLi == 1}"
              @click="moveTo(1), showToolBar(2)"
              style="cursor: pointer"
            >
              <a>Услуги</a>
            </li>
            <li
              :class="{current:indexOfLi == 2}"
              @click="moveTo(2), showToolBar(2)"
              style="cursor: pointer"
            >
              <a>Контакты</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="fullpage-vertical">
      <div v-fullpage="opts" ref="fullpage">
        <div v-bind:style="{opacity: opacity}" class="page-1 page">
          <div class="container">
            <h1 class="part-1" v-animate="{value: 'fadeInUp'}">Digital агенство Perugino</h1>
            <h3 class v-animate="{value: 'fadeInUp'}">
              <span v-animate="{value: 'fadeInUp', delay: 200}"> - Привлекаем клиентов для малого и среднего бизнеса из интернета</span>  
              <br />
              <br />
              <span v-animate="{value: 'fadeInUp', delay: 400}"> - Вы получите первые продажи онлайн в течении 14 дней</span>
            </h3>
            <br />
            <br />
            <button @click="moveTo(2)" class="btn-start" v-animate="{value: 'fadeInUp', delay: 600}">ОСТАВИТЬ ЗАЯВКУ</button>
            <img v-animate="{value: 'fadeInUp'}" src="./assets/logo4.png" class="img-logo" alt />
          </div>
        </div>
        <div v-bind:style="{opacity: opacity}" class="page-2 page">
          <div class="container">
            <div class="page-2-block-text">
              <h1 class="part-2" v-animate="{value: 'fadeInUp'}">Наши услуги</h1>
              <h3
                class
                v-animate="{value: 'fadeInUp', delay: 400}"
              >- Оказываем полный цикл услуг digital маркетинга</h3>
            </div>
            <br />
            <div class="main-slider-block">
              <swiper class="swiper" :options="swiperOption">
                <swiper-slide
                  v-animate="{value: 'fadeInUp', delay: 100}"
                  style="display: flex; justify-content: center;"
                >
                  <div class="square">
                    <i class="fas fa-laptop-code" style="width: 70px; height: 70px;"></i>
                    <br />
                    <br />Разработка сайтов
                  </div>
                </swiper-slide>
                <swiper-slide
                  v-animate="{value: 'fadeInUp', delay: 300}"
                  style="display: flex; justify-content: center;"
                >
                  <div class="square">
                    <i class="fas fa-pencil-ruler" style="width: 70px; height: 70px;"></i>
                    <br />
                    <br />Разработка дизайн
                  </div>
                </swiper-slide>
                <swiper-slide
                  v-animate="{value: 'fadeInUp', delay: 500}"
                  style="display: flex; justify-content: center;"
                >
                  <div class="square">
                    <i class="fas fa-funnel-dollar" style="width: 70px; height: 70px;"></i>
                    <br />
                    <br />Digital Маркетинг
                  </div>
                </swiper-slide>
                <swiper-slide
                  v-animate="{value: 'fadeInUp', delay: 500}"
                  style="display: flex; justify-content: center;"
                >
                  <div class="square">
                    <i class="fas fa-newspaper" style="width: 70px; height: 70px;"></i>
                    <br />
                    <br />SEO & Копирайтинг
                  </div>
                </swiper-slide>
                <swiper-slide
                  v-animate="{value: 'fadeInUp', delay: 500}"
                  style="display: flex; justify-content: center;"
                >
                  <div class="square">
                    <i class="fas fa-mobile-alt" style="width: 70px; height: 70px;"></i>
                    <br />
                    <br />Mobile разработка
                  </div>
                </swiper-slide>
                <div v-animate="{value: 'fadeInUp', delay: 100}" class="swiper-pagination" slot="pagination"></div>
                <div 
                  v-animate="{value: 'fadeInUp', delay: 100}"
                  class="swiper-button-prev"
                  style="color: #fff"
                  slot="button-prev"
                ></div>
                <div
                  v-animate="{value: 'fadeInUp', delay: 100}"
                  class="swiper-button-next"
                  style="color: #fff"
                  slot="button-next"
                ></div>
              </swiper>
            </div>
          </div>
        </div>
        <div v-bind:style="{opacity: opacity}" class="page-3 page">
          <div class="container small">
            <div class="text-center">
              <h1 v-animate="{value: 'fadeInUp', delay: 100}">Наши контакты</h1>
            </div>
            <div class="row">
              <div class="col-md-6 grey-text">
                <p v-animate="{value: 'fadeInUp', delay: 200}">
                  <a>
                    <i aria-hidden="true" class="fa fa-address-card"></i>
                    <span>Камол Рахимов & Алекс Хегай </span>
                  </a>
                </p>
                <p v-animate="{value: 'fadeInUp', delay: 400}">
                  <a href="tel:79080351453">
                    <i aria-hidden="true" class="fa fa-phone"></i>
                    <span>+7 (908) 03-14-53</span>
                  </a>
                </p>
                <p v-animate="{value: 'fadeInUp', delay: 600}">
                  <a href="mailto:mollyparadise@gmail.com">
                    <i aria-hidden="true" class="fa fa-envelope"></i>
                    <span>info@perugino.club</span>
                  </a>
                </p>
              </div>
              <div class="col-md-6" v-animate="{value: 'fadeInUp', delay: 400}">
                <div class="form" >
                  <input v-model="postBody.name" type="text" name="name" placeholder="Ваше имя" required />
                  <input v-model="postBody.email" name="email" placeholder="Ваша почта" required type="email" />
                  <textarea v-model="postBody.message" name="message" placeholder="Ваше сообщение..." required></textarea>
                  <button class="btn" @click="SendToMail()">Оставить заявку</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="indicate-dots">
      <img src="./assets/scroll.gif" style="width: 50px" alt />
      <ul>
        <li :class="{current:indexOfLi == 0}" @click="moveTo(0)" style="cursor: pointer">
          <a></a>
        </li>
        <li :class="{current:indexOfLi == 1}" @click="moveTo(1)" style="cursor: pointer">
          <a></a>
        </li>
        <li :class="{current:indexOfLi == 2}" @click="moveTo(2)" style="cursor: pointer">
          <a></a>
        </li>
      </ul>
    </div>

    <footer class="footer">
      <div class="container">
        <ul class="social">

          <li>
            <a href="https://www.instagram.com/perugino.club/" target="_blank">
              <i aria-hidden="true" class="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://vk.com/kamych1916" target="_blank">
              <i aria-hidden="true" class="fab fa-vk"></i>
            </a>
          </li>
          <li>
            <p class="small">© 2020 Perugino.club</p>
          </li>
        </ul>
      </div>
    </footer>
    <img @click="moveNext()" src="./assets/scroll-down.gif" alt="" class="scroll-down">
  </div>
</template>


<script>
import axios from 'axios';

export default {
  name: "App",
  data() {
    var that = this;
    return {
      postBody:{
        name: null,
        email: null,
        message: null,
      },
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 10,
        centeredSlides: false,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      indexOfLi: 0,
      index: 0,
      opacity: 1,
      visible: 1,
      storeVisible: 0,
      opts: {
        start: 0,
        dir: "v",
        loop: false,
        duration: 0,
        beforeChange: function(ele, current, next) {
          that.indexOfLi = next;
          that.opacity = 0;
        },
        afterChange: function(ele, current) {
          that.opacity = 1;
          that.indexOfLi = current;
        }
      }
    };
  },
  created() {
    if (window.innerWidth <= 1024) {
      this.swiperOption.slidesPerView = 1;
      this.swiperOption.pagination.el = ".swiper-pagination";
      this.swiperOption.pagination.clickable = true;
      this.swiperOption.navigation = {};
    }

  },

  mounted() {
    // let url = new URL(window.location.href);
    // let param = url.searchParams.get("mess");
    // if(param == 'send'){
    //      http://localhost:3000/?mess=send
    //     console.log(param) // outputs 'yay'
    //     this.mvt()
    // }
  },
  methods: {
    moveTo: function(index) {
      this.$refs.fullpage.$fullpage.moveTo(index, true, true);
    },
    showToolBar(show) {
      if (this.storeVisible == show) {
        this.storeVisible = 0;
        this.visible = 1;
      } else if (show == 1) {
        this.storeVisible = 1;
        this.visible = 0;
      } else {
        this.storeVisible = 1;
        this.visible = 1;
      }
    },
    moveNext(){
      this.$refs.fullpage.$fullpage.moveNext();
    },
    SendToMail(){
      axios.post("/sendToMailMessage", this.postBody)
      .then( () => { 
        alert("Спасибо за оставленную завяку, мы Вам ответим в кратчайшие сроки!")
      })
      .catch(e =>{
        console.log(e)
      });
    }

  }
};
</script>

<style>
@import url("//unpkg.com/animate.css@3.5.2");
@import url("./body.css");
@import url("./header.css");
@import url("./indicate.css");
@import url("./footer.css");
@import url(https://fonts.googleapis.com/css?family=Montserrat:700);
#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0 !important;
  padding: 0 !important;
  overflow: hidden !important;
}
</style>
