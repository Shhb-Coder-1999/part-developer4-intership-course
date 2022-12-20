<template>
  <div class="container">
    <div class="userChat">
      <div class="title chat__userChat">
        <h3 class="title__h3">چت کاربر</h3>
        <span class="title__logAmount">(64 پیام)</span>
      </div>

      <Chat
        v-for="msg in store.state.messages"
        :key="msg.id"
        class="userChat__chats"
        :message="msg"
      />

      <div class="form userChat__from">
        <Form @submit="submit" class="Form Form__form" method="POST" action="/">
          <Field
            class="Form__msg"
            id="msg"
            name="msg"
            :rules="isRequired"
            placeholder="متن خود را بنویسد و سپس کد امنیتی را وارد کنید."
            dir="rtl"
            type="text"
            v-model="msg"
          />

          <button class="sendBtn Form__sendBtn" @click="addMessage()">
            <img src="../assets/icons/uil_message.svg" alt="" />
          </button>

          <Field
            class="Form__secCode"
            id="msg"
            name="secCode"
            :rules="isRequired"
            placeholder="کد امنیتی"
            dir="rtl"
            type="text"
          />

          <img src="../assets/images/CAPTCHA.svg" alt="" />

          <button type="submit" class="refreshBtn Form__refreshBtn">
            <img src="../assets/icons/Vector (2).svg" alt="" />
          </button>
        </Form>
      </div>
    </div>
  </div>
</template>

<script setup>
import Chat from "../components/userChat.vue";
import { Field, Form } from "vee-validate";
import { ref } from "vue";
import { useStore } from "vuex";
const store = useStore();

const msg = ref("");

const addMessage = () => {
  store.dispatch("addMessage", msg);
};
function isRequired(value) {
  if (value && value.trim()) {
    return true;
  }
  return "This is required";
}
</script>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 40px 0px;

  .userChat {
    width: 70%;
    border-radius: 20px;
    background: $surface;

    &__from {
      margin: 18px 25px;
    }

    &__chats {
      width: 96%;
      background: $pure-white;
      margin: 10px 20px;
    }

    .title {
      display: flex;
      padding: 10px 16px;
      color: black;
      &__logAmount {
        font-weight: 400;
        font-size: 11px;
        color: $gray;
        align-self: center;
        padding: 0px 10px;
      }
    }

    .form {
      background: #e7eaef;
      border-radius: 20px;
    }

    .Form {
      height: 100%;
      display: flex;
      border-radius: 20px;
      &__msg {
        width: 65%;
        padding: 10px 10px;
        border-style: none;
        border-radius: 0px 20px 20px 0px;
      }

      &__secCode {
        margin: 5px 10px;
        border-style: none;
        width: 10%;
        border-radius: 9.27835px;
      }
    }

    .sendBtn {
      padding: auto 0px;
      cursor: pointer;
      border-style: none;
      background: $pure-white;
      img {
        padding: auto 0px;
      }
    }

    .refreshBtn {
      background: none;
      cursor: pointer;
      border-style: none;
    }
  }
}
</style>
