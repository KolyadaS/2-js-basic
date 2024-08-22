const arr = [
  "10-02-2022",
  "test",
  "te-te-test",
  "11/12/2023",
  "00/13/2022",
  "41/12/2023",
  "29-02-1900",
  "29-02-2000",
  "29-02-2023",
  "28-02-2023",
  "29-02-2024",
  "31-06-2024",
  "31-06-2024-23043",
  "0-0-0",
];

let resArr = [];

function checkBissextile(year) {
  if (Number(year) % 4 === 0) {
    if (Number(year) % 100 === 0) {
      if (Number(year) % 400 === 0) {
        return 1;
      } else {
        return 0;
      }
    }
    return 1;
  } else {
    return 0;
  }
}

function checkDate(day, month, year) {
  if (day > 0 && day < 32 && month > 0 && month < 13 && year > 0) {
    if (["4", "6", "9", "04", "06", "09", "10"].includes(month)) {
      return 0;
    }
    if (["2", "02"].includes(month)) {
      if (checkBissextile(year) && day < 30) {
        return 1;
      }
      if (!checkBissextile(year) && day < 29) {
        return 1;
      } else {
        return 0;
      }
    }
    return 1;
  } else {
    return 0;
  }
}

arr.map((el) => {
  if (el.split("/").length === 3) {
    let [month, day, year] = el.split("/");
    if (checkDate(day, month, year)) {
      resArr.push([day, month, year].join("-"));
    }
  } else {
    if (el.split("-").length === 3) {
      let [day, month, year] = el.split("-");
      if (checkDate(day, month, year)) {
        resArr.push([day, month, year].join("-"));
      }
    }
  }
});

console.log(resArr);
