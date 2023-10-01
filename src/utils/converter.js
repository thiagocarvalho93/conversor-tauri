import { conversionFactors } from "../constants/factors";

const convert = (type, sourceUnit, targetUnit, value) => {
  const factors = conversionFactors[type];

  if (type !== "tmp") {
    if (factors && factors[sourceUnit] && factors[targetUnit]) {
      return (factors[targetUnit] / factors[sourceUnit]) * value;
    }
    return 0;
  }

  return convertTemperature(sourceUnit, targetUnit, value);
};

const convertTemperature = (sourceUnit, targetUnit, value) => {
  const factors = conversionFactors.tmp;
  if (factors[sourceUnit] && factors[sourceUnit][targetUnit]) {
    return factors[sourceUnit][targetUnit](value);
  }
  return value;
};

export default {
  convert,
};
