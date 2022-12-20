<template>
  <div class="ui-snackbar-container">
    <Transition>
      <div
        class="ui-snackbar"
        v-show="snackbar.show"
        transition="ui-snackbar-toggle-transition"
        :style="{ 'background-color': snackbar.color }"
      >
        <div class="ui-snackbar-text">{{ snackbar.message }}</div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { computed, watch, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

const snackbar = computed(() => store.getters.getSnackbarInfo);
const animation = ref(snackbar.value.show);
watch(snackbar, () => {
  animation.value = !snackbar.value.show;
  timeout();
});

function timeout() {
  setTimeout(function () {
    snackbar.value.show = false;
  }, snackbar.value.timeout);
}
</script>

<style lang="scss" scoped>
.ui-snackbar-container {
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 20px;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.ui-snackbar {
  display: inline-flex;
  align-items: center;

  min-width: 288px;
  max-width: 568px;
  min-height: 48px;

  padding: 14px 24px;
  margin: 14px 4px 8px 4px;

  border-radius: 5px;
  z-index: 1000;
  background-color: #323232;
}

.ui-snackbar-text {
  font-size: 14px;
  color: white;
}

.ui-snackbar-action {
  margin-left: auto;
  padding-left: 48px;

  button {
    border: none;
    background: none;
    margin: 0;
    padding: 0;

    font-size: 14px;
    text-transform: uppercase;

    color: #ffeb3b;
  }
}

.ui-snackbar-toggle-transition {
  transition: transform 0.3s ease;

  .ui-snackbar-text,
  .ui-snackbar-action {
    opacity: 1;
    transition: opacity 0.3s ease;
  }
}

.ui-snackbar-toggle-enter,
.ui-snackbar-toggle-leave {
  transform: translateY(-60px);

  .ui-snackbar-text,
  .ui-snackbar-action {
    opacity: 0;
  }
}
</style>
