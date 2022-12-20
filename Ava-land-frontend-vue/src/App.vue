<script setup>
import { computed, defineAsyncComponent } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const route = useRoute();

const AuthLayout = defineAsyncComponent(() => import("./layout/AuthLayout.vue"));
const appLayout = defineAsyncComponent(() => import("./layout/appLayout.vue"));

store.dispatch("checkLogin");
const layout = computed(() => (route.path.includes("Auth") ? AuthLayout : appLayout));
</script>

<template>
  <div class="container">
    <component :is="layout"></component>
  </div>
</template>

<style lang="scss" scoped></style>
