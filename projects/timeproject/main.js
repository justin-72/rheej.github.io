let mover = document.querySelector(".mover");
let flame = document.querySelector(".flame");
let timer = document.querySelector(".timer");

function updateCandle() {
  let date = new Date();
  let seconds = date.getSeconds();

  mover.style.height = (90 - seconds) + "%";

if (seconds >= 30) {
  flame.style.backgroundColor = "red";
} else {
  flame.style.backgroundColor = "orange";
}

  timer.innerHTML = date.toLocaleTimeString();

  console.log("Seconds:", seconds);
}

setInterval(updateCandle, 1000);