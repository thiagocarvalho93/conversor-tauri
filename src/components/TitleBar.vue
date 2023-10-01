<template>
  <div data-tauri-drag-region class="titlebar">
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
  methods: {
    minimize() {
      appWindow.minimize();
    },
    close() {
      appWindow.close();
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
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
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
  background: var(--color-surface-mixed-100);
}

.close:hover {
  transition: background 0.4s;
  background: #cf142b
}
</style>
