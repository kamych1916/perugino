<template>
  <div style="overflow: hidden">
    <!-- start header wrap -->
    <div class="header-wrap pl-3 pr-3 py-4" style="background-color: #0d0d0d;">
      <div class="header-front">
        <div class="header-front-text">Perugino</div>
        <b-button variant="white" @click="show_sidebar = true, backdrop_sidebar = true">
          <b-icon style="color: white; " icon="border-style" aria-hidden="true"></b-icon>
        </b-button>
      </div>

      <transition name="fadeInRight">
        <div v-if="show_sidebar" class="sidebar">
          <div>
            <b-row class="d-flex mx-2 my-3" style="justify-content: space-between">
              <h4>Меню</h4>
              <b-button
                class="close"
                style="margin-top: -7px; color: white;"
                @click="show_sidebar = false, backdrop_sidebar= false"
              >
                <b-icon style="color: #fff" icon="x" aria-hidden="true"></b-icon>
              </b-button>
            </b-row>
            <b-row class="mt-5">
              <b-col>
                <b-row class="d-flex justify-content-center">
                  <div @click="show_sidebar = false, backdrop_sidebar= false">
                    <nuxt-link to="/" v-scroll-to="{ el: '#case__wrap', offset: -200 }" style="text-decoration: underline; color: #fff" >кейсы</nuxt-link>
                  </div>
                </b-row>
                <b-row class="d-flex justify-content-center mt-5">
                  <div @click="show_sidebar = false, backdrop_sidebar= false">
                    <nuxt-link to="/" v-scroll-to="{ el: '#about-approach__wrap', offset: -200 }" style="text-decoration: underline; color: #fff">о нас</nuxt-link>
                  </div>
                </b-row>

                <b-row class="d-flex justify-content-center mt-5">
                  <div @click="show_sidebar = false, backdrop_sidebar= false">
                    <nuxt-link to="/" v-scroll-to="{ el: '#contact__wrap', offset: -200 }" style="text-decoration: underline; color: #fff">контакты</nuxt-link>
                  </div>
                </b-row>
              </b-col>
            </b-row>
          </div>
        </div>
      </transition>
      <transition name="fadeInRight">
        <div v-if="backdrop_sidebar" class="wrap-backdrop-sidebar">
          <div class="backdrop-sidebar" @click="backdrop_sidebar= false, show_sidebar = false"></div>
        </div>
      </transition>
    </div>
    <!-- end header wrap -->

    <!-- start main wrap -->
    <div class="container">
      <b-row class="mt-5 pt-5 d-flex justify-content-center">
        <h1 class="main-text">Помогаем бизнесу выделяться!</h1>
      </b-row>
      <div class="row mt-3 d-flex justify-content-center">
        <div class="wrap-canvas">
          <no-ssr>
            <model-gltf
              :src="kek"
              :position="{ x: 0, y: -0.4, z: 1 }"
              :backgroundAlpha="1"
              backgroundColor="#2e102b"
              @on-load="onLoad"
              :rotation="rotation"
            ></model-gltf>
          </no-ssr>
          <div class="wrap-stroke-1">
            <h1
              class="scroll-text"
              :style="{transform: scroll_text_right }"
            >DIGITAL AGENCY PERUGINO DIGITAL AGENCY PERUGINO DIGITAL AGENCY PERUGINO DIGITAL AGENCY PERUGINO</h1>
            <h1
              class="scroll-text-stroke"
              :style="{transform: scroll_text_right }"
            >DIGITAL AGENCY PERUGINO DIGITAL AGENCY PERUGINO DIGITAL AGENCY PERUGINO DIGITAL AGENCY PERUGINO</h1>
          </div>
          <div class="wrap-stroke-2">
            <h1
              class="scroll-text"
              :style="{transform: scroll_text_left }"
            >PERUGINO DIGITAL AGENCY PERUGINO PERUGINO DIGITAL AGENCY PERUGINO PERUGINO DIGITAL AGENCY PERUGINO PERUGINO DIGITAL AGENCY PERUGINO</h1>
            <h1
              class="scroll-text-stroke"
              :style="{transform: scroll_text_left }"
            >PERUGINO DIGITAL AGENCY PERUGINO PERUGINO DIGITAL AGENCY PERUGINO PERUGINO DIGITAL AGENCY PERUGINO PERUGINO DIGITAL AGENCY PERUGINO</h1>
          </div>
        </div>
      </div>
    </div>
    <!-- end main wrap -->

    <!-- start case wrap -->
    <div id="case__wrap">
      <div class="container mt-5 pt-5 pl-0">
        <div class="case__headline">
          <h1 data-aos="zoom-in" data-aos-duration="1000">КЕЙСЫ</h1>
          <h1 data-aos="zoom-in" data-aos-duration="1100">КЕЙСЫ</h1>
          <h1 data-aos="zoom-in" data-aos-duration="1200">КЕЙСЫ</h1>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000" class="case__headline_mobile text-center">Наши кейсы</div>
        <div class="d-flex justify-content-start mt-5">
          <div data-aos="fade-up" data-aos-duration="1000" style="width: 600px; height: 400px; background-color: #92acc3"></div>
        </div>
        <div class="d-flex justify-content-end mt-5 pt-5">
          <div data-aos="fade-up" data-aos-duration="1000" style="width: 600px; height: 400px; background-color: #92acc3"></div>
        </div>
      </div>
    </div>
    <!-- end case wrap -->

    <!-- start about-approach -->
    <div id="about-approach__wrap">
      <div class="container mt-5 pt-5 pl-0">
        <div class="about-approach__headline" style="">
          <h1 data-aos="zoom-in" data-aos-duration="1000" >О&nbsp;НАС</h1>
          <h1 data-aos="zoom-in" data-aos-duration="1100" >О&nbsp;НАС</h1>
          <h1 data-aos="zoom-in" data-aos-duration="1200" >О&nbsp;НАС</h1>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000" class="about-approach__headline_mobile text-center mb-5">Как мы работаем</div>
        <div  style="position: relative">
          <div data-aos="zoom-in" data-aos-duration="1000" class="about-approach__figure">  
            <svg  width="100%" viewBox="0 0 1216 1216" fill="none" xmlns="http://www.w3.org/2000/svg" class="outer-circle" style="z-index: 2; position: absolute; left: 0px; height: 100%">
              <circle cx="608" cy="608" r="607.5" stroke="white" stroke-opacity="0.1"></circle>
            </svg>
            <svg  width="100%" viewBox="0 0 890 890" fill="none" xmlns="http://www.w3.org/2000/svg" class="inner-circle" style="padding: 14%;">
              <circle cx="445" cy="445" r="444.5" stroke="white"></circle>
              <circle cx="445" cy="445" r="426.5" stroke="white" stroke-opacity="0.2"></circle> 
              <circle cx="445" cy="445" r="408.5" stroke="white" stroke-opacity="0.1"></circle> 
              <circle cx="445" cy="445" r="388.5" stroke="white" stroke-opacity="0.05"></circle> 
              <circle cx="445" cy="445" r="369.5" stroke="white" stroke-opacity="0.02"></circle>
            </svg>
          </div>
          <div class="about-approach__item about-approach__item--top px-3">
            <h4 class="title h4">Стратегия</h4> 
            <p>Исследуем компанию, её&nbsp;аудиторию
              и&nbsp;конкурентов. Находим и&nbsp;усиливаем конкурентные преимущества на&nbsp;уровне
              бренда, продукта и&nbsp;потребителя. Проектируем комплексный маркетинг
              и&nbsp;прогнозируем его прибыльность
              на&nbsp;несколько лет вперед.
            </p>
          </div>
          <div class="about-approach__item about-approach__item--left px-3">
            <h4 class="title h4">Продажи</h4> 
            <p>
              Считаем рентабельность каждого канала и&nbsp;перенаправляем инвестиции только в&nbsp;прибыльные.
              Автоматизируем отдел продаж, чтобы не&nbsp;терять заявки. Обучаем работе с&nbsp;сервисами,
              пишем скрипты для общения с&nbsp;клиентами.
            </p>
          </div>
          <div class="about-approach__item about-approach__item--center px-3">
            <h4 class="title h4">
              Perugino
            </h4>
          </div>
          <div class="about-approach__item about-approach__item--right px-3">
            <h4 class="title h4">Измеримое продвижение</h4> 
            <p>Задействуем множество каналов и&nbsp;отслеживаем эффективность каждого. Используем много
            разных каналов: баннеры, контекстные объявления, посты в&nbsp;соцсетях, публикации в&nbsp;СМИ.
            Делаем сильный контент, который вызывает желание купить.
            </p>
          </div>
          <div  class="about-approach__item about-approach__item--bottom px-3">
            <h4 class="title h4">Бренд</h4> 
            <p>Накапливаем цифровую аудиторию бренда и&nbsp;ведём с&nbsp;ней регулярную коммуникацию. Для
            этого создаём единый стиль и&nbsp;даём полезную информацию о&nbsp;продукте, которые
            транслируем через все каналы: сайт, социальные сети, реклама.
            </p>
          </div>

        </div>
      </div>
    </div>
        
    <!-- end about-approach -->
  
    <!-- start contact us wrap -->
    <div id="contact__wrap">
      <div class="container mt-5 pt-5 pl-0" style="min-height: 60vh">
        <div class="contact__headline">
          <h1 data-aos="zoom-in" data-aos-duration="1000">КОНТАКТЫ</h1>
          <h1 data-aos="zoom-in" data-aos-duration="1100">КОНТАКТЫ</h1>
          <h1 data-aos="zoom-in" data-aos-duration="1200">КОНТАКТЫ</h1>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000" class="contact__headline_mobile text-center mb-5">Наши контакты</div>
        <div class="d-flex justify-content-start mt-5 px-3">
          <div data-aos="fade-up" data-aos-duration="1000" style="width: 600px; height: 400px; ">
            <p>Хотите улучшить свой проект? В кратчайшие сроки решим Ваши потребности - пишите нам нам почту (отвечаем быстро)! </p> 
            <a href="mailto:krakhimov.it@gmail.com?subject=Давайте%20работать%20вместе!">
              <b-button class="px-5 contact_btn" squared>отправить письмо</b-button>
            </a> 
            <div class="pt-5">
              <p class="mb-0" style="color: #ccc; font-size: 12px">Design and development by <a style="color: #ccc; text-decoration: underline" href="https://www.instagram.com/kamol1916/">Kamol Rakhimov</a> </p>
              <p class="mb-0" style="color: #ccc; font-size: 12px">@2020 All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
import { ModelGltf } from "vue-3d-model";
// import ogImage from '~static/heading__img.png';
export default {
  components: { ModelGltf },
  data() {
    return {
      show_sidebar: false,
      backdrop_sidebar: false,
      count: 4,
      kek: "scene.gltf",
      rotation: {
        x: 0,
        y: 0,
        z: 0,
      },
      scroll_text_right: "",
      scroll_text_left: "",
      count_scroll_left: 0,
      count_scroll_right: 0,
      scrollY: 0,
    };
  },
  created() {
    if (process.client) {
      // AOS.init({ disable: "phone" });
      AOS.init();
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);

    setTimeout((this.stoke_vsb = true), 3000);
  },
  methods: {
    handleScroll() {
      if (window.scrollY > this.scrollY) {
        this.scrollY = window.scrollY;
        this.scroll_text_right =
          "translate3d(" + this.count_scroll_right++ + "px, 0px, 0px)";
        this.scroll_text_left =
          "translate3d(" + this.count_scroll_left-- + "px, 0px, 0px)";
      } else {
        this.scrollY = window.scrollY;
        this.scroll_text_right =
          "translate3d(" + this.count_scroll_right-- + "px, 0px, 0px)";
        this.scroll_text_left =
          "translate3d(" + this.count_scroll_left++ + "px, 0px, 0px)";
      }
    },
    onLoad() {
      this.rotate();
    },
    rotate() {
      this.rotation.y += 0.01;
      requestAnimationFrame(this.rotate);
    },
  },
};
</script>

<style>
.contact_btn {
  background-color: transparent; 
  border-color: #fff;
  transition: 0.6s;
}
.contact_btn:hover{
  background-color: #fff; 
  color: black
}
.contact__headline{
  position:absolute;
  right: 30px
}
.contact__headline_mobile{
  display: none;
}
.contact__headline h1:nth-child(1){
  position:absolute; right: 30px; top: -100px; font-size: 5em; font-family: Helvetica-Black; -webkit-text-stroke: 2px #fff; color: transparent
}
.contact__headline h1:nth-child(2){
  position:absolute; right: 30px; top: 0; font-size: 5em; font-family: Helvetica-Black;
}
.contact__headline h1:nth-child(3){
  position:absolute; right: 30px; top: 100px; font-size: 5em; font-family: Helvetica-Black; -webkit-text-stroke: 2px #fff; color: transparent
}
@media screen and (max-width: 1448px){
  .contact__headline h1:nth-child(1){
    position:absolute; right: 30px; top: -120px; font-size: 3em;
  }
  .contact__headline h1:nth-child(2){
    position:absolute; right: 30px; top: -60px; font-size: 3em; 
  }
  .contact__headline h1:nth-child(3){
    position:absolute; right: 30px; top: 0; font-size: 3em;
  }
}
/* исправить css - везде много говна, убрать дублирование */
@media screen and (max-width: 768px){
  .contact__headline{
    display: none;
  }
  .contact__headline_mobile{
    display: block;
  }
}
/* wrap hedaer  */
.header-wrap {
  position: fixed;
  top: 0;
  margin: 0;
  width: 100%;
  z-index: 3;
}
.header-front {
  background-color: #0d0d0d;
  display: flex;
  justify-content: space-between;
  max-width: 1140px;
  margin: 0 auto;
}
.header-front-text {
  border-radius: 5px;
  color: white;
}
.sidebar {
  overflow-y: auto;
  flex-direction: column;
  position: fixed !important;
  z-index: 5;
  top: 0;
  height: 100vh;
  width: 300px;
  right: 0;
  max-width: 100% !important;
  margin: 0 !important;
  outline: 0;
  transform: translateX(0);
  background-color: #0d0d0d;
  padding: 1rem !important;
}
.wrap-backdrop-sidebar {
  position: absolute;

}
.backdrop-sidebar {
  position: fixed;
  top: -100px;
  left: -120px;
  z-index: 4;
  width: 110vw;
  height: 120vh;
  opacity: 0.3;
  transition: ease 0.3s;
  background-color: #2e343a !important;
}

/* main container  */
.container {
  margin: 0 auto;
  min-height: 100vh;
  font-family: Formular, sans-serif;
}
.main-text {
  font-size: 0.9em;
}
.wrap-canvas {
  width: 50%;
  position: relative;
}
.wrap-canvas div canvas {
  width: 100% !important;
  height: 700px !important;
}
.wrap-canvas .wrap-stroke-1 {
  position: absolute;
  bottom: 50%;
  left: -250%;
}
.wrap-canvas .wrap-stroke-2 {
  position: absolute;
  bottom: 30%;
  left: -250%;
}
.scroll-text {
  z-index: -2;
  position: absolute;
  color: white;
  font-size: 7em;
  font-family: "Ilisarniq-Black";
  white-space: nowrap;
  transition: 0.4s;
}
.scroll-text-stroke {
  z-index: 2;
  position: absolute;
  color: transparent;
  -webkit-text-stroke: 2px #fff;
  font-size: 7em;
  font-family: "Ilisarniq-Black";
  white-space: nowrap;
  transition: 0.4s;
}
.quick-menu {
  right: 20% !important;
}
.quick-menu > .menu .core-menu .bar,
.quick-menu > .menu .core-menu .bar:after,
.quick-menu > .menu .core-menu .bar:before {
  background-color: black !important;
}
.quick-menu .sub-menu a {
  color: black !important;
}

.fadeInRight-enter-active {
  animation: fadeInRight 0.5s;
}
.fadeInRight-leave-active {
  animation: fadeOutRight 0.5s;
}

@keyframes fadeInRight {
  0% {
    opacity: 0;
    transform: translateX(20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes fadeOutRight {
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(20px);
  }
}
/* wrap case */
.case__headline{
  position:absolute;
  right: 30px
}
.case__headline_mobile{
  display: none;
}
.case__headline h1:nth-child(1){
  position:absolute; right: 30px; top: -100px; font-size: 5em; font-family: Helvetica-Black; -webkit-text-stroke: 2px #fff; color: transparent
}
.case__headline h1:nth-child(2){
  position:absolute; right: 30px; top: 0; font-size: 5em; font-family: Helvetica-Black;
}
.case__headline h1:nth-child(3){
  position:absolute; right: 30px; top: 100px; font-size: 5em; font-family: Helvetica-Black; -webkit-text-stroke: 2px #fff; color: transparent
}
@media screen and (max-width: 1448px){
  .case__headline h1:nth-child(1){
    position:absolute; right: 30px; top: -120px; font-size: 3em;
  }
  .case__headline h1:nth-child(2){
    position:absolute; right: 30px; top: -60px; font-size: 3em; 
  }
  .case__headline h1:nth-child(3){
    position:absolute; right: 30px; top: 0; font-size: 3em;
  }
}
@media screen and (max-width: 768px){
  .case__headline{
    display: none;
  }
  .case__headline_mobile{
    display: block;
  }

}




/* wrap about us*/
.about-approach__headline{
  position:absolute; left: 30px
}
.about-approach__headline_mobile{
  display: none;
}
.about-approach__headline h1:nth-child(1){
  width: fit-content; position:absolute; left: 30px; top: -100px; font-size: 5em; font-family: Helvetica-Black; -webkit-text-stroke: 2px #fff; color: transparent
}
.about-approach__headline h1:nth-child(2){
  width: fit-content; position:absolute; left: 30px;  font-size: 5em; font-family: Helvetica-Black;
}
.about-approach__headline h1:nth-child(3){
  width: fit-content; position:absolute; left: 30px; top: 100px; font-size: 5em; font-family: Helvetica-Black; -webkit-text-stroke: 2px #fff; color: transparent
}
@media screen and (max-width: 1448px){
  .about-approach__headline h1:nth-child(1){
    position:absolute; right: 30px; top: -120px; font-size: 3em;
  }
  .about-approach__headline h1:nth-child(2){
    position:absolute; right: 30px; top: -60px; font-size: 3em; 
  }
  .about-approach__headline h1:nth-child(3){
    position:absolute; right: 30px; top: 0; font-size: 3em;
  }
}
@media screen and (max-width: 768px){
  .about-approach__headline{
    display: none;
  }
  .about-approach__headline_mobile{
    display: block;
  }
}
.about-approach__item {
    width: 30%;
    position: absolute;
    background: #0d0d0d;
    font-size: 0.6em;
}
.about-approach__item--top {
    width: 35%;
    left: 50%;
    top: 10%;
    transform: translate3d(-50%,0,0);
    padding: 15px 60px 120px;
}
.about-approach__item--left {
    top: 50%;
    transform: translate3d(0,-50%,0);
    left: 6%;
    padding: 85px 8% 85px 0;
}
.about-approach__item--center{
    top: 50%;
    transform: translate3d(0,-50%,0);
    left: 44%;
    padding: 85px 8% 85px 0;
}
.about-approach__item--right {
    top: 50%;
    transform: translate3d(0,-50%,0);
    padding: 85px 0;
    right: 2%;
    width: 33%;
}
.about-approach__item--bottom {
    left: 50%;
    bottom: 10%;
    transform: translate3d(-50%,0,0);
    padding: 15px 5%;
    width: 30%;
}
@media screen and (max-width: 1024px){
  .about-approach .outer-circle {
      display: none;
  }
  .about-approach .inner-circle {
    padding: 0;
  }
}
@media screen and (max-width: 800px){
  .about-approach__item--top {
    left: 0;
    top: 10%;
  }
  .about-approach__item--bottom, .about-approach__item--left, .about-approach__item--right, .about-approach__item--top {
      width: 44%;
      padding: 10px;
      transform: translateZ(0);
  }
}
@media (max-width: 768px){
  .about-approach__figure {
    display: none;
  }
  .about-approach__item--center{
    display: none;
  }
  .about-approach__item--bottom, .about-approach__item--left, .about-approach__item--right, .about-approach__item--top {
    width: 100%;
    left: 0;
    top: 0;
  }
  .about-approach__item {
      width: 100%;
      position: relative;
  }
  .about-approach__item+.about-approach__item {
    margin-top: 90px;
  }
}
</style>
