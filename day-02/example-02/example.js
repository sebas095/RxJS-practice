// https://medium.com/@jorgeucano/30-d%C3%ADas-con-rxjs-d%C3%ADa-2-557e05c4db96
let count = 0;
const rate = 3000;
let lastClick = Date.now() - rate;
const jsButton = document.getElementById("JSButton");

jsButton.addEventListener("click", () => {
  if (Date.now() - lastClick >= rate) {
    console.log(`JS Clicked ${++count} times`);
    lastClick = Date.now();
  }
});

const rxButton = document.getElementById("RxJSButton");
const { scan, throttleTime } = rxjs.operators;

rxjs
  .fromEvent(rxButton, "click")
  .pipe(
    throttleTime(3000),
    scan((count) => count + 1, 0)
  )
  .subscribe((count) => console.log(`Clicked ${count} times`));
