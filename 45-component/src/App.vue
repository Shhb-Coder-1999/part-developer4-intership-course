<script setup>
import product from "./components/product.vue";
import basket from "./components/basket.vue";
import { ref } from "vue";
let totalPrice = ref(0);
let totalCount = ref(0);
let items = ref([]);
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

const increaseProduct = (val) => {
  if (items.value.length === 0) items.value.push(val);

  if (
    !items.value.some((element) => {
      if (element.id === val.id) {
        Object.assign(element, val);
        return true;
      }
      return false;
    })
  )
    items.value.push(val);

  totalPrice.value = totalPrice.value + val.price;
  totalCount.value++;
};

const decreaseBasket = (val) => {
  items.value.forEach((element) => {
    if (element.id === val.id) {
      if (element.count == 1)
        items.value.splice(items.value.indexOf(element), 1);
      else element.count--;
    }
  });

  totalPrice.value = totalPrice.value - val.price;
  totalCount.value--;
};
</script>

<template>
  <div class="container">
    <basket :totalPrice="totalPrice" :totalCount="totalCount" :items="items" />

    <div class="products">
      <product
        @increaseBasket="increaseProduct"
        @decreaseBasket="decreaseBasket"
        class="product"
        product="product1"
        :price="10000"
        id="1"
      />
      <product
        @increaseBasket="increaseProduct"
        @decreaseBasket="decreaseBasket"
        class="product"
        product="product2"
        :price="20000"
        id="2"
      />
      <product
        @increaseBasket="increaseProduct"
        @decreaseBasket="decreaseBasket"
        class="product flex"
        product="product3"
        :price="30000"
        id="3"
      />
      <product
        @increaseBasket="increaseProduct"
        @decreaseBasket="decreaseBasket"
        class="product flex"
        product="product4"
        :price="40000"
        id="4"
      />
    </div>
  </div>
</template>

<style scoped>
.flex :deep(.card) {
  background-color: lightpink;
  display: flex;
  margin: 60px 0px;
  width: 280px;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.products {
  display: flex;
}

.product {
  margin: 0px 20px;
}

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
