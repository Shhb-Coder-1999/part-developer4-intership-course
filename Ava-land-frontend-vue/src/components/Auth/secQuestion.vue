<template>
  <div class="authForm">
    <Form @submit="onSubmit()" class="form" method="POST" action="/Auth">
      <div class="secQuestion form__secQuestion">
        <label for="secQuestion"> سوال</label> <br />

        <select
          id="secQuestion"
          name="secQuestion"
          class="secQuestionInput secQuestion__secQuestionInput"
          v-model="secQuestion"
        >
          <option value="firstCarName">
            نام مدل اولین ماشینی که داشتید چه بود؟
          </option>
          <option value="schoolName" selected>
            سال پنجم دبستان را در کدام مدرسه گذراندید؟
          </option>
          <option value="nickname">
            نام مستعار شما در دوران کودکی چه بود؟
          </option>
        </select>
      </div>

      <div class="secQuestionAnswer form__secQuestionAnswer">
        <label for="secQuestionAnswer"> پاسخ</label> <br />
        <Field
          id="secQuestionAnswer"
          name="secQuestionAnswer"
          class="secQuestionAnswerInput secQuestionAnswer__secQuestionAnswerInput"
          :rules="isRequired"
          placeholder="لورم ایپسوم متن آماده"
          dir="rtl"
          v-model="secQuestionAnswer"
        />
        <br />
        <ErrorMessage
          class="ErrorMessage secQuestionAnswer__ErrorMessage"
          name="secQuestionAnswer"
        />
      </div>

      <button class="submit form__submit">
        <span>ثبت نام</span>
      </button>
    </Form>

    <hr class="hr authForm__hr" />

    <button class="googleBtn authForm__googleBtn" @click="login">
      <img
        class="icon googleBtn__icon"
        src="../../assets/logos/svg/bold/google.svg"
        alt=""
      />
      <span class="title googleBtn__title">ورود با حساب گوگل</span>
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Field, Form, ErrorMessage } from "vee-validate";
import { googleTokenLogin } from "vue3-google-login";
import { useStore } from "vuex";

const store = useStore();
const secQuestionAnswer = ref("");
const secQuestion = ref("firstCarName");

const onSubmit = () => {
  let values = {
    secQuestion: secQuestion.value,
    secQuestionAnswer: secQuestionAnswer.value,
  };
  store.dispatch("setStageInfo", values);
  store.dispatch("userSignUp");
  // router.push("/");
};

const login = () => {
  googleTokenLogin().then((response) => {
    console.log("Handle the response", response);
  });
};

function isRequired(value) {
  if (value && value.trim()) {
    return true;
  }
  return "فیلد مورد نظر نمی تواند خالی باشد";
}
</script>

<style scoped lang="scss">
.form {
  .username {
    &__usernameInput {
      margin: 5px 0px;
    }
  }

  .password {
    &__passwordInput {
      margin: 5px 0px;
    }
  }

  .reEnterPassword {
    padding-top: 10px;
    &__reEnterPasswordInput {
      margin: 5px 0px;
    }
  }

  .secQuestionAnswer {
    padding-top: 10px;
    &__secQuestionAnswerInput {
      margin: 5px 0px;
    }
  }

  .secQuestion {
    padding-top: 10px;
    &__secQuestionInput {
      margin: 5px 0px;
      padding: 100px;
    }
    select {
      // -moz-appearance: none; /* Firefox */
      // -webkit-appearance: none; /* Safari and Chrome */
      // appearance: none;
      cursor: pointer;
    }
  }

  &__submit {
    margin-top: 30px;
  }

  .usernameInput,
  .passwordInput,
  .secQuestionAnswerInput,
  .secQuestionInput,
  .reEnterPasswordInput {
    width: 100%;
    height: 37px;
    background: rgba(70, 70, 70, 0.5);
    border-radius: 8px;
    border-style: none;
    padding: 0px 15px;
    color: $pure-white;
  }

  .password {
    margin-top: 10px;
  }

  .submit {
    width: 100%;
    height: 37px;
    border-radius: 8px;
    border-style: none;
    padding: 0px 15px;
    background: linear-gradient(106.97deg, #fe8a48 -11.29%, #fda53e 91.8%);
    color: $pure-white;
    cursor: pointer;
  }

  .submit:active {
    transform: scale(0.98);
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  }
  .submit:hover {
    box-shadow: rgba(223, 223, 225, 0.25) 0px 6px 12px -2px,
      rgba(201, 200, 200, 0.3) 0px 3px 7px -3px;
  }

  .ErrorMessage {
    font-size: 10px;
    line-height: 2px;
    color: red;
  }
}

.authForm {
  &__hr {
    margin: 20px 0px;
  }
  .signUp,
  .login {
    font-size: 12px;
    text-align: center;
    padding: 18px 0px 4px 0px;
    .description {
      &__createAcc {
        color: $pure-white;
        cursor: pointer;
        padding: 0px 5px;
      }
      &__createAcc:hover {
        text-decoration: underline;
      }
    }
  }
  .recovery {
    font-size: 12px;
    text-align: center;
    color: $orange;
    cursor: pointer;
  }
  .recovery:hover {
    text-decoration: underline;
  }

  .hr {
    border: 0.3px solid rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.4);
  }

  .googleBtn {
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    background: rgba(70, 70, 70, 0.4);
    border-radius: 8px;
    color: $pure-white;
    border-style: none;
    cursor: pointer;
    height: 42px;
    &__title,
    &__icon {
      margin: auto 5px;
    }
  }

  .googleBtn:active {
    transform: scale(0.98);
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  }
}
</style>
