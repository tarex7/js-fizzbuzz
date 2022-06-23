//Elementi UI
const numbers = document.getElementById("numbers");
const div = document.createElement("div");


for (let i = 1; i <= 100; i++) {
  //Se è multiplo di 3 e NON è multiplo di 5
  if (i % 3 === 0 && i % 5 !== 0) {
    div.innerHTML += `<p class="fizz">${i} FIZZ</p>`;
    //Se è multiplo di 5 e NON è multiplo di 3
  } else if (i % 5 === 0 && i % 3 !== 0) {
    div.innerHTML += `<p class="buzz">${i} BUZZ</p>`;

    //Se è multiplo di 3 E multiplo di 5
  } else if (i % 3 === 0 && i % 5 === 0) {
    div.innerHTML += `<p class="fizzbuzz">${i} FIZZBUZZ</p>`

    //Se non è multiplo di 5 o di 3
  } else {
    div.innerHTML += `<p>${i}</p>`

  }
}

numbers.appendChild(div);
