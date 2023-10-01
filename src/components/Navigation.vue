<template>
  <div>
    <nav class="main-menu">
      <ul>
        <li
          v-for="item in items"
          :class="isSelected(item)"
          :key="item.type"
          @click="$emit('update:modelValue', item)"
        >
          <div class="tooltip">
            <unicon width="20px" :name="item.icon" fill="white"></unicon>
            <div>
              <h2 v-show="mouseOver === item.type">Something Something</h2>
            </div>
            <span class="tooltiptext">{{ item.title }}</span>
          </div>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: [],
    },
    modelValue: {
      type: Object,
      default: {},
    },
  },
  methods: {
    isSelected(item) {
      if (item.type === this.modelValue.type) {
        return "selected";
      }
      return "";
    },
  },
};
</script>

<style scoped>
.main-menu {
  margin-top: 38px;
  background: #212121;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  z-index: 10;
}

.sidebar li a {
  display: block;
  text-decoration: none;
  padding: 8px;
  font-size: 24px;
}

li {
  transition: background-color 0.7s;
  cursor: pointer;
  padding: 5px 20px;
}

li:hover {
  background-color: #111111;
}

.selected {
  background-color: #111111;
  border-left: solid 3px #383838;
}

.tooltip {
  position: relative;
  display: inline-block;
}

/* Tooltip text */
.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: #383838;
  border: solid 1px white;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 200%;
  opacity: 0;
  transition: opacity 0.5s;
}

.tooltip .tooltiptext::after {
  content: " ";
  position: absolute;
  top: 50%;
  right: 100%;
  margin-top: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent white transparent transparent;
}
.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}
</style>
