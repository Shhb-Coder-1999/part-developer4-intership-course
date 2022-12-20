<template>
  <div class="authView">
    <div class="authSection authView__authSection">
      <div class="logoContainer authSection__logoContainer sidebar--logo">
        <figure class="logoFigure logoFigure__icon">
          <img
            class="logo"
            src="../assets/logos/avaland-logo.png"
            alt="avaland.favico"
          />
        </figure>
        <figure class="logoFigure logoFigure__player">
          <img class="logo" src="../assets/images/player.png" alt="player" />
        </figure>
        <figure class="logoFigure">
          <img
            class="logo"
            src="../assets/images/music-player.png"
            alt="music-player"
          />
        </figure>
      </div>

      <div><router-view></router-view></div>

      <div class="descriptionList authView__descriptionList">
        <ul class="ul descriptionList__ul">
          <li class="li ul__li">لورم ایپسوم متن ساختگی با تولید سادگی</li>
          <li class="li ul__li">
            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
          </li>
        </ul>
      </div>
    </div>

    <div class="welcomeSection authView__welcomeSection">
      <div class="description welcomeSection__description">
        <div class="title description__title">
          <h1 class="h1 title__h1">به آوا لند خوش آمدید</h1>
        </div>
        <div class="subtitle description__subtitle">
          <p class="paragraph subtitle__paragraph">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی <br />می باشد
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.authView {
  background-image: url(../assets/images/quaid-lagan.svg);
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  display: flex;
  z-index: 1;
  &__welcomeSection {
    width: 75%;
  }
  &__authSection {
    width: 25%;
    background-color: $dark4;
    backdrop-filter: blur(82px);
    z-index: 2;
    padding: 13px 50px;
  }
  .welcomeSection {
    color: $pure-white;
    &__description {
      width: 39%;
    }
  }

  .welcomeSection {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: flex-end;
    padding-bottom: 10%;
  }

  .h1 {
    text-align: center;
  }

  .paragraph {
    font-size: 13px;
    color: $gray;
    padding-top: 10px;
  }

  .logoContainer {
    text-align: center;
    line-height: 18px;
  }

  .descriptionList {
    &__ul {
      margin-top: 25px;
    }
  }
  .ul {
    list-style-type: none;
    padding-inline-start: 0px;
    &__li::before {
      content: "";
      color: $orange;
      font-weight: bold;
      display: inline-block;
      width: 8px;
      height: 8px;
      background: $orange;
      border-radius: 50%;
      margin: 0px 4px;
    }

    .li {
      font-size: 11px;
    }
  }
}

@media screen and (max-width: 768px) {
  .authView {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
      url(../assets/images/quaid-lagan-mobile.svg);
    .welcomeSection {
      display: none;
    }
    .authSection {
      width: 100%;
      backdrop-filter: blur(0px);
    }
    &__authSection {
      background-color: transparent;
    }
  }
}

@media only screen and (max-width: 600px) {
  .authView {
    &__authSection {
      padding: 50px 20px;
    }
  }
}
</style>
