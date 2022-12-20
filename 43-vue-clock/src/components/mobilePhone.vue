<template>
  <div class="mobile container__mobile">
    <analogClock :Hour="hour" :Min="min" :Sec="sec" />
    <digitalClock
      @changeHour="hourData"
      @changeMin="minData"
      @changeSec="secData"
    />
  </div>
</template>

<script setup>
import digitalClock from "@/components/digitalClock.vue";
import analogClock from "@/components/analogCock.vue";

import { ref } from "vue";

let hour = ref("");
let min = ref("");
let sec = ref("");

const hourData = (val) => {
  hour.value = val;
};

const minData = (val) => {
  min.value = val;
};

const secData = (val) => {
  sec.value = val;
};
</script>

<style lang="scss" scoped>
$pure-white: #eaeaea;
$gray-light: #efefef;
$box-shadow-1: rgba(50, 50, 93, 0.05) 0px 50px 100px -20px,
  rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

.container {
  width: 100%;
  height: 93vh;
  display: flex;
  justify-content: center;

  &__mobile {
    position: relative;
    width: 300px;
    margin: 40px 0px;
    border-radius: 30px;
    background-color: $pure-white;
    z-index: 9;
    box-shadow: $box-shadow-1;
  }
}

.mobile {
  padding-right: 10px;
  width: 280px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: inset -10px 0px 10px 4px rgba(50, 50, 93, 0.1),
    inset -1px 0px 10px 4px rgba(255, 255, 255, 0.956) !important;
  &__clock {
    background-color: $gray-light;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    box-shadow: $box-shadow-1;
  }
  &__description {
    &--paragraph {
      color: blue;
      margin-top: 20px;
    }
  }
}
</style>
