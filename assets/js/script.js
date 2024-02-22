const limit = 100;
let fizz = 'Fizz'
let buzz = 'Buzz'
const container = document.getElementById('container');

// ciclo da 1 a 100
for (let i = 1; i <= limit; i++){

  // se entrambe le condizioni sono vere stampa FizzBuzz
  if ((!(i % 3)) && (!(i % 5))) {

    console.log(fizz, buzz);
    container.innerHTML += `
    <div class="box fizz buzz">FizzBuzz</div>
    `

    // altrimenti se è vera solo questa stampa Buzz
  } else if (!(i % 5)) {

    console.log(buzz);
    container.innerHTML += `
    <div class="box buzz">Buzz</div>
    `

    // altrimenti se è vera solo quest'altra stampa Fizz
  } else if (!(i % 3)) {

    console.log(fizz);
    container.innerHTML += `
    <div class="box fizz">Fizz</div>
    `

    // altrimenti stampa il numero attuale
  } else {

    console.log(i);
    container.innerHTML += `
    <div class="box">${i}</div>
    `
  }

}