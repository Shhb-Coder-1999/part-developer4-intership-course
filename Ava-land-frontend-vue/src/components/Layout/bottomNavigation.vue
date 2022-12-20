<template>
  <div class="nav">
    <nav class="mobileNav">
      <router-link
        v-for="(item, index) in navItems"
        :key="index"
        :to="item.route"
        class="blocIcon"
      >
        <component :is="item.svg" class="svg"></component>
        <br />
        <span class="blocIcon__Title">{{ item.name }}</span>
      </router-link>
    </nav>
  </div>
</template>

<script setup>
import homeSvg from "../svg/homeSvg.vue";
import listSvg from "../svg/listSvg.vue";
import uploadSvg from "../svg/uploadSvg.vue";
import heartSvg from "../svg/heartSvg.vue";

const navItems = [
  {
    name: "صفحه اصلی",
    svg: homeSvg,
    route: "/",
  },
  {
    name: "محبوب ترین ها",
    svg: heartSvg,
    route: "/likedSongs",
  },
  {
    name: "لیست پخش منتحب",
    svg: listSvg,
    route: "/playlistsArchive",
  },
  {
    name: "آپلود آهنگ",
    svg: uploadSvg,
    route: "/upload",
  },
];
</script>

<style scoped lang="scss">
.router-link-exact-active {
  color: $orange !important;
  cursor: pointer;
  .svg {
    stroke: $orange !important;
  }
}

.mobileNav {
  z-index: 1000;
  position: fixed;
  bottom: 0;
  height: 64px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  background-color: $dark4;
  backdrop-filter: blur(30px);

  .blocIcon {
    margin: auto 0px;
    font-size: 12px;
    text-decoration: none;
    font-family: peyda;
    text-align: center;
    line-height: 15px;
    font-weight: 600;
    font-size: 10px;
    color: $gray;
  }

  .svg {
    width: 24px;
    height: 24px;
    fill: none;
    stroke: $gray;
  }
}

@media screen and (min-width: 768px) {
  .mobileNav {
    display: none;
  }
}
</style>
