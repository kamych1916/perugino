<template>
<div>
    <div class="container">
      <b-row class="mt-5 px-4">
        <b-col cols="10">
          <b-row>
            <h6>Привет! Мы компания Perugino!</h6>
          </b-row>
          <b-row>
            <h6>Помогаем бизнесу выделяться!</h6>
          </b-row>
          <b-row>
            <h6>Для нас пожелания клиента - закон!</h6>
          </b-row>
          <b-row>
            <h6>Листай вниз и узнай побольше о нас!</h6>
          </b-row>
        </b-col>
        <b-col>
          <b-row>
            <h6><nuxt-link to="/" style="color: #fff; text-decoration: underline"> кейсы</nuxt-link></h6>
          </b-row>
          <b-row>
            <h6><nuxt-link to="/" style="color: #fff; text-decoration: underline">о нас</nuxt-link></h6>
          </b-row>
          <b-row>
            <h6><nuxt-link to="/" style="color: #fff; text-decoration: underline">отзывы</nuxt-link></h6>
          </b-row>
          <b-row>
            <h6><nuxt-link to="/" style="color: #fff; text-decoration: underline">Контакты</nuxt-link></h6>
          </b-row>
        </b-col>
      </b-row>
      <div class="row mt-5 d-flex justify-content-center">
        <div class="wrap-canvas">
          <model-gltf :src="kek" :position="{ x: 0, y: -0.4, z: 1 }" :backgroundAlpha="1" backgroundColor="#2e102b" @on-load="onLoad" :rotation="rotation"></model-gltf>
          <div class="wrap-stroke-1">
            <h1 class="scroll-text" :style="{transform: scroll_text_right }">DIGITAL AGENCY PERUGINO DIGITAL AGENCY PERUGINO</h1>
            <h1 class="scroll-text-stroke" :style="{transform: scroll_text_right }">DIGITAL AGENCY PERUGINO DIGITAL AGENCY PERUGINO</h1>
          </div>
          <div class="wrap-stroke-2">
              <h1 class="scroll-text" :style="{transform: scroll_text_left }">PERUGINO DIGITAL AGENCY PERUGINO PERUGINO DIGITAL AGENCY PERUGINO</h1>
              <h1 class="scroll-text-stroke"  :style="{transform: scroll_text_left }">PERUGINO DIGITAL AGENCY PERUGINO PERUGINO DIGITAL AGENCY PERUGINO</h1>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="container">
        
      </div>

    </div>
  </div>

</template>

<script>
import { ModelGltf } from "vue-3d-model";

export default {
  components: { ModelGltf },
  data() {
    return {
      kek: "scene.gltf",
      rotation: {
        x: 0,
        y: 0,
        z: 0
      },
      scroll_text_right: '',
      scroll_text_left: '',
      count_scroll_left: 0,
      count_scroll_right: 0,
      scrollY: 0,
    };
  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll);

    
    setTimeout((this.stoke_vsb = true), 3000);
  },
  methods: {
    handleScroll(){
      if(window.scrollY>this.scrollY){
        this.scrollY = window.scrollY
        this.scroll_text_right = "translate3d(" + this.count_scroll_right++ +"px, 0px, 0px)";
        this.scroll_text_left = "translate3d(" + this.count_scroll_left-- +"px, 0px, 0px)";
      }else{
        this.scrollY = window.scrollY
        this.scroll_text_right = "translate3d(" + this.count_scroll_right-- +"px, 0px, 0px)";
        this.scroll_text_left = "translate3d(" + this.count_scroll_left++ +"px, 0px, 0px)";
      }

    },
    onLoad () {
        this.rotate();
    },
    rotate () {
        this.rotation.y += 0.01;
        requestAnimationFrame( this.rotate );
    },



  },
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  font-family: Formular, sans-serif;
}

.wrap-canvas {
  width: 50%;
  position:relative
}
.wrap-canvas div canvas {
  width: 100% !important;
  height: 700px !important;
}
.wrap-canvas .wrap-stroke-1{
  position: absolute;
  bottom: 50%;
  left: -150%;
}
.wrap-canvas .wrap-stroke-2{
  position: absolute;
  bottom: 30%;
  left: -150%;
}
.scroll-text{
  z-index: -2; position: absolute; color: white; font-size: 7em; font-family: 'Ilisarniq-Black'; white-space: nowrap; transition: 0.4s;
}
.scroll-text-stroke{
  z-index: 2; position: absolute; color: transparent; -webkit-text-stroke: 2px #fff; font-size: 7em; font-family: 'Ilisarniq-Black'; white-space: nowrap; transition: 0.4s;
}

</style>
