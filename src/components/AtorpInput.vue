<template>
  <div class="input-container">
    <input :type="type" :placeholder="placeholder" :class="compInputClass" />
    <div :class="compPlaceholderClass">
      {{ placeholder }}
    </div>
    <transition name="fade">
      <div :class="compAdditionClass" v-if="additionText !== ''">
        {{ additionText }}
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "AtorpInput",
  props: {
    placeholder: { type: String, require: false, default: "" },
    type: { type: String, require: false, default: "text" },
    additionClass: { type: String, require: false, default: "" },
    additionText: { type: String, require: false, default: "" },
  },
  computed: {
    compAdditionClass() {
      const classes = { addition: true };
      if (this.isCurrentInputStatusNotRegular()) {
        classes[`addition-${this.additionClass}`] = true;
      }
      return classes;
    },
    compInputClass() {
      const classes = { "input-container__input": true };
      if (this.isCurrentInputStatusNotRegular()) {
        classes[`input-container__input-${this.additionClass}`] = true;
      }
      return classes;
    },
    compPlaceholderClass() {
      const classes = { "input-container__placeholder": true };
      if (this.isCurrentInputStatusNotRegular()) {
        classes[`input-container__placeholder-${this.additionClass}`] = true;
      }
      return classes;
    },
  },
  methods: {
    isCurrentInputStatusNotRegular() {
      if (
        this.additionClass !== "" &&
        (this.additionClass === "fault" || this.additionClass === "success")
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../styles/_base.scss";

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.addition {
  font-size: 1.2rem;

  &-fault {
    color: $color-fault;
  }

  &-success {
    color: $color-success;
  }
}

.input-container {
  width: 100%;

  &__placeholder {
    &-fault {
      color: $color-fault;
    }

    &-success {
      color: $color-success;
    }

    font-size: 1.6rem;
    line-height: 1.9rem;
    text-align: left;
    display: inline-block;
    transition: all 0.3s;
    transform: translateY(-5rem);
  }

  &__input:placeholder-shown + &__placeholder {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-4rem);
  }

  &__input {
    &-fault {
      color: $color-fault;
    }

    &-success {
      color: $color-success;
    }

    &::placeholder {
      color: inherit;
    }

    width: 100%;
    font-size: 1.6rem;
    line-height: 1.9rem;
    text-align: left;
    border: none;
    border-bottom: 0.1rem solid $color-primary;
    padding: 1rem 0;
    margin-bottom: -1.6rem;
  }
}
</style>
