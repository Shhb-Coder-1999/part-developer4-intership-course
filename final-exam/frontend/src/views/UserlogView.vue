<template>
  <div class="container">
    <div class="userLog">
      <div class="event userLog__event">
        <h3 class="title event__title">ایونت</h3>
        <hr />
        <log
          v-for="(item, index) in store.state.logs"
          :key="index"
          class="log"
          :log="item"
        />
      </div>
      <div class="error userLog__error">
        <h3 class="title event__title">خطا</h3>
        <hr />
        <log
          v-for="(item, index) in store.state.logs"
          :key="index"
          class="log"
          :log="item"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import log from "../components/LogCompo.vue";
import { useStore } from "vuex";
const store = useStore();
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 40px 0px;

  .userLog {
    display: flex;
    justify-content: space-evenly;
    width: 80%;
    padding: 20px 30px;

    .event,
    .error {
      padding: 0px 40px;
      width: 45%;
      background: $surface;
      border-radius: 24px;
    }

    .title {
      color: $black;
      text-align: center;
      font-weight: 600;
      line-height: 37px;
      padding: 10px 0px;
    }

    .log {
      margin: 10px 0px;
    }
  }
}
</style>
