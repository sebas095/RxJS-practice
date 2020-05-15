// https://medium.com/@jorgeucano/30-d%C3%ADas-con-rxjs-d%C3%ADa-2-557e05c4db96
let count = 0;
const rate = 1000;
let lastClick = Date.now() - rate;
const jsButton = document.getElementById("JSButton");

jsButton.addEventListener("click", (event) => {
  if (Date.now() - lastClick >= rate) {
    count += event.clientX;
    console.log(count);
    lastClick = Date.now();
  }
});

const rxButton = document.getElementById("RxJSButton");
const { throttleTime, map, scan } = rxjs.operators;

rxjs
  .fromEvent(rxButton, "click")
  .pipe(
    throttleTime(1000),
    map((event) => event.clientX),
    scan((count, clientX) => count + clientX, 0)
  )
  .subscribe((count) => console.log(count));
