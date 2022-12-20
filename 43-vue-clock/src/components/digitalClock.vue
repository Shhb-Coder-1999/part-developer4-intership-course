<template>
  <div class="description mobile__description">
    <div class="digitalC description__digitalC">
      <input
        class="btn digitalC__btn btn--selected"
        type="number"
        :value="hourValue"
        @input="updateHour"
      />

      :

      <input
        class="btn digitalC__btn btn--selected"
        type="number"
        :value="minValue"
        @input="updateMin"
      />

      :

      <input
        class="btn digitalC__btn btn--selected"
        type="number"
        :value="secValue"
        @input="updateSec"
      />
    </div>
    <div class="description__text">
      select section from digital clock <br />
      then change value from analog clock
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";

const updateHour = (event) => {
  const value = event.target.value;
  if (value >= 13) {
    event.target.value = 1;
  }
  if (value <= 0) {
    event.target.value = 12;
  }
  emit("changeHour", value);
};

const updateMin = (event) => {
  const value = event.target.value;
  if (value >= 61) {
    event.target.value = 1;
  }
  if (value <= 0) {
    event.target.value = 60;
  }
  emit("changeMin", value);
};

const updateSec = (event) => {
  const value = event.target.value;
  if (value >= 61) {
    event.target.value = 1;
  }
  if (value <= 0) {
    event.target.value = 60;
  }
  emit("changeSec", value);
};

const hourValue = ref(4);
const minValue = ref(7);
const secValue = ref(50);

const emit = defineEmits(["changeHour", "changeMin", "changeSec"]);
// const buttonClick = () => {
//   emit("changeHour", 4);
// };
</script>

<style lang="scss" scoped>
$pure-white: #eaeaea;
$gray-light: #efefef;
$box-shadow-1: rgba(50, 50, 93, 0.05) 0px 50px 100px -20px,
  rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

.digitalC {
  padding-bottom: 20px;
  height: 50px;
  &__btn {
    margin: 0;
    position: relative;
    border-style: none;
    background-color: transparent;
    cursor: pointer;
    font-size: 35px;
  }
}

.btn {
  text-align: center;

  width: 40px;
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &:focus {
    outline: none !important;
    border-bottom: 3px solid blue;
  }
}

.description {
  &__digitalC {
    font-weight: 400;
    font-size: 35px;
  }
  &__text {
    font-size: 13px;
  }
}
</style>
