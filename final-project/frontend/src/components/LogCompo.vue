<template>
  <div :class="{ logger: true, logger_show: show }">
    <div @click="toggle" class="titles log__title">
      <div class="title titles__title">
        <div class="status title__status"></div>
        <h5 class="h5 h5__title"><span>ایونت : </span>کالج برنامه نویسی</h5>
      </div>

      <div class="icon icon__title">
        <img v-if="show" src="../assets/icons/Vector.svg" alt="bottomArrow" />
        <img v-else src="../assets/icons/Vector (1).svg" alt="bottomArrow" />
      </div>
    </div>

    <div class="details logger__details">
      <ul class="ul details__ul">
        <li class="li ul__li">
          <h5 class="h5 h5__title">
            <span>آی پی درخواست دهنده: </span>192.168.1.1
          </h5>
        </li>
        <li class="li ul__li">
          <h5 class="h5 h5__title"><span> آیدی خطا:</span>خطا در سیستم</h5>
        </li>
        <li class="li ul__li">
          <h5 class="h5 h5__title"><span> محل خطا:</span>خطا در سیستم</h5>
        </li>
        <li class="li ul__li">
          <h5 class="h5 h5__title">
            <span> خطا:</span>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
            صنعت چاپ
          </h5>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const show = ref(true);

const toggle = () => {
  show.value = !show.value;
};
</script>

<style lang="scss" scoped>
.logger {
  width: 100%;
  background: $pure-white;
  color: black;
  padding: 10px 15px;
  border-radius: 24px;
  background: $pure-white;

  &_show {
    height: 50px;
    overflow: hidden;
  }

  .titles {
    display: flex;
    justify-content: space-between;
    cursor: pointer;
  }

  .title {
    display: flex;
    align-self: center;
    padding: auto 10px;
  }

  .status {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: $green;
    align-self: center;
  }

  .h5 {
    padding: 0px 5px;
    align-self: center;
  }

  .icon {
    align-self: center;
    cursor: pointer;
  }

  .ul {
    list-style-type: none;
    padding-inline-start: 0px;
    &__li {
      margin: 10px 0px;
    }
  }
}
</style>
