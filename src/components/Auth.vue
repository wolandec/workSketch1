<template>
  <div class="auth">
    <div class="auth__form">
      <div class="auth__title">
        <div class="heading-1">Авторизация</div>
      </div>
      <div class="auth__form-inputs">
        <div class="auth__email">
          <atorp-input placeholder="Логин/Электронная почта"> </atorp-input>
        </div>
        <atorp-input placeholder="Пароль" type="password"></atorp-input>
        <div class="auth__forget-pswd">
          <router-link to="/reset" class="link u-text-size-12px">
            Забыли пароль
          </router-link>
        </div>
      </div>
      <div class="auth__footer">
        <div class="auth__reg-link">
          <router-link to="/registration" class="link">
            Регистрация
          </router-link>
        </div>
        <atorp-button text="Авторизация"></atorp-button>
      </div>
    </div>
  </div>
</template>

<script>
import AtorpInput from "./AtorpInput";
import AtorpButton from "./AtorpButton";

export default {
  name: "Auth",
  components: { AtorpInput, AtorpButton },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../styles/_base.scss";
@import "../styles/_typography.scss";

.auth {
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

  &__email {
    margin-bottom: 1rem;
  }

  &__reg-link {
    margin-bottom: 1.2rem;
  }

  &__forget-pswd {
    justify-self: end;
  }
}
</style>
