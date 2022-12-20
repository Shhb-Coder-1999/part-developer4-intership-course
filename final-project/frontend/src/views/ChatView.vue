<template>
  <div class="container">
    <div class="userChat">
      <div class="title chat__userChat">
        <h3 class="title__h3">چت کاربر</h3>
        <span class="title__logAmount">(64 پیام)</span>
      </div>

      <Chat class="userChat__chats" />

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
          />
          <ErrorMessage
            class="ErrorMessage reEnterPassword__ErrorMessage"
            name="reEnterPassword"
          />
          <button class="sendBtn Form__sendBtn">
            <!-- <img src="../assets/icons/uil_message.svg" alt="" /> -->
          </button>
        </Form>
      </div>
    </div>
  </div>
</template>

<script setup>
import Chat from "../components/userChat.vue";
import { Field, Form, ErrorMessage } from "vee-validate";
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
      background: yellow;
    }

    .Form {
      height: 100%;
      &__msg {
        width: 65%;
        padding: 10px 10px;
        border-style: none;
      }
    }

    .sendBtn {
      width: 30px;
      background-image: ("../assets/icons/uil_message.svg");
      background-size: contain;
    }
  }
}
</style>
