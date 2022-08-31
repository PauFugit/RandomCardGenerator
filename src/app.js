/* eslint-disable */
import "bootstrap";
import "./style.css";

const card = document.querySelector(".card");
const numb = document.querySelector(".numb");
const btn = document.querySelector(".btn");

const generateRandomNumber = () => {
  const numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
  const indexNumb = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumb];
};

const generateRandomSimb = () => {
  const simb = ["hearts", "diamonds", "spades", "clubs"];
  const indexSimb = Math.floor(Math.random() * simb.length);
  return simb[indexSimb];
};

window.onload = () => {
  card.classList.add(generateRandomSimb());
  numb.innerHTML = generateRandomNumber();
};

btn.addEventListener("click", e => {
  card.classList.remove(generateRandomSimb());
  card.classList.add(generateRandomSimb());
  numb.innerHTML = generateRandomNumber();
});
