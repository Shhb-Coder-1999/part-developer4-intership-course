<template>
  <div>
    <transition name="fade" appear>
      <div
        class="modal-overlay"
        v-if="store.state.modalState.showDeleteModal"
        @click="toggleModel()"
      ></div>
    </transition>
    <transition name="pop" appear>
      <div class="modal" role="dialog" v-if="store.state.modalState.showDeleteModal">
        <div class="main">
          <h4 class="h4-1">آیا از حذف این آیتم اطمینان دارید ؟</h4>
          <div class="btns">
            <button class="deleteBtn" @click="deleteItem()">حذف</button>
            <button class="cancelBtn" @click="toggleModel()">لغو</button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
// import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
// const route = useRoute();
// const router = useRouter();
const store = useStore();

const props = defineProps({
  action: String,
});

const toggleModel = () => {
  store.dispatch("toggleModel", "showDeleteModal");
};

const deleteItem = () => {
  store.dispatch(props.action);
  toggleModel();
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/animations/slide-out-bottom";
@import "../../assets/scss/animations/slide-in-bottom";
.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  text-align: center;
  width: fit-content;
  height: fit-content;
  width: 30%;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  background: rgba(53, 53, 53);
  z-index: 999;
  transform: none;
}
.modal h1 {
  margin: 0 0 1rem;
}

.modal-overlay {
  content: "";
  position: absolute;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 998;
  background: rgba(17, 17, 17, 0.6);
  backdrop-filter: blur(50px);
  opacity: 0.6;
  // transition: opacity 0.5s ease;
}

/* ---------------------------------- */

.pop-enter-active {
  -webkit-animation: slide-in-bottom 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-in-bottom 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
.pop-leave-active {
  // transition: transform 0.4s cubic-bezier(0.5, 0, 0.5, 1), opacity 0.4s linear;
  -webkit-animation: slide-out-bottom 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
  animation: slide-out-bottom 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
}

.pop-enter,
.pop-leave-to {
  opacity: 0;
  // transform: scale(0.3) translateY(-50%);
}

.toggle {
  padding: auto 0px;
  color: $pure-white;
  font-size: 12px;
  display: flex;
  width: 220px;
  height: 30px;
  border-radius: 10px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), #fc8f22;
}

.h4-1 {
  text-align: start;
  color: $pure-white;
}

.btns {
  margin: 15px 0px;
  display: flex;
  justify-content: space-between;
}
.deleteBtn {
  width: 60%;
  height: 40px;
  border-style: none;
  background-color: $red;
  color: $pure-white;
  border-radius: 8px;
  cursor: pointer;
}

.cancelBtn {
  width: 35%;
  height: 40px;
  border-style: none;
  background-color: $dark8;
  color: $pure-white;
  border-radius: 8px;
  cursor: pointer;
}

@media only screen and (max-width: 768px) {
  .modal {
    width: 100%;
    top: unset;
    z-index: 1001;
    border-radius: 1rem 1rem 0 0;
  }
}

// animations
</style>
