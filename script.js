for (let i = 1; i <= 100; i++) {
  console.log(i);
  if(i % 3 === 0) {
    console.log(i, `FIZZ`);
  }
  if(i % 5 === 0) {
    console.log(i , `BUZZ`);
  }
  if(i % 5 === 0 && i % 3 === 0) {
    console.log(i, "FIZZBUZZ");
  }
}
