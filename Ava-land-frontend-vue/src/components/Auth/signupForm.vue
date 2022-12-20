<template>
  <div class="authForm">
    <Form
      @submit="onSubmit_signupStage1()"
      class="form"
      method="POST"
      action="/Auth"
    >
      <div class="username form__username">
        <label for="username" class="usernameLabel username__usernameLabel">
          نام کاربری</label
        >
        <br />
        <Field
          class="usernameInput username__usernameInput"
          id="username"
          name="username"
          :rules="isRequired && isUsername"
          placeholder="Alireza Pr"
          dir="ltr"
          type="text"
          v-model="username"
        />
        <br />
        <ErrorMessage
          class="ErrorMessage username__ErrorMessage"
          name="username"
        />
      </div>

      <div class="password form__password">
        <label for="password"> رمز عبور </label> <br />
        <Field
          id="password"
          name="password"
          class="passwordInput password__passwordInput"
          :rules="isRequired && isPassword"
          placeholder="*************"
          dir="ltr"
          v-model="password"
        />
        <br />
        <ErrorMessage
          class="ErrorMessage password__ErrorMessage"
          name="password"
        />
      </div>
      <div class="reEnterPassword form__reEnterPassword">
        <label for="password"> تکرار رمز عبور </label> <br />
        <Field
          id="reEnterPassword"
          name="reEnterPassword"
          class="reEnterPasswordInput reEnterPassword__reEnterPasswordInput"
          :rules="isRequired && isMatch"
          placeholder="*************"
          dir="ltr"
          v-model="reEnterPassword"
        />
        <br />
        <ErrorMessage
          class="ErrorMessage reEnterPassword__ErrorMessage"
          name="reEnterPassword"
        />
      </div>

      <button class="submit form__submit" type="submit">
        <span>ادامه</span>
      </button>
    </Form>

    <div class="login authForm__login">
      <p class="signUp__description description">
        حساب کاربری دارید ؟
        <span class="description__createAcc" @click="gotoLogin()">
          وارد شوید
        </span>
      </p>
    </div>

    <div class="recovery authForm__recovery">
      <span>بازیابی رمز عبور</span>
    </div>

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
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const router = useRouter();

const username = ref("");
const password = ref("");
const reEnterPassword = ref("");

function onSubmit_signupStage1() {
  let values = {
    username: username.value,
    password: password.value,
    confirmation: reEnterPassword.value,
  };
  console.log(values);
  store.dispatch("setStageInfo", values);
  router.push("/Auth/signup/stage2");
}

const login = () => {
  googleTokenLogin().then((response) => {
    console.log("Handle the response", response);
  });
};

const gotoLogin = () => {
  router.push("/Auth/login");
};

function isRequired(value) {
  if (value && value.trim()) {
    return true;
  }
  return "فیلد مورد نظر نمی تواند خالی باشد";
}

function isPassword(value) {
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
  if (passwordRegex.test(value)) return true;
  else
    return "رمز عبور باید حداقل از 8 کاراکتر تشکیل شده باشد و شامل حرف بزرگ و کوچک و علامت باشد.";
}

function isMatch() {
  if (
    password.value === reEnterPassword.value &&
    password.value != "" &&
    password.value != ""
  )
    return true;
  else return "عدم مطابقت با پسورد وارد شده !";
}

function isUsername(value) {
  const beNumberRegex = /^\d+$/;
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (
    emailRegex.test(value) ||
    (beNumberRegex.test(value) && value.length == 11)
  )
    return true;
  else return "نام کاربری باید ایمیل یا شماره همراه معتبر باشد.";
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

  &__submit {
    margin-top: 30px;
  }

  .usernameInput,
  .passwordInput,
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
