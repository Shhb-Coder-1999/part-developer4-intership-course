<template>
  <aside class="sidebar sidebar_background">
    <div class="logo-container sidebar__logo-container sidebar--logo">
      <figure class="logo-figure logo-figure__icon">
        <img
          class="logo"
          src="../../assets/logos/avaland-logo.png"
          alt="avaland.favicon"
        />
      </figure>
      <figure class="logo-figure logo-figure__player">
        <img class="logo" src="../../assets/images/player.png" alt="player" />
      </figure>
      <figure class="logo-figure">
        <img
          class="logo"
          src="../../assets/images/music-player.png"
          alt="music-player"
        />
      </figure>
    </div>

    <ul class="navbar sidebar__navbar">
      <li class="navbar__item" v-for="(item, index) in navItems" :key="index">
        <router-link :to="item.route" class="nav-link">
          <component :is="item.svg" class="nav-link__logo"></component>
          {{ item.name }}
        </router-link>
      </li>
    </ul>
  </aside>
</template>

<script setup>
import homeSvg from "../svg/homeSvg.vue";
import listSvg from "../svg/listSvg.vue";
import playSvg from "../svg/playSvg.vue";
// import searchSvg from "../svg/searchSvg.vue";
import uploadSvg from "../svg/uploadSvg.vue";
import heartSvg from "../svg/heartSvg.vue";

const navItems = [
  {
    name: "صفحه اصلی",
    svg: homeSvg,
    route: "/",
  },
  {
    name: "پخش آهنگ",
    svg: playSvg,
    route: "/music/6",
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

<style lang="scss" scoped>
.router-link-exact-active {
  color: orange;
  cursor: pointer;
}

.nav-link.router-link-active {
  color: orange;

  &::before {
    height: 100%;
  }

  .nav-link__logo {
    stroke: orange;
  }
}

.nav-link {
  display: flex;
  transition: color 0.3s ease;
  position: relative;
  margin: 0px 10px 30px 0px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: -15px;
    width: 2px;
    height: 0;
    background-color: orange;
    transition: height 0.3s ease;
  }

  &__logo {
    width: 24px !important;
    height: 24px !important;
    margin-left: 0.75rem;
    fill: none;
    stroke: gray;
  }
}

.nav-link:hover {
  &::before {
    height: 100%;
  }
}

.nav-link_active {
  color: orange;

  &::before {
    height: 100%;
  }

  .nav-link__logo {
    stroke: orange;
  }
}

.sidebar {
  width: 230px;
  height: 100vh;
  position: sticky;
  top: 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  &_background {
    background-color: $sidebarBackgroundColor;
  }

  &--logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 32px;
  }
  &__navbar {
    width: 83%;
    margin-top: 30px;
  }
  .logo-figure {
    margin-bottom: 12px;
    &__icon {
      margin-bottom: 12px;
    }
    &__player {
      margin-bottom: 4px;
    }
  }

  .logo {
    display: block;
  }
  .navbar {
    list-style: none;

    padding: 0;
    padding-top: 4;
  }

  .link {
    color: $sidebarFont;
    font-size: 16px;
  }
}

a {
  text-decoration: none;
  color: #999999;
}

@media screen and (max-width: 768px) {
  .sidebar {
    display: none;
  }
}
</style>
