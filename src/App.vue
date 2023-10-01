<script setup>
import Navigation from "./components/Navigation.vue";
import TitleBar from "./components/TitleBar.vue";
import SelectList from "./components/SelectList.vue";
</script>

<template>
  <TitleBar />
  <div class="container">
    <Navigation :items="types" v-model="selectedType" />
    <div class="main-content">
      <!-- body content -->
      <SelectList :items="unitList" v-model="sourceUnit" />
      <div class="middle-section">
        <unicon width="20px" :name="selectedType.icon" fill="white"></unicon>
        <span class="type-title">
          {{ selectedType.title }}
        </span>
        <input type="number" v-model="inputValue" />
        <input type="number" :value="outputValue" readonly />
        <button @click="copy">
          <unicon name="copy" fill="white"></unicon>
        </button>
      </div>
      <SelectList :items="unitList" v-model="targetUnit" />
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
  watch: {
    selectedType: {
      handler(newValue) {
        this.unitList = newValue.units;
        this.sourceUnit = newValue.units[0];
        this.targetUnit = newValue.units[0];
      },
      deep: true,
    },
  },
  created() {
    this.unitList = this.selectedType.units;
    this.sourceUnit = this.selectedType.units[0];
    this.targetUnit = this.selectedType.units[0];
  },

  data() {
    return {
      selectedType: types[0],
      inputValue: 0,
      outputValue: 0,
      unitList: [],
      sourceUnit: "",
      targetUnit: "",
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
  margin-bottom: 20px;
  border-radius: 4px;
  height: 30px;
  border: solid 1px #111111;
  font-size: large;
  padding-block: 2px;
  padding-inline: 10px;
  background-color: #111111;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #212121;
  border: solid 1px #212121;
}
</style>
