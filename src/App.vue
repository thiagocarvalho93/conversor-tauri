<script setup>
import Navigation from "./components/Navigation.vue";
import TitleBar from "./components/TitleBar.vue";
</script>

<template>
  <TitleBar />
  <div class="container">
    <Navigation :items="types" v-model="selectedItem" />
    <div class="main-content">
      <!-- body content -->
      <div class="select-list"></div>
      <div class="middle-section">
        <unicon width="20px" :name="selectedItem.icon" fill="white"></unicon>
        <span class="type-title">
          {{ selectedItem.title }}
        </span>
        <input type="number" v-model="inputValue" />
        <input type="number" :value="outputValue" readonly />
        <button @click="copy">
          <unicon name="copy" fill="white"></unicon>
        </button>
      </div>
      <div class="select-list"></div>
    </div>
  </div>
</template>

<script>
import { types } from "./constants/types";

export default {
  computed: {
    types() {
      return types;
    },
  },
  data() {
    return {
      selectedItem: types[0],
      inputValue: 0,
      outputValue: 0,
    };
  },
  methods: {
    copy() {
      navigator.clipboard.writeText(this.outputValue);
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  font-family: "Lato", sans-serif;
  line-height: 1;
}

body {
  overflow: hidden;
  background-color: #383838;
  color: white;
}

.container {
  margin-top: 38px;
}

.main-content {
  margin-left: 63px;
  font-size: 18px;
  display: flex;
  flex-direction: row;
}

.select-list {
  background-color: #111111;
  height: 415px;
  width: 179px;
}

.middle-section {
  border-radius: 5px;
  height: 380px;
  width: 179px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.type-title {
  margin-bottom: 40px;
}

input[type="number"] {
  width: 120px;
  margin-bottom: 20px;
  border-radius: 4px;
  height: 30px;
  font-size: large;
  border: solid 1px #111111;
  padding-inline: 6px;
  background-color: #212121;
  color: white;
  -webkit-appearance: textfield;
  -moz-appearance: textfield;
  appearance: textfield;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
}

button {
  width: 120px;
  margin-bottom: 20px;
  border-radius: 4px;
  height: 30px;
  border: solid 1px #212121;
  font-size: large;
  padding-block: 2px;
  padding-inline: 6px;
  background-color: #212121;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #111111;
  border: solid 1px #111111;
}
</style>
