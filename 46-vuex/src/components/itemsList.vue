<template>
  <div class="lists">
    <ul v-for="(list, listIndex) in store.lists" :key="listIndex">
      <li class="ul1-title" :style="`background-color : ${list.bgColor} `">
        {{ list.catName }}
      </li>
      <li
        v-for="(item, itemIndex) in store.lists[listIndex].items"
        :key="itemIndex"
        class="li-item"
      >
        <input
          :checked="item.checked"
          type="checkbox"
          class="li-input"
          :id="++uniqueId"
          @click="store.changeCheckedState(listIndex, itemIndex)"
        />
        <label class="cb" :for="uniqueId">{{ item.name }}</label>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useStore } from "@/stores/store";
import { ref } from "vue";
let uniqueId = ref(0);
const store = useStore();

// const store = computed(() => {
//   return useStore();
// });
</script>

<style>
.lists {
  position: relative;
  width: 100%;
  height: 55%;
  overflow: auto;
}

li {
  font-size: 13px;
  padding: 10px 10px;
  margin: 5px 0px;
}

ul {
  list-style: none;
  padding: 0px;
  margin: 20px 10px;
}

.li-item {
  height: 20px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
}

.ul1-title,
.ul2-title,
.ul3-title,
.ul4-title {
  top: 0;
  position: sticky;
  color: #ffffff;
  border-radius: 6px;
}

.ul1-title {
  background-color: rgb(44, 122, 225);
}

.ul2-title {
  background-color: rgb(55, 120, 72);
}

.ul3-title {
  background-color: rgb(222, 246, 89);
}

.ul4-title {
  background-color: rgb(230, 107, 31);
}

.cb {
  cursor: pointer;
  display: block;
  width: 100%;
  text-align: start;
}

.li-input {
  display: none;
}

.li-input:checked {
  display: block;
}
.li-input:checked + .cb {
  text-decoration: line-through;
}
</style>
