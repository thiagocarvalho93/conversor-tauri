<script setup>
import Navigation from "./components/Navigation.vue";
import TitleBar from "./components/TitleBar.vue";
import SelectList from "./components/SelectList.vue";
</script>

<template>
  <TitleBar @searchUnits="searchUnits" />
  <div class="container">
    <Navigation :items="types" v-model="selectedType" />
    <div class="main-content">
      <!-- body content -->
      <SelectList :items="unitList" v-model="sourceUnit" />
      <div class="middle-section">
        <unicon width="30px" :name="selectedType.icon" fill="var(--color-primary-400)"></unicon>
        <span class="type-title">
          {{ selectedType.title }}
        </span>
        <input type="number" v-model="inputValue" />
        <p>=</p>
        <input type="number" :value="outputValue" readonly />
        <div class="btn-copy" @click="copy">
          Copy
          <!-- <unicon name="copy" fill="var(--color-surface-mixed-100)"></unicon> -->
        </div>
      </div>
      <SelectList :items="unitList" v-model="targetUnit" />
    </div>
    <div id="snackbar">Copied to clipboard!</div>
  </div>
</template>

<script>
import { types } from "./constants/types";
import converter from "./utils/converter";

export default {
  computed: {
    types() {
      return types;
    },
    outputValue() {
      return converter.convert(
        this.selectedType.type,
        this.sourceUnit,
        this.targetUnit,
        this.inputValue
      );
    },
  },
  watch: {
    selectedType: {
      handler(newValue) {
        this.unitList = newValue.units;
        if (this.unitList.includes(this.sourceUnit) && this.unitList.includes(this.targetUnit))
          return;
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
      unitList: [],
      sourceUnit: "",
      targetUnit: "",
      test: 0,
    };
  },
  methods: {
    copy() {
      navigator.clipboard.writeText(this.outputValue);

      // Get the snackbar DIV
      var x = document.getElementById("snackbar");

      // Add the "show" class to DIV
      x.className = "show";

      // After 3 seconds, remove the show class from DIV
      setTimeout(function () {
        x.className = x.className.replace("show", "");
      }, 3000);
    },

    searchUnits(searchString) {
      if (!searchString.includes(">") || searchString.startsWith(">") || searchString.endsWith(">"))
        return;
      const units = searchString.split(">");
      const type = types.filter((type) => units.every((unit) => type.units.includes(unit)));
      this.test = type;
      if (!!type.length) {
        this.sourceUnit = units[0];
        this.targetUnit = units[1];
        this.selectedType = type[0];
      }
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
  background-color: var(--color-surface-mixed-300);
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
  height: 380px;
  width: 179px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.type-title {
  margin-bottom: 40px;
  margin-top: 10px;
  font-weight: bold;
}

input[type="number"] {
  width: 120px;
  border-radius: var(--border-radius);
  height: 30px;
  margin-block: 4px;
  font-size: large;
  border: solid 1px var(--color-surface-mixed-200);
  padding-inline: 6px;
  background-color: var(--color-surface-mixed-200);
  color: white;
  -webkit-appearance: textfield;
  -moz-appearance: textfield;
  appearance: textfield;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
}

input:focus-visible {
  outline: 2px solid var(--color-primary-400);
}

.btn-copy {
  border-radius: var(--border-radius);
  margin-top: 20px;
  height: 30px;
  width: 120px;
  font-size: medium;
  text-align: center;
  padding-inline: 6px;
  background-color: var(--color-primary-400);
  color: var(--color-surface-mixed-100);
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.5s;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
}

.btn-copy:hover {
  background-color: var(--color-primary-300);
}
</style>
