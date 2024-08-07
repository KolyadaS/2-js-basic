const arr = [1, 40, -5, 10, 0];
const sortOption1 = "qweRty";
const sortOption2 = "Desc";
const sortOption3 = "asc";

function sortArr(arr, option = "asc") {
  switch (option) {
    case "asc":
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
          if (arr[i] < arr[j]) {
            let k = arr[j];
            arr[j] = arr[i];
            arr[i] = k;
          }
        }
      }
      return arr;

    case "desc":
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
          if (arr[i] > arr[j]) {
            let k = arr[j];
            arr[j] = arr[i];
            arr[i] = k;
          }
        }
      }
      return arr;

    default:
      return "Некорректный параметр сортировки. Допустимые значения: asc и desc";
  }
}

let res = sortArr(arr, sortOption1.toLowerCase());
console.log(`Сортировка по ${sortOption1}: ${res}`);

res = sortArr(arr, sortOption2.toLowerCase());
console.log(`Сортировка по ${sortOption2}: ${res}`);

res = sortArr(arr, sortOption3.toLowerCase());
console.log(`Сортировка по ${sortOption3}: ${res}`);
