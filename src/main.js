import { createApp } from "vue";
import "./styles.css";
import App from "./App.vue";

import Unicon from "vue-unicons";
import {
  uniTemperatureHalf,
  uniCompressAlt,
  uniRuler,
  uniTachometerFast,
  uniFocus,
  uniBalanceScale,
  uniMultiply,
  uniWindowMaximize,
  uniMinus,
  uniCopy,
  uniClock,
  uniExpandAlt,
} from "vue-unicons/dist/icons";

Unicon.add([
  uniTemperatureHalf,
  uniCompressAlt,
  uniRuler,
  uniTachometerFast,
  uniFocus,
  uniBalanceScale,
  uniMultiply,
  uniWindowMaximize,
  uniMinus,
  uniCopy,
  uniClock,
  uniExpandAlt,
]);

createApp(App).use(Unicon).mount("#app");
