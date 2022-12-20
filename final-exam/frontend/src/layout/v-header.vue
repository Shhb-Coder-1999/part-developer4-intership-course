<template>
  <div class="header">
    <header class="header container__header">
      <div class="logoSection header__logoSection">
        <img
          class="logo logoSection__logo"
          src="../assets/logos/part.svg"
          alt="partLogo"
        />
        <h4 class="h4 logoSection__h4">کالج پارت</h4>
      </div>

      <nav class="nav header__nav" dir="rtl">
        <ul class="list nav__list">
          <li class="item list__item">
            <router-link to="/"> داشبورد</router-link>
          </li>
          <li class="item list__item">
            <router-link to="/userChat">چت </router-link>
          </li>
          <li class="item list__item">
            <router-link to="/userLog">لاگ کاربر</router-link>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  width: 100%;
  height: 68px;
  box-shadow: 0px 2px 8px rgba(21, 0, 43, 0.05);

  &__logoSection {
    width: 15%;
    margin-right: 12px;
  }
  .logoSection {
    color: $black;
    display: flex;
    padding: auto 0px;
    line-height: 68px;
  }

  .router-link-exact-active {
    color: $blue;
    background: $lightBlue;
    padding: 7px 10px;
    border-radius: 30px;
  }

  .logo {
    height: 38px;
    width: 30px;
    align-self: center;
  }

  .h4 {
    padding-right: 10px;
  }

  .nav {
    align-self: center;
    width: 65%;
    height: 68px;
    color: black;
    display: flex;
    justify-content: center;
  }

  .list {
    list-style-type: none;
    display: flex;
    font-weight: 400;
    font-size: 14px;

    &__item {
      margin: 0px 10px;
    }
  }

  .item {
    padding: 10px;
    align-self: center;
    border-radius: 30px;
  }

  a:-webkit-any-link {
    cursor: pointer;
    text-decoration: none;
    color: $black;
  }

  a:active {
    color: $blue;
  }
}
</style>
