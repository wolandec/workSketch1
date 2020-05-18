<template>
  <button @click="$emit('click')" class="button">{{ text }}</button>
</template>

<script>
export default {
  name: "AtorpButton",
  props: {
    text: { type: String, require: false, default: "" },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../styles/_base.scss";

.button {
  font-size: 1.6rem;
  font-family: $font-display;
  width: 100%;
  display: block;
  border: none;
  padding: 0.8rem 1.2rem;
  background-color: $color-primary;
  color: $color-secondary;
}
</style>
