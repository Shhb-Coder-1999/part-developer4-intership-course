<script setup>
import { ref, defineEmits, defineProps } from "vue";
const emit = defineEmits(["increaseBasket", "decreaseBasket"]);

const props = defineProps({
  price: Number,
  product: String,
  id: String,
});

const increasePrice = (event) => {
  count.value++;
  const product = {
    price: props.price,
    count: count.value,
    id: props.id,
    product: props.product,
  };
  emit("increaseBasket", product);
};

const decreasePrice = (event) => {
  count.value--;
  const product = {
    price: props.price,
    count: count.value,
    id: props.id,
    product: props.product,
  };
  emit("decreaseBasket", product);
};

const count = ref(0);
</script>

<template>
  <div>
    <div class="card">
      <div class="header">
        <h3>{{ product }}</h3>
      </div>

      <div class="main">
        <button class="btn" type="button" @click="increasePrice()">+</button>
        <button
          class="btn"
          type="button"
          @click="count >= 1 ? decreasePrice() : (count = 0)"
        >
          -
        </button>
      </div>

      <div class="details">
        <p>count :{{ count }}</p>
        <p>
          price : {{ price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }} $
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.childStyle[flex-col] {
  flex-direction: column;
}
.card {
  width: 170px;
  border-radius: 20px;
  color: black;
  background-color: aliceblue;
}
.read-the-docs {
  color: #888;
}

.btn {
  margin: 5px 5px;
}
</style>
