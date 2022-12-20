<template>
  <div class="clock mobile__clock">
    <span
      :style="`transform: rotate(${(Hour ? Hour : 4) * 30}deg)`"
      class="clock__hand clock--hour"
      @click="hour"
    ></span>
    <span
      class="clock__hand clock--minute"
      :style="`transform: rotate(${(Min ? Min : 7) * 6}deg)`"
    ></span>
    <span
      class="clock__hand clock--second"
      :style="`transform: rotate(${(Sec ? Sec : 50) * 6}deg)`"
    ></span>
    <span class="clock__hand clock--dot"></span>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  Hour: { type: String, default: "4" },
  Min: { type: String },
  Sec: { type: String },
});

const hour = () => {
  console.log(props.Hour);
};
</script>

<style lang="scss" scoped>
$red: rgb(239, 27, 27);
$black: rgb(0, 0, 0);
$blue: rgb(35, 53, 192);
.clock {
  position: relative;
  border: 2px solid white;

  &__hand {
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
  }

  &--minute {
    height: 60px;
    width: 2px;
    margin: auto;
    top: -32%;
    background: $black;
    transform-origin: bottom center;
    transform: rotate(0deg);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
    transform: rotate(45deg);
    transition: transform 500ms;
  }

  &--hour {
    height: 40px;
    width: 2px;
    margin: auto;
    top: -20%;
    background: $black;
    transform-origin: bottom center;
    transform: rotate(0deg);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
    transform: rotate(120deg);
    transition: transform 500ms;
  }

  &--second {
    height: 77px;
    width: 1px;
    margin: auto;
    top: -41%;
    background: $red;
    transform-origin: bottom center;
    transform: rotate(0deg);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
    transform: rotate(-50deg);
    transition: transform 500ms;
  }

  &--dot {
    top: 1px;
    width: 5px;
    height: 5px;
    border-radius: 100px;
    background: white;
    border: 2px solid $red;
    border-radius: 100px;
    margin: auto;
  }
}
</style>
