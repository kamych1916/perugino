<template>
  <div>
    <transition  name="fadeOut" >
      <div v-if="load" class="wrap-loading">
        <div class="loading"></div>
        <h4 class="loading-text">Загрузка...</h4>
      </div>
    </transition>
    <div>
      <Nuxt />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      load: true,
    };
  },
  mounted() {
    setTimeout((document.getElementsByTagName('html')[0].style.overflowY, this.load = false), 0);
  },
};
</script>  
<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  scroll-behavior: smooth;
  overflow-x: hidden;
  overflow-y: hidden;
}
body {
  background: #0d0d0d;
  font-family: "Helvetica-Black";
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  color: #fff;
}

@font-face {
  font-family: "Helvetica-Black";
  src: url("~static/fonts/18985.otf") format("opentype");
}
@font-face {
  font-family: "Ilisarniq-Black";
  src: url("~static/fonts/Ilisarniq-Black.otf") format("opentype");
}
@font-face {
  font-family: "Formular";
  src: url("~static/fonts/Formular-Medium.ttf") format("opentype");
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
.wrap-loading {
  position: absolute;
  top: 0;
  z-index: 9999;
  width: 102%;
  height: 100vh;
  background-color: #161618;
  text-align: center;
}
.loading {
  margin: 100px auto 0 auto;
  width: 30%;
  height: 60%;
  background-image: url("~static/load.gif");
  background-size: 100% 100%;
}
.loading-text {
  font-family: Formular, sans-serif;
  margin: 0 auto;
}
.fadeOut-enter-active {
  animation: fadeOut 0.5s;
}
.fadeOut-leave-active {
  animation: fadeOut 0.5s;
}

@keyframes fadeOut {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@media screen and (max-width: 375px) {
    html, body {
        overflow-x: hidden !important;
    }

}

@media screen and (max-width: 768px) {
    html, body {
        overflow-x: hidden !important;
    }
    .loading{
      width: 100%;
    }
}
</style>
