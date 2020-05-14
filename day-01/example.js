//RxJS
const button = document.querySelector("button");
const obs$ = rxjs.fromEvent(button, "click");

const a = obs$.subscribe(() => console.log("Clicked RxJS!"));
const b = obs$.subscribe(() => alert("hey"));
