import { conversionFactors } from "./factors";

export const types = [
  {
    type: "tmp",
    icon: "temperature-half",
    title: "Temperature",
    units: Object.keys(conversionFactors["tmp"]),
  },
  {
    type: "p",
    icon: "compress-alt",
    title: "Pressure",
    units: Object.keys(conversionFactors["p"]),
  },
  {
    type: "l",
    icon: "ruler",
    title: "Length",
    units: Object.keys(conversionFactors["l"]),
  },
  {
    type: "a",
    icon: "focus",
    title: "Area",
    units: Object.keys(conversionFactors["a"]),
  },
  {
    type: "m",
    icon: "balance-scale",
    title: "Mass",
    units: Object.keys(conversionFactors["m"]),
  },
  {
    type: "t",
    icon: "clock",
    title: "Time",
    units: Object.keys(conversionFactors["t"]),
  },
  {
    type: "s",
    icon: "tachometer-fast",
    title: "Speed",
    units: Object.keys(conversionFactors["s"]),
  },
  {
    type: "v",
    icon: "expand-alt",
    title: "Volume",
    units: Object.keys(conversionFactors["v"]),
  },
];
