//Elementi UI
const numbers = document.getElementById("numbers");
const div = document.createElement("div");
div.className = "row justify-content-center border py-2"
for (let i = 1; i <= 100; i++) {
  //Se è multiplo di 3 e NON è multiplo di 5
  if (i % 3 === 0 && i % 5 !== 0) {
    div.innerHTML += `<div class="box m-2 fizz"> FIZZ</div>`;
    //Se è multiplo di 5 e NON è multiplo di 3
  } else if (i % 5 === 0 && i % 3 !== 0) {
    div.innerHTML += `<div class="box m-2 buzz"> BUZZ</div>`;

    //Se è multiplo di 3 E multiplo di 5
  } else if (i % 3 === 0 && i % 5 === 0) {
    div.innerHTML += `<div class="box m-2 fizzbuzz"> FIZZ <br> BUZZ</div>`;

    //Se non è multiplo di 5 o di 3
  } else {
    div.innerHTML += `<div class="box m-2 box">${i}</div>`;
  }
}

numbers.appendChild(div);
