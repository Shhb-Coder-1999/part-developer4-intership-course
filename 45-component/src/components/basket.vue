<template>
  <div class="basket">
    <div class="details">
      <h2>ItemCount : {{ props.totalCount }}</h2>
      <h3>
        price :{{
          props.totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        }}
        $
      </h3>
    </div>
    <ul>
      <li v-for="(item, index) in props.items" :key="index">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";

const props = defineProps({
  totalPrice: Number,
  totalCount: Number,
  items: Array,
});
</script>

<style>
.basket {
  margin: 50px auto;
  color: black;
  background-color: beige;
  width: 70%;
  border-radius: 20px;
  padding: 30px 20px;
  display: flex;
  justify-content: center;
}
</style>