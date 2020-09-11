<template>
  <div>
    <transition  name="fadeOut" >
      <div v-if="load" class="wrap-loading">
        <div class="loading"></div>
        <h4 class="loading-text">Загрузка...</h4>
      </div>
    </transition>
    <div>
      <div ref="cursor" class="cursor"></div>
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
    
    setTimeout(() => {
      document.getElementsByTagName('html')[0].style.overflowY = 'scroll';
      this.load = false
    }, 1000);

    if(window.innerWidth>768){
      const cursor = this.$refs.cursor;
  
      document.addEventListener('mousemove', e => {
        cursor.setAttribute("style", "top: "+(e.pageY - 15)+"px; left: "+(e.pageX - 15)+"px;")
      })
  
      document.addEventListener('click', () => {
        cursor.classList.add("expand");
  
        setTimeout(() => {
          cursor.classList.remove("expand");
        }, 500)
      })
    }
  },
};
</script>  
<style>
html {
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
  margin: 0;
  padding: 0;
}
body {
  background: #0d0d0d;
  font-family: "Ilisarniq-Black", Formular;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  color: #fff;
  margin: 0;
  padding: 0;
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
  position: fixed;
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
    .cursor{
      display: none;
    }
}

.cursor {
    width: 45px;
    height: 45px;
    margin-left: -5px;
    border: 1px solid white;
    border-radius: 50%;
    position: absolute;
    z-index: 6;
    pointer-events: none;
}

.cursor::after {
    content: "";
    width: 25px;
    height: 25px;
    position: absolute;
    z-index: 6;
    border: 8px solid gray;
    border-radius: 50%;
    opacity: .5;
    top: -8px;
    left: -8px;
    animation: cursorAnim2 .5s infinite alternate;
}

@keyframes cursorAnim2 {
    from {
        transform: scale(1);
    }
    to {
        transform: scale(.4);
    }
}

@keyframes cursorAnim3 {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(3);
    }
    100% {
        transform: scale(1);
        opacity: 0;
    }
}

.expand {
    animation: cursorAnim3 .5s forwards;
    border: 1px solid red;
}


</style>
