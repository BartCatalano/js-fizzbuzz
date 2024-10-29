// Creazione generatore numeri base
let somma = 0;   //    variabile d'appoggio

for (let i = 1; i <= 100; i++) {
    // crezione condizionale per multipli di 3 e 5
if (i % 3 === 0 && i % 5 === 0 ) {
    console.log("FizzBuzz");
}
// crezione condizionale per multipli di 3
else if (i % 3 === 0){
    console.log("Fizz");
}
// crezione condizionale per multipli di 5
else if (i % 5 === 0) {
    console.log("Buzz");
}
// Condizionale senza multipli
else {
console.log(i);
}
somma=somma+1;



}
    