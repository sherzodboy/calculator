"use strict";

const result = document.querySelector("#inputext");

const calculate = (number) => {
  result.value += number;
};

const elEqual = document.querySelector(".equal");
elEqual.addEventListener("click", () => {
  try {
    result.value = eval(result.value);
  } catch (err) {
    alert("Enter the valid input");
  }
});

const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
  result.value = "";
});

const elDelete = document.querySelector("#delete");
elDelete.addEventListener("click", () => {
  result.value = result.value.slice(0, -1);
});
