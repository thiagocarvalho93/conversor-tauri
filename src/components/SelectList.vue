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
  background-color: #111111;
  height: 415px;
  width: 179px;
}

.list-item {
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.list-item:hover {
  background-color: #212121;
}

.selected {
  background-color: #212121;
}
</style>
