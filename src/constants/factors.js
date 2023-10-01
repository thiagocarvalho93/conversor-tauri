export const conversionFactors = {
  l: {
    mm: 1,
    cm: 10,
    m: 1000,
    km: 1000000,
    inch: 25.4,
    ft: 304.8,
    mi: 1609344,
    nauticalMile: 1852000,
    yard: 914.4,
    mile: 1609344,
  },
  a: {
    "mm²": 1,
    "cm²": 100,
    "m²": 1000000,
    "km²": 1e12,
    acre: 40468564.2,
    hectare: 1e10,
    "in²": 645.16,
    "ft²": 92903.04,
    "mi²": 2.59e12,
  },
  v: {
    "mm³": 1,
    "cm³": 1000,
    ml: 1000,
    l: 1e6,
    "m³": 1e9,
    "km³": 1e18,
    tsp: 4.92892,
    tbsp: 14.7868,
    flOz: 29.5735,
    cup: 236.588,
    pint: 473.176,
    quart: 946.353,
    gallon: 3785.41,
  },
  m: {
    mg: 1,
    g: 1000,
    kg: 1e6,
    tonne: 1e9,
    oz: 28349.5,
    lb: 453592,
    ton: 907185000,
  },
  t: {
    ns: 1,
    μs: 1000,
    ms: 1e6,
    s: 1e9,
    min: 6e10,
    hr: 3.6e12,
    day: 8.64e13,
    week: 6.048e14,
    month: 2.628e15,
    year: 3.154e16,
  },
  s: {
    "m/s": 1,
    "km/h": 3.6,
    mph: 2.23694,
    knot: 1.94384,
    "ft/s": 3.28084,
  },
  p: {
    Pa: 1,
    bar: 1e5,
    atm: 101325,
    Torr: 133.322,
    psi: 6894.76,
  },
  tmp: {
    C: {
      K: (C) => C + 273.15,
      F: (C) => (C * 9) / 5 + 32,
    },
    K: {
      C: (K) => K - 273.15,
      F: (K) => ((K - 273.15) * 9) / 5 + 32,
    },
    F: {
      C: (F) => ((F - 32) * 5) / 9,
      K: (F) => ((F - 32) * 5) / 9 + 273.15,
    },
  },
};