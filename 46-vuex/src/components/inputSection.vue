!
<template>
  <div class="selection">
    <input
      class="selection-input"
      list="browsers"
      id="myBrowser"
      name="myBrowser"
      placeholder="Write a category name"
      v-model="catName"
    />
    <datalist id="browsers">
      <option v-for="(item, index) in store.lists" :key="index">
        {{ item.catName }}
      </option>
    </datalist>

    <input
      class="selection-input"
      type="text"
      placeholder="Write some item"
      v-model="itemName"
    />
    <button
      :disabled="isDisable"
      class="selection-btn"
      @click="store.addItem(catName, itemName)"
    >
      add item
    </button>
  </div>
</template>

<script setup>
import { useStore } from "@/stores/store";
import { ref, computed } from "vue";
const catName = ref("");
const itemName = ref("");
const store = useStore();

const isDisable = computed(() => {
  return catName.value == "" || itemName.value == "" ? true : false;
});
</script>

<style>
.selection {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.selection-input {
  margin: 5px 30px;
  padding: 10px 10px;
  font-size: 11px;
  color: black;
  background-color: lightgray;
  border-style: none;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.selection-btn {
  margin: 5px 30px;
  padding: 10px 0;
  cursor: pointer;
  font-size: 17px;
  color: #ffffff;
  background-color: rgb(44, 122, 225);
  border-style: none;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.selection-btn:hover {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}

.selection-btn:active {
  transform: scale(0.98);
  box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
}
</style>
