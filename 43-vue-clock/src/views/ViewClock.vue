<template>
  <div class="container">
    <mobile />
  </div>
</template>

<script setup>
import mobile from "@/components/mobilePhone.vue";
// export default {};
</script>

<style lang="scss" scoped>
$pure-white: #eaeaea;
$violet-light: #cacae0;
$gray-light: #efefef;
$box-shadow-1: rgba(50, 50, 93, 0.05) 0px 50px 100px -20px,
  rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
$red: rgb(239, 27, 27);
$black: rgb(0, 0, 0);
$blue: rgb(35, 53, 192);

.container {
  width: 100%;
  height: 93vh;
  display: flex;
  justify-content: center;

  &__mobile {
    position: relative;
    width: 300px;
    margin: 40px 0px;
    border-radius: 30px;
    background-color: $pure-white;
    z-index: 9;
    box-shadow: $box-shadow-1;
  }
}
</style>
