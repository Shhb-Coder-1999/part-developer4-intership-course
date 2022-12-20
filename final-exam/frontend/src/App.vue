<script setup>
import { RouterView } from "vue-router";
import vHeader from "./layout/v-header.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const show = computed(() => (route.path.includes("Auth") ? false : true));
</script>

<template>
  <div dir="RTL">
    <div class="app__container">
      <vHeader class="container__header" v-if="show" />
      <main class="main">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app {
  position: relative;
  display: flex;
  width: 100%;
  margin: 0px;

  .container {
    &__header {
      margin: 44px 42px 0 140px;
    }
  }
  .main {
    &__breadcrumbs {
      margin: 52px 42px 0px 0px;
    }
  }
  &__container {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  &--dark {
    background-color: $dark;
  }
  .main {
    background-color: $dark;

    &__music-info {
      width: 100%;
      margin: 46px 42px 0px 0px;
    }

    &__playlist {
      margin-right: 40px;
      margin-left: 130px;
      margin-top: 60px;
    }
    &__playlistTable {
      margin: 60px 40px 0px 130px;
    }

    &__uploadfeature {
      width: 100%;
    }
  }
}

@media only screen and (max-width: 768px) {
  .app {
    .sidebar {
      display: none;
    }
    .container {
      &__header {
        margin: 30px 10px 0 10px;
      }
    }
    .main {
      width: 100%;
      &__music-info {
        margin-right: 0px;
        margin-left: 0px;
        margin-right: 0px;
        width: 100%;
        background-color: transparent;
      }
      &__uploadfeature {
        margin-right: 0px;
        margin-left: 0px;
        margin-right: 0px;
        width: 100%;
        background-color: transparent;
      }
    }
  }
}
</style>
