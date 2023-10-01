<template>
  <div data-tauri-drag-region class="titlebar">
    <input
      type="text"
      class="search-bar"
      placeholder="m>km"
      v-model="searchString"
      @keyup.enter="searchUnits"
    />
    <div @click="minimize" class="titlebar-button" id="titlebar-minimize">
      <unicon width="20px" height="15px" name="minus" fill="white"></unicon>
    </div>
    <div @click="close" class="titlebar-button close" id="titlebar-close">
      <unicon width="20px" height="15px" name="multiply" fill="white"></unicon>
    </div>
  </div>
</template>
<script>
import { appWindow } from "@tauri-apps/api/window";

export default {
  data() {
    return {
      searchString: "",
    };
  },
  methods: {
    minimize() {
      appWindow.minimize();
    },
    close() {
      appWindow.close();
    },
    searchUnits() {
      this.$emit("searchUnits", this.searchString);
      this.searchString = "";
    },
  },
};
</script>

<style scoped>
.titlebar {
  height: 30px;
  background: var(--color-surface-mixed-200);
  user-select: none;
  display: flex;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  padding: 4px;
}

.search-bar {
  width: 60px;
  border-radius: var(--border-radius);
  height: 22px;
  margin-block: 4px;
  border: solid 1px var(--color-surface-mixed-200);
  padding-inline: 6px;
  background-color: var(--color-surface-mixed-300);
  color: white;
  margin-right: auto;
  margin-left: 5px;
}

.titlebar-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 30px;
  height: 30px;
  cursor: pointer;
  border-radius: var(--border-radius);
}
.titlebar-button:hover {
  transition: background 0.4s;
  background: var(--color-primary-400);
}

.close:hover {
  transition: background 0.4s;
  background: #cf142b;
}
</style>
