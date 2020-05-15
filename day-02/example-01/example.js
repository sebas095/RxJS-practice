// https://medium.com/@jorgeucano/30-d%C3%ADas-con-rxjs-d%C3%ADa-2-557e05c4db96
//javascript puro "funcion impura"
// creamos el contador
let countJs = 0;
// obtengo el boton
const jsButton = document.getElementById("JSButton");
jsButton.addEventListener("click", () =>
  console.log(`JS Clicked ${++countJs} times`)
);

//RxJS
// obtengo el boton
const rxButton = document.getElementById("RxJSButton");
// creo el observable
rxjs
  .fromEvent(rxButton, "click")
  .pipe(rxjs.operators.scan((count) => count + 1, 0))
  .subscribe((count) => console.log(`RxJS Clicked ${count} times`));
