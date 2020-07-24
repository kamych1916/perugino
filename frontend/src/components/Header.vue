<template>
  <div class="header">
    <div class="container">
      <a href="/" target="_blank" class="logo">Perugino.club</a>
      <nav class="main-menu">
        <ul>
          <li :class="{current:indexOfLi == 0}" @click="goTo(0)">
            <a href="#" >Главная</a>
          </li>
          <li :class="{current:indexOfLi == 1}"  @click="goTo(1)">
            <a href="#" >About</a>
          </li>
          <li :class="{current:indexOfLi == 2}"  @click="goTo(2)">
            <a href="#" >Menu</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String,
    indexOfLi: Number,
  },
  data() {
    return {
      index: 0
    }
  },
  methods: {
    goTo(num){
      this.$parent.$options.methods.kek(num);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
