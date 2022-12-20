<template>
  <div :class="{ logger: true, logger_show: show }">
    <div @click="toggle" class="titles log__title">
      <div class="title titles__title">
        <div
          v-if="props.log.type === 'ایونت'"
          class="status title__status"
        ></div>
        <div
          v-if="props.log.type === 'خطا'"
          class="redStatus title__redStatus"
        ></div>
        <h5 class="h5 h5__title">
          <span>{{ props.log.type }} : </span>{{ props.log.event }}
        </h5>
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
            <span>آی پی درخواست دهنده: </span>{{ props.log.ip }}
          </h5>
        </li>
        <li class="li ul__li">
          <h5 class="h5 h5__title">
            <span> آیدی خطا:</span>{{ props.log.errorId }}
          </h5>
        </li>
        <li class="li ul__li">
          <h5 class="h5 h5__title">
            <span> محل خطا:</span>{{ props.log.errorState }}
          </h5>
        </li>
        <li class="li ul__li">
          <h5 class="h5 h5__title"><span> خطا:</span>{{ props.log.error }}</h5>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";
const show = ref(true);

const props = defineProps({
  log: Object,
});

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
    height: 45px;
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

  .redStatus {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: red;
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
