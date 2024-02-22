const limit = 100;
let fizz = 'Fizz'
let buzz = 'Buzz'

// ciclo da 1 a 100
for (let i = 1; i <= limit; i++){
  if ((!(i % 3)) && (!(i % 5))) {
    console.log(fizz, buzz);
  } else if (!(i % 5)) {
    console.log(buzz);
  } else if (!(i % 3)) {
    console.log(fizz);
  } else {
    console.log(i);
  }
}