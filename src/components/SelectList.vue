<template>
  <div class="select-list-container">
    <ul class="list">
      <li
        v-for="item in items"
        @click="$emit('update:modelValue', item)"
        class="list-item"
        :class="isSelected(item)"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: [],
    },
    modelValue: {},
  },
  methods: {
    isSelected(item) {
      if (item === this.modelValue) {
        return "selected";
      }
      return "";
    },
  },
};
</script>

<style scoped>
.list {
  margin-top: 5px;
  padding-inline: 5px;
}

.select-list-container {
  background-color: var(--color-surface-mixed-100);
  height: 415px;
  width: 179px;
  overflow-y: auto;
}

.list-item {
  border-radius: var(--border-radius);
  padding: 10px;
  cursor: pointer;
  transition: all 0.5s;
}

.selected, .list-item:hover {
  background-color: var(--color-primary-600);
  color: var(--color-surface-mixed-100);
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: var(--color-surface-mixed-100);
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--color-surface-mixed-200);
  border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: var(--color-primary-600);
}
</style>
