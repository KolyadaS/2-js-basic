const myArray = Array.from({ length: 10 }, () => {
  const max = 100;
  const min = 1;
  const randomNumber = Math.ceil(Math.random() * (max - min)) + min;
  return randomNumber;
});
const conditionSymbol = Math.random() > 0.5 ? ">" : "<";
const conditionValue = Math.ceil(Math.random() * 100);

const cleanArray = function (elem) {
  switch (conditionSymbol) {
    case "<":
      if (elem < conditionValue) {
        return true;
      } else {
        return false;
      }
    case ">":
      if (elem > conditionValue) {
        return true;
      } else {
        return false;
      }
    default:
      return console.log("Ошибка: неизвестный символ сравнения");
  }
};

function calculate(fn, arr) {
  const resArr = [];
  for (let index in arr) {
    if (!fn(arr[index])) {
      resArr.push(arr[index]);
    }
  }
  return resArr;
}

console.log(myArray);
console.log(
  `Отфильтрованный массив, где элементы ${conditionSymbol} ${conditionValue} удалены`
);
console.log(calculate(cleanArray, myArray));
