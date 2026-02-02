import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";



window.onload = function () {
  const icons = [
    { name: "heart", symbol: "♥" },
    { name: "diamond", symbol: "♦" },
    { name: "spade", symbol: "♠" },
    { name: "club", symbol: "♣" },
  ];

  const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

  const cardContainer = document.getElementById("cardContainer");
  const topIcon = cardContainer.querySelector(".top-icons");
  const bottomIcon = cardContainer.querySelector(".bottom-icons");
  const number = cardContainer.querySelector(".number");
  const btn = document.getElementById("generatorBtn");

  function generateCard() {
    const randomIconIndex = Math.floor(Math.random() * icons.length);
    const randomValueIndex = Math.floor(Math.random() * values.length);

    const selectedIcon = icons[randomIconIndex];
    const selectedValue = values[randomValueIndex];

    cardContainer.className = "card " + selectedIcon.name;
    topIcon.textContent = selectedIcon.symbol;
    bottomIcon.textContent = selectedIcon.symbol;
    number.textContent = selectedValue;
  }

  generateCard();

  btn.addEventListener("click", () => {
    alert("No me pagan lo suficiente para que funcione");
  });
};
