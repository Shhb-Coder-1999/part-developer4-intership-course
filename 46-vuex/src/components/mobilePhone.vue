<template>
  <div class="mobile">
    <img class="notebook-img" src="../assets/notebook.png" alt="notebook" />
    <div class="edit">
      <div class="edit-title">
        <h3 class="title">Shopping List</h3>
        <p class="subtitle">This is my today shopping list.</p>
      </div>
      <div class="edit-logo">
        <img class="edit-logo-img" src="../assets/edit.png" alt="edit-logo" />
      </div>
    </div>
    <itemsLists />
    <inputs />
  </div>
</template>

<script setup>
import itemsLists from "./itemsList.vue";
import inputs from "./inputSection.vue";
</script>

<style>
.mobile {
  position: relative;
  width: 300px;
  border: 3px solid rgb(108, 105, 105);
  margin: 40px 0px;
  border-radius: 50px;
  background-color: #ffffff;
  z-index: 9;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
}

.mobile::before {
  position: absolute;
  border: 3px solid rgb(108, 105, 105);
  height: 10px;
  width: 40%;
  left: 29%;
  background-color: rgb(108, 105, 105);
  content: "";
  top: -3px;
  border-radius: 0 0 7px 7px;
}

.mobile::after {
  position: absolute;
  border: 2px solid rgb(108, 105, 105);
  width: 40%;
  left: 29%;
  background-color: rgb(108, 105, 105);
  content: "";
  bottom: 8px;
  border-radius: 7px;
}

.notebook-img {
  position: relative;
  height: auto;
  width: 25%;
  left: 1%;
  margin-top: 15px;
  margin-bottom: 5px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  bottom: 10px;
  z-index: 10;
}

.edit {
  display: flex;
}

.edit-title {
  padding-left: 30px;
  width: 75%;
}

.edit-logo {
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.title {
  position: relative;
  margin-bottom: 5px;
  margin-top: 10px;
}

.title::after {
  position: absolute;
  background-color: rgb(57, 89, 220);
  color: #ffffff;
  content: "Today";
  text-align: center;
  padding: 2px 5px;
  font-size: 7px;
  border-radius: 45%;
  margin-left: 5px;
}

.subtitle {
  color: gray;
  margin-top: 5px;
  margin-bottom: 8px;
  font-size: 10px;
}

.edit-logo-img {
  width: 30%;
  height: auto;
  cursor: pointer;
}
.edit-logo-img:hover {
  transform: scale(1.2);
}

.title {
  position: relative;
}
</style>
