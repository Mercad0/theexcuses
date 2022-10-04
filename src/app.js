/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function excuse() {
  //write your code here
  let myPotato = [
    "baked potato",
    "fried chickens",
    "pollo tropical eggs",
    "the neighborhood dog",
    "the cat",
    "the car"
  ];
  let ate = ["pushed", "slapped", "kicked", "threw "];
  let theFork = [
    "the rock to a lake",
    "the spoon inside an oven",
    "  the computer inside the toilet",
    "the backpack onto the curb",
    "the pencil on a notebook",
    "released a bonus song",
    "and dipped"
  ];

  function dog() {
    document.getElementById("generatexcuse").innerHTML =
      myPotato[Math.floor(Math.random() * myPotato.length)] +
      " " +
      ate[Math.floor(Math.random() * ate.length)] +
      " " +
      theFork[Math.floor(Math.random() * theFork.length)];
  }
  document.getElementById("btn").addEventListener("click", dog);
};
