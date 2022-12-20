<template>
  <div class="uploadfeature">
    <p class="uploadfeature__title">بارگذاری‌آهنگ</p>

    <div class="box uploadfeature__box">
      <div
        class="dragarea box__dragarea"
        @dragover="dragover"
        @dragleave="dragleave"
        @drop="drop"
        accept=".mp3,audio/*"
      >
        <label
          class="upload dragarea__upload dragarea__upload dragarea__label"
          for="files"
          ><span>کلیک کنید یا آهنگ خود را در این قسمت رها کنید</span>
          <label for="files" type="button" class="dragarea__btn"
            >آپلود آهنگ</label
          >
        </label>
        <input
          type="file"
          name="fields[assetsFieldHandle][]"
          id="files"
          class="dragarea__input"
          @change="onChange"
          ref="file"
          accept=".mp3,audio/*"
        />
      </div>
      <div class="guide uploadfeature__guide">
        <figure class="guide__figure">
          <img src="../assets/logos/svg/bold/Vector.svg" alt="warn" />
        </figure>
        <p class="guide__paragraph">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است
        </p>
      </div>
      <br />

      <ul v-if="this.file.length" v-cloak>
        <li>
          {{ file[0].name
          }}<button
            class="removeSongBtn"
            type="button"
            @click="remove(file.indexOf(file))"
            title="Remove file"
          >
            حذف آهنگ
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";

export default {
  delimiters: ["${", "}"],
  data() {
    return {
      file: [],
      store: useStore(),
    };
  },
  methods: {
    onChange() {
      this.file = [...this.$refs.file.files];
      this.store.dispatch("setMusicFile", { song: this.file[0] });
    },
    remove(i) {
      this.file.splice(i, 1);
    },
  },
};
</script>

<style lang="scss" scoped>
.uploadfeature {
  direction: rtl;

  .removeSongBtn {
    background: $orange;
    color: $pure-white;
    padding: 3px 5px;
    border-radius: 10px;
    margin: 10px 10px;
    cursor: pointer;
  }

  &__title {
    font-weight: 700;
    margin: 0;
    margin-top: 48px;
    margin-bottom: 16px;
    font-size: 20px;
    color: $pure-white;
  }

  .box {
    height: 346px;
    background-color: $dark6;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    padding: 32px 24px 0px 24px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
    &__dragarea {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      height: 100%;
      box-sizing: border-box;
      position: relative;

      width: 100%;
      height: 70%;

      border: 2px dashed #ffffff40;
      border-radius: 10px;
      &:hover {
        border-color: $pure-white;
        // animation: spin 10s linear infinite;
      }
    }
    .dragarea {
      width: 100%;
      &__btn {
        justify-content: center;
        align-items: center;
        display: flex;

        margin-top: 16px;
        width: 15em;
        height: 48px;
        background: $orangeGradient;
        color: $pure-white;
        border-radius: 8px;
        font-size: 16px;
        cursor: pointer;
      }
      &__label {
        color: $pure-white;
        font-size: 20px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 500;
        cursor: pointer;
        border: 0px;
      }

      &__input {
        display: none;
      }
      &__upload {
        &--displayNone {
          display: none !important;
        }
      }
    }
    .upload {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;

      &__progress {
        position: relative;
        text-align: center;
        width: 57%;
        height: 20px;
        margin-top: 16px;
        border-radius: 16px;
      }
      &__progress::-webkit-progress-value {
        background: $orangeGradient;
        border-radius: 7px;
      }
      &__progress::-webkit-progress-bar {
        border-radius: 7px;
      }
      &__progress::after {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, 0);

        content: attr(value) "%";
        color: $pure-white;
      }
    }
  }

  &__figure {
    margin: 0;
    img {
      width: 24px;
      height: 24px;
    }
  }
  &__guide {
    margin: 16px 0 0 0;
  }
  .guide {
    display: flex;
    &__paragraph {
      color: $sidebarFont;
      font-size: 14px;
    }
    &__figure {
      margin: 0;
      margin-left: 4px;
      display: flex;
      align-items: center;
    }
  }
  @keyframes spin {
    100% {
      transform: rotateZ(360deg);
    }
  }
}

@media only screen and (max-width: 768px) {
  .uploadfeature {
    &__title {
      margin-right: 15px;
    }
    .box {
      background-color: transparent;
      padding: 15px 0px;
    }
  }
}
</style>
