<template>
  <div>
    <Form class="form main__form" @submit="onSubmit" method="POST">
      <div
        :class="{
          'music-info': true,
          'form__music-info': true,
          'main__music-info': true,
          'bg-dark': props.type == 'modal' ? true : false,
        }"
      >
        <div class="music-info--title" v-if="props.showTitle">
          <span>اطلاعات آهنگ</span>
        </div>

        <div
          :class="{
            inputs: true,
            'music-info__inputs': true,
            'bg-dark': props.type == 'modal' ? true : false,
          }"
        >
          <div class="music-info__inputs--col">
            <label for="cover">
              <div
                class="uploader inputs__uploader"
                :style="{
                  backgroundImage: 'url(' + imageData + ')',
                }"
              >
                <div class="uploader__title">
                  <span>بارگذاری عکس</span>
                  <img
                    class="icon"
                    src="../assets/logos/main-icons/linear/camera.png"
                    alt="camera"
                  />
                </div>
              </div>
            </label>
            <input
              class="inputs__file"
              type="file"
              id="cover"
              ref="songCover"
              @change="previewImage"
              accept="image/*"
            />
          </div>

          <div class="inputs inputs--grid music-info__inputs--col" dir="RTL">
            <div class="textField inputs__textField">
              <label class="textField__label" for="name">نام آهنگ</label>
              <br />
              <Field
                class="textField__input"
                type="text"
                id="name"
                name="name"
                placeholder="اشارات"
                v-model="music.name"
                :rules="isRequired"
              />
              <br />
              <ErrorMessage
                class="ErrorMessage textField__ErrorMessage"
                name="name"
              />
            </div>
            <div class="textField inputs__textField">
              <label class="textField__label" for="name">نام خواننده</label>
              <br />

              <Field
                class="textField__input"
                type="text"
                id="artist"
                name="artist"
                placeholder="محمدرضا شجریان و همایون شجریان"
                v-model="music.artist"
                :rules="isRequired"
              />
              <br />
              <ErrorMessage
                class="ErrorMessage textField__ErrorMessage"
                name="artist"
              />
            </div>
            <div class="textField inputs__textField">
              <label
                class="textField__label textField__label--topMargin"
                for="name"
                >نام آلبوم</label
              >
              <br />
              <input
                class="textField__input"
                type="text"
                id="album"
                name="album"
                placeholder="اشارات"
                v-model="music.album"
              />
            </div>
            <div class="textField inputs__textField">
              <label class="textField__label" for="name"
                >مدت زمان آهنگ آلبوم</label
              >
              <br />

              <Field
                class="textField__input"
                type="text"
                id="time"
                name="time"
                placeholder="09:00"
                v-model="music.duration"
                :rules="isValidTime"
              />
              <br />
              <ErrorMessage
                class="ErrorMessage textField__ErrorMessage"
                name="time"
              />
            </div>
          </div>

          <div class="textarea inputs__textarea" dir="RTL">
            <label class="textarea__label" for="textarea">اطلاعات آهنگ</label>
            <br />
            <textarea
              id="textarea"
              rows="9"
              v-model="music.description"
              placeholder="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
            >
            </textarea>
          </div>
        </div>

        <div class="btns music-info__btns">
          <button
            class="btns__cancel"
            @click="store.state.modalState.showEditSongModal = false"
          >
            لغو
          </button>
          <button type="submit" class="btns__save">ذخیره اطلاعات</button>
        </div>
      </div>
    </Form>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { useStore } from "vuex";
import { ref } from "vue";
import { Field, Form, ErrorMessage } from "vee-validate";
// import router from "../router";

import { useRoute } from "vue-router";
const imageData = ref(new URL("../assets/images/sonati.svg", import.meta.url));

const route = useRoute();

const music = ref({
  ...props.selectedSong,
  cover: new URL("../assets/images/sonati.svg", import.meta.url),
});

const store = useStore();
const props = defineProps({
  showTitle: Boolean,
  type: String,
  selectedSong: {
    type: Object,
    default: () => {
      return {
        id: null,
        name: "",
        artist: "",
        duration: "",
        album: "تک آهنگ",
        like: false,
        description: "",
      };
    },
  },
});

console.log(props.type);

const songCover = ref(null);

const previewImage = (event) => {
  let input = event.target;
  if (input.files && input.files[0]) {
    music.value.cover = input.files[0];
    let reader = new FileReader();
    reader.onload = (e) => {
      imageData.value = e.target.result;
    };
    reader.readAsDataURL(input.files[0]);
  }
};

function isRequired(value) {
  if (value && value.trim()) {
    return true;
  }
  return "فیلد مورد نظر نمی تواند خالی باشد";
}

function isValidTime(value) {
  if (/^[0-5]?\d:[0-5]\d$/.test(value)) {
    return true;
  }
  return "لطفا زمان آهنگ را با فرمت مناسب پر کنید.";
}

function onSubmit() {
  if (route.path.includes("music")) {
    store.dispatch("editMusic", music.value);
    store.state.modalState.showEditSongModal = false;
    return;
  }
  console.log("music.value : ", music.value);
  store.dispatch("setMusicFile", music.value);
  store.dispatch("uploadMusic");
  store.state.modalState.showEditSongModal = false;
}
</script>

<style lang="scss" scoped>
.music-info {
  direction: ltr;
  &--title {
    text-align: end;
    color: $pure-white;
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 10px;
  }

  &__inputs {
    border-radius: 16px 16px 0px 0px;
    background-color: $dark6;
    width: 100%;
    display: grid;
    grid-template-columns: 34% 66%;
    grid-template-rows: auto auto auto;
    &--col {
      padding-top: 1.9em;
    }
  }

  &__btns {
    padding: 20px 3% 20px 3%;
    border-radius: 0px 0px 16px 16px;
    background-color: $dark6;
  }

  .inputs {
    &__uploader {
      margin: 0px 24px 5px 28px;
    }
    &--grid {
      display: grid;
      gap: 20px 0px;
      grid-template-columns: 50% 50%;
      grid-template-rows: auto auto;
    }
    &__textarea {
      grid-column: 1 / 3;
    }
    &__file {
      display: none;
      background-color: $orange;
    }
  }

  .textField {
    padding-right: 28px;

    &__input {
      width: 79%;
      padding: 8px 8px;
      background: $dark2;
      border-style: none;
      border-radius: 8px;
      margin-top: 5px;
      color: $gray;
      font-weight: 600;
      font-size: 14px;
      line-height: 24px;
      font-family: peyda;
    }

    &__input:focus-visible {
      border-color: $pure-white;
    }

    &__input::placeholder {
      color: $gray;
      font-weight: 600;
      font-size: 14px;
      line-height: 24px;
      font-family: peyda;
    }

    &__label {
      font-weight: 600;
      font-size: 14px;
      line-height: 24px;
      color: $pure-white;
    }
  }

  textarea {
    width: 95.5%;
    background: $dark2;
    color: $gray;
    font-family: peyda;
    font-weight: 500;
    font-size: 12px;
    border-style: none;
    border-radius: 8px;
    padding: 3px 8px;
    resize: none;
    margin-top: 5px;
  }

  .textarea {
    padding-right: 25px;
    padding-top: 30px;

    &__label {
      font-weight: 600;
      font-size: 14px;
      line-height: 24px;
      color: $pure-white;
    }
  }

  .ErrorMessage {
    font-size: 10px;
    line-height: 2px;
    color: red;
  }

  .btns {
    &__cancel {
      margin-right: 14px;
      font-weight: 600;
      font-size: 12px;
      line-height: 24px;
      width: 100px;
      padding: 5px 0px;
      background: $dark2;
      color: $pure-white;
      font-family: peyda;
      border-style: none;
      border-radius: 8px;
      cursor: pointer;
    }

    &__save {
      margin-right: 14px;
      font-weight: 600;
      font-size: 12px;
      line-height: 24px;
      width: 170px;
      padding: 5px 0px;
      background: $orange;
      color: $pure-white;
      font-family: peyda;
      border-style: none;
      border-radius: 8px;
      cursor: pointer;
    }
  }

  .uploader {
    cursor: pointer;
    background-image: url("../assets/images/upload-bgImg.png");
    width: 82%;
    height: 160px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 11px 11px 11px 11px;
    position: relative;
    &__title {
      width: 100%;
      position: absolute;
      bottom: 0;
      text-align: center;
      background-color: $gray;
      border-radius: 0px 0px 11px 11px;
      background: $dark2;
      font-weight: 600;
      font-size: 12px;
      color: $pure-white;
      padding: 6px 0px;
    }
  }

  .icon {
    display: inline-block;
    vertical-align: middle;
    margin: 0px 7px;
  }
  .bg-dark {
    background-color: $dark6;
  }
}

@media only screen and (max-width: 768px) {
  .music-info {
    // background-color: $dark;

    &::-webkit-scrollbar {
      display: none;
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */
    }

    &--title {
      margin-right: 25px;
    }
    &__inputs {
      background-color: transparent !important;

      width: 100%;
      display: grid;

      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(1, 1fr);
      &--col {
        padding: 0px;
      }
    }
    .uploader {
      width: unset;
    }

    textarea {
      width: 79%;
    }

    .details {
      grid-template-columns: repeat(1, 1fr);
    }

    .inputs {
      &--grid {
        grid-template-columns: repeat(1, 1fr);
      }
      &__textarea {
        grid-column: 1 / 1;
        padding-top: 40px;
      }
      &__textField {
        margin-top: 20px;
      }
      &__uploader {
        margin: 10px 0px;
      }
    }

    .textField {
      padding: 0px;
      &__input {
        width: 100%;
      }
    }

    textarea {
      width: 100%;
      height: calc(1em * 1.5 * 25);
    }

    .textarea {
      padding-right: 0px;
    }

    .btns {
      background-color: transparent !important;
      display: flex;
      justify-content: center;
      &__cancel {
        display: none;
      }
      &__save {
        margin-top: 20px;
        width: 100%;
        margin-right: 0px;
      }
    }
  }
}
</style>
