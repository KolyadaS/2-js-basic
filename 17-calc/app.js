"use strict";

function checkValues(value1, value2) {
  if (value1 === "" || value2 === "") {
    document.querySelector(".result").innerText = "Введите два числа";
    return false;
  }

  document.querySelector(".input_1").value = "";
  document.querySelector(".input_2").value = "";

  if (
    isNaN(value1) ||
    isNaN(value2) ||
    typeof Number(value1) !== "number" ||
    typeof Number(value2) !== "number"
  ) {
    document.querySelector(".result").innerText =
      "Введенные значения должны быть числами";
    return false;
  } else {
    return true;
  }
}

document.querySelector(".button_plus").addEventListener("click", function () {
  const num1 = document.querySelector(".input_1").value;
  const num2 = document.querySelector(".input_2").value;

  if (checkValues(num1, num2)) {
    document.querySelector(".result").innerText =
      String(num1) +
      " + " +
      String(num2) +
      " = " +
      String(Number(num1) + Number(num2));
  }
});

document.querySelector(".button_minus").addEventListener("click", function () {
  const num1 = document.querySelector(".input_1").value;
  const num2 = document.querySelector(".input_2").value;

  if (checkValues(num1, num2)) {
    document.querySelector(".result").innerText =
      String(num1) +
      " - " +
      String(num2) +
      " = " +
      String(Number(num1) - Number(num2));
  }
});

document
  .querySelector(".button_multiplication")
  .addEventListener("click", function () {
    const num1 = document.querySelector(".input_1").value;
    const num2 = document.querySelector(".input_2").value;

    if (checkValues(num1, num2)) {
      document.querySelector(".result").innerText =
        String(num1) +
        " * " +
        String(num2) +
        " = " +
        String(Number(num1) * Number(num2));
    }
  });

document
  .querySelector(".button_division")
  .addEventListener("click", function () {
    const num1 = document.querySelector(".input_1").value;
    const num2 = document.querySelector(".input_2").value;

    if (checkValues(num1, num2)) {
      document.querySelector(".result").innerText =
        String(num1) +
        " / " +
        String(num2) +
        " = " +
        String(Number(num1) / Number(num2));
    }
  });
