<template>
  <div class="registration">
    <div class="registration__form">
      <div class="registration__title">
        <div class="heading-1">Регистрация</div>
      </div>
      <div class="registration__form-inputs">
        <atorp-input placeholder="Логин"></atorp-input>
        <atorp-input placeholder="Электронная почта"></atorp-input>
        <atorp-input placeholder="Пароль" type="password"></atorp-input>
        <atorp-input
          placeholder="Повторите пароль"
          type="password"
        ></atorp-input>
      </div>
      <div class="registration__footer">
        <div class="registration__back-link">
          <router-link to="/auth" class="link">Назад</router-link>
        </div>
        <atorp-button text="Регистрация"></atorp-button>
      </div>
    </div>
  </div>
</template>

<script>
import AtorpInput from "./AtorpInput";
import AtorpButton from "./AtorpButton";

export default {
  name: "Registration",
  components: { AtorpInput, AtorpButton },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../styles/_base.scss";
@import "../styles/_typography.scss";

.registration {
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 5fr 3fr;
  grid-template-rows: repeat(1, 1fr);

  &__form {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr min-content 1fr;
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
    & > :not(:last-child) {
      margin-bottom: 1.6rem;
    }

    display: grid;
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
