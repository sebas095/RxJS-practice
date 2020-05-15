// https://medium.com/@jorgeucano/30-d%C3%ADas-con-rxjs-d%C3%ADa-1-e911e68f6063
//RxJS
https: const button = document.querySelector("button");
const obs$ = rxjs.fromEvent(button, "click");

const a = obs$.subscribe(() => console.log("Clicked RxJS!"));
const b = obs$.subscribe(() => alert("hey"));
