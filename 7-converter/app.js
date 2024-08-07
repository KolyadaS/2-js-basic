const sum = 1000;
const sourceCurrency = "RUB";
const targetCurrency = "USD";

function convert(sum, sourceCurrency, targetCurrency) {
  const rubRate = 100;
  const usdRate = 1;
  const eurRate = 0.9;

  let res = 0;
  switch (true) {
    case sum >= 0 &&
      (sourceCurrency === "rub" ||
        sourceCurrency === "usd" ||
        sourceCurrency === "eur") &&
      (targetCurrency === "rub" ||
        targetCurrency === "usd" ||
        targetCurrency === "eur"):
      if (sourceCurrency === "rub") {
        res = sum / rubRate;
      } else if (sourceCurrency === "usd") {
        res = sum / usdRate;
      } else {
        res = sum / eurRate;
      }
      if (targetCurrency === "rub") {
        res = res * rubRate;
      } else if (targetCurrency === "usd") {
        res = res * usdRate;
      } else {
        res = res * eurRate;
      }
      return `${res} ${targetCurrency.toUpperCase()}`;
    default:
      return null;
  }
}

console.log(
  convert(sum, sourceCurrency.toLowerCase(), targetCurrency.toLowerCase())
);
