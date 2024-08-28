const params = {
  search: "Вася",
  take: 10,
  a: "qqqqqq",
  b: 9999,
};

function makeQueryString(params) {
  let queryString = "";
  for (const key in params) {
    queryString += key + "=" + params[key] + "&";
  }
  return queryString.slice(0, -1);
}

console.log(`Строка с query-параметрами: ${makeQueryString(params)}`);
