<template>
  <div class="premAcc">
    <div class="icon premAcc__icon">
      <img
        class="icon__img"
        src="../assets/logos/svg/bold/medal-star2.svg"
        alt="medal-star"
      />
    </div>
    <h4 class="h4 h4__premAcc">خرید اکانت ویژه ۶ ماهه</h4>
    <br />
    <h1 class="h1 h1____premAcc">۶۵۰۰۰ تومان</h1>
    <p class="subtitle subtitle__premAcc">
      لورم ایپسوم متن آماده برای جایگذاری <br />در سیستم تولید محتوا می باشد.
    </p>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.premAcc {
  padding: 30px 5px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(70, 70, 70, 0.4);
  border-radius: 16px;
  color: $pure-white;

  .icon {
    &__img {
    }
  }

  .subtitle {
    padding: 18px 0px;
    font-size: 12px;
  }
}
</style>
