<template>
  <div class="reset">
    <div class="reset__form">
      <div class="reset__title">
        <div class="heading-1">Сброс пароля</div>
      </div>
      <div class="reset__form-inputs">
        <atorp-input
          placeholder="Электронная почта"
          v-show="!loading"
        ></atorp-input>
          <img
            src="../../public/Subtract.png"
            alt="Спиннер ожидания"
            class="spinner"
            v-show="loading"
          />
      </div>
      <div class="reset__footer">
        <div class="reset__back-link">
          <router-link to="/auth" class="link">
            Назад
          </router-link>
        </div>
        <atorp-button text="Сбросить пароль" v-show="!loading"></atorp-button>
      </div>
    </div>
  </div>
</template>

<script>
import AtorpInput from "./AtorpInput";
import AtorpButton from "./AtorpButton";

export default {
  name: "Reset",
  components: { AtorpInput, AtorpButton },
  data() {
    return { loading: false };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../styles/_base.scss";
@import "../styles/_typography.scss";

.reset {
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 5fr 3fr;
  grid-template-rows: repeat(1, 1fr);

  &__form {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    background-color: $color-secondary;
    grid-column: 2/-1;
    grid-row: 1/-1;
    justify-items: center;
  }

  &__title {
    align-self: start;
    margin-top: 6rem;
  }

  &__form-inputs {
    display: grid;
    justify-items: center;
    width: 60%;
    align-self: center;
  }

  &__footer {
    display: grid;
    justify-items: center;
    width: 60%;
    align-self: end;
    margin-bottom: 4rem;
  }

  &__back-link {
    margin-bottom: 1.2rem;
  }
}
</style>
