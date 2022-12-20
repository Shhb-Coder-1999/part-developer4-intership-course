<template>
  <div class="landingPage">
    <div class="log landingPage__log">
      <div class="title log__title">
        <h3 class="title__h3">لاگ</h3>
        <span class="title__logAmount">(32 لاگ)</span>
      </div>

      <log v-for="(item, index) in 5" :key="index" class="log__compo" />
    </div>
    <div class="chat landingPage__chat">
      <div class="title chat__title">
        <h3 class="title__h3">چت کاربر</h3>
        <span class="title__logAmount">(64 پیام)</span>
      </div>
      <chat />
    </div>
  </div>
</template>

<script setup>
import log from "../components/LogCompo.vue";
import chat from "../components/userChat.vue";
</script>

<style lang="scss">
.landingPage {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  padding: 40px 0px;

  &__log {
    margin: 0px 15px;
  }

  &__chat {
    margin: 0px 15px;
  }

  .title {
    display: flex;
    padding: 5px 10px;
    color: black;
    &__logAmount {
      font-weight: 400;
      font-size: 11px;
      color: $gray;
      align-self: center;
      padding: 0px 10px;
    }
  }

  .log {
    width: 30%;
    background: $surface;
    border-radius: 36px;
    padding: 10px;

    &__compo {
      margin: 10px 0px;
    }
  }

  .chat {
    padding: 10px;
    width: 60%;
    background: $surface;
    border-radius: 36px;
  }
}
</style>
