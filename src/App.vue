<template>
  <div id="app" class="app">
    <div class="component">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    this.$router.push("/auth");
  },
};
</script>

<style lang="scss">
@import "./styles/_base.scss";
@import "./styles/_typography.scss";
@import "./styles/_component.scss";

.app {
  display: grid;
  width: 100vw;
  height: 100vh;
  background: url("../public/bg_game.png") no-repeat center fixed;
  background-size: cover;
}
</style>
