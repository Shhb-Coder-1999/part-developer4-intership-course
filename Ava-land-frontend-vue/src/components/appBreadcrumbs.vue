<template>
  <div class="breadcrumbs" dir="rtl">
    <a href="" class="breadcrumbs__link active">بارگذاری‌آهنگ</a>
    <figure class="figurevector breadcrumbs__figurevector">
      <img
        class="breadcrumbs__vector"
        src="../assets/logos/svg/linear/Vector.svg"
        alt=""
      />
    </figure>
    <a href="" class="breadcrumbs__link">ذخیره‌اطلاعات</a>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.breadcrumbs {
  display: flex;
  align-items: center;
  &__link {
    text-decoration: none;
    padding: 8px;
    text-align: center;
    color: $gray;
    font-size: 16px;
  }

  .figurevector {
    display: flex;
    align-items: center;
  }

  &__figurevector {
    margin: 0px;
  }
  &__vector {
    width: 12px;
    height: 12px;
  }

  .active {
    border-bottom: 1px solid $orange;
    color: $orange;
  }
}

@media screen and (max-width: 768px) {
  .breadcrumbs {
    display: none;
  }
}
</style>
