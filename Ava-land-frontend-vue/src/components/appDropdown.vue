<template>
  <div>
    <div class="dropDown" ref="dropDown">
      <button
        @click="toggle"
        :class="{
          more__btn: true,
          bottomArrow: props.icon == 'bottomArrow' ? true : false,
        }"
      ></button>
    </div>
    <div class="my-dropdown">
      <div
        v-show="isOpen"
        :class="{
          fade: true,
          options: true,
          right: props.position == 'right' ? true : false,
        }"
      >
        <div
          class="option"
          v-for="(option, index) in props.options"
          :key="index"
          @click="
            toggle();
            openModal(option.model);
          "
        >
          <img class="option__img" :src="option.iconSrc" :alt="option.alt" />
          <span class="option__title"> {{ option.title }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, onMounted, onBeforeUnmount } from "vue";
import { useStore } from "vuex";
// import { useRouter } from "vue-router";
// const router = useRouter();
const store = useStore();
const props = defineProps({
  options: Array,
  song: Object,
  playlist: Object,
  position: String,
  icon: String,
  exit: Boolean,
});

const dropDown = ref(null);
let isOpen = ref(false);

const close = (e) => {
  if (!dropDown.value.contains(e.target)) {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", close);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", close);
});

const toggle = () => {
  isOpen.value = !isOpen.value;
};

const openModal = (model) => {
  if (props.exit) {
    store.dispatch("logOut");
  }
  store.dispatch("changeSelectedMusic", props.song);
  store.dispatch("changeSelectedPlaylist", props.playlist);
  store.dispatch("toggleModel", model);
};
</script>

<style lang="scss" scoped>
.options {
  background-color: $dark7;
  position: absolute;
  right: 10%;
  top: 100%;
  z-index: 10;
  width: 180px;
  margin-top: 3px;
  border-radius: 10px;
}

.right {
  right: -160px;
}

/* Option */
.option {
  display: flex;
  padding: 8px 10px;
  border-bottom: 0.5px solid #ffffff;
  font: 1.2rem "Vollkorn", Georgia, Times, serif;
  &__img {
    width: 20px;
    height: 20px;
    padding-left: 5px;
  }
  &__title {
    font-size: 12px;
    padding-top: 3px;
  }
}

/* Hover state */
.option:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

/* Reset last child for a nice layout */
.option:last-child {
  border-bottom: none;
}

.more {
  position: relative;
  margin-right: 15px;
  &__btn {
    background: transparent;
    cursor: pointer;
    border-style: none;
    width: 20px;
    height: 20px;
    background-image: url(../assets/logos/svg/bold/3dot.svg);
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
}

.bottomArrow {
  background-image: url(../assets/logos/bottom-arrow.png);
}

.title {
  font-size: 10px;
}

@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes slide {
  0% {
    margin-top: -10px;
  }
  100% {
    margin-top: 0px;
  }
}

.fade {
  animation-name: fade, slide;
  animation-duration: 200ms, 400ms;
  animation-fill-mode: forwards;
  animation-timing-function: linear, cubic-bezier(0.23, 1, 0.32, 1);
  animation-delay: 200ms, 0;
}

@media only screen and (max-width: 768px) {
  .options {
    width: 120px;
  }
}
</style>
