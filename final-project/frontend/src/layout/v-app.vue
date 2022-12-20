<template>
  <div class="app app--dark" dir="RTL">
    <nav class="mobileNav">
      <a href="#" class="blocIcon mobileNav__blocIcon">
        <img
          class="blocIcon__img"
          src="./assets/logos/svg/bold/home-2.svg"
          alt=""
        /><br />
        <span class="blocIcon__title">صفحه اصلی</span>
      </a>
      <a href="#" class="blocIcon mobileNav__blocIcon">
        <img
          class="blocIcon__img"
          src="./assets/logos/svg/bold/heart.svg"
          alt=""
        /><br />
        <span class="blocIcon__title">محبوب ترین ها</span>
      </a>
      <a href="#" class="blocIcon mobileNav__blocIcon">
        <img
          class="blocIcon__img"
          src="./assets/logos/svg/bold/receipt-square.svg"
          alt=""
        /><br />
        <span class="blocIcon__title">لیست منتخب</span>
      </a>
      <a href="#" class="blocIcon mobileNav__selectedBlocIcon">
        <img
          class="blocIcon__selectedImg"
          src="./assets/logos/svg/bold/orangeImport.svg"
          alt=""
        /><br />
        <span class="blocIcon__selectedTitle">آپلود آهنگ</span>
      </a>
    </nav>
    <aside class="sidebar sidebar_background">
      <div class="logoconteiner sidebar__logoconteiner sidebar--logo">
        <figure class="logofigure logofigure__icon">
          <img
            class="logo"
            src="./assets/logos/avaland-logo.png"
            alt="avaland.favico"
          />
        </figure>
        <figure class="logofigure logofigure__player">
          <img class="logo" src="./assets/images/player.png" alt="player" />
        </figure>
        <figure class="logofigure">
          <img
            class="logo"
            src="./assets/images/music-player.png"
            alt="music-player"
          />
        </figure>
      </div>

      <ul class="list sidebar__list">
        <li class="item list__item item--homeIcon">
          <a class="link">صفحه‌اصلی</a>
        </li>
        <li class="item list__item item--searchIcon">
          <a class="link">جستجو</a>
        </li>
        <li class="item list__item item--playIcon">
          <a class="link">پخش‌آهنگ</a>
        </li>
        <li class="item list__item item--likeIcon">
          <a class="link">محبوب‌ترین‌ها</a>
        </li>
        <li class="item list__item item--listIcon">
          <a class="link">لیست‌پخش‌منتخب</a>
        </li>
        <li class="item list__item item--uploadIcon item--active">
          <a class="link">آپلودآهنگ</a>
        </li>
      </ul>
    </aside>
    <div class="app__container">
      <vHeader />
      <main class="main">
        <div class="breadcrumbs main__breadcrumbs" dir="rtl">
          <a href="" class="breadcrumbs__link active">بارگذاری‌آهنگ</a>
          <figure class="figurevector breadcrumbs__figurevector">
            <img
              class="breadcrumbs__vector"
              src="./assets/logos/svg/linear/Vector.svg"
              alt=""
            />
          </figure>
          <a href="" class="breadcrumbs__link">ذخیره‌اطلاعات</a>
        </div>

        <RouterView />
      </main>
    </div>
  </div>
</template>

<script setup>
import vHeader from "./v-header.vue";
</script>

<style lang="scss" scoped>
.app {
  position: relative;
  display: flex;
  width: 100%;
  margin: 0px;

  .container {
    &__header {
      margin: 44px 42px 0 120px;
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
