// https://medium.com/@jorgeucano/d%C3%ADas-con-rxjs-d%C3%ADa-18-4c7c51562c0
/*
const input = document.getElementById("input");
const { map, filter, throttleTime } = rxjs.operators;
let entradaTotal = "";

input.focus();

const receptor = rxjs.fromEvent(input, "keydown").pipe(
  map((ev) => ev.key),
  filter((key) => key !== " ")
);

receptor.subscribe({
  next: (v) => insert(v),
  error: (err) => console.log(error),
  complete: () => console.log("complete"),
});

function insert(v) {
  entradaTotal += v;
  console.log(entradaTotal);
}
*/
// *************************************************************************
/*
const mouseReceptor = rxjs.fromEvent(document, "mousemove").pipe(
  map((event) => event),
  throttleTime(1)
);

mouseReceptor.subscribe({
  next: (v) => mouseInsert(v),
  error: (err) => console.log(error),
  complete: () => console.log("complete"),
});

function mouseInsert(v) {
  console.log(v.clientY, v.clientX);
}
*/

const input = document.getElementById("input");
const text = document.getElementById("text");
const button = document.getElementById("button");

const {
  map,
  scan,
  filter,
  startWith,
  switchMap,
  throttleTime,
} = rxjs.operators;

let entradaTotal = "";
let move = true;

input.focus();

const receptor$ = rxjs.fromEvent(input, "keydown").pipe(
  map((ev) => ev.key),
  filter((key) => key !== " ")
);

receptor$.subscribe({
  next: (v) => insert(v),
  error: (err) => console.log(error),
  complete: () => console.log("complete"),
});

function insert(v) {
  entradaTotal += v;
  text.innerText = entradaTotal;
}

// ****************************************************************************

const mouseReceptor$ = rxjs.fromEvent(document, "mousemove").pipe(
  map((event) => event),
  throttleTime(1)
);

mouseReceptor$.subscribe({
  next: (v) => mouseInsert(v),
  error: (err) => console.log(error),
  complete: () => console.log("complete"),
});

function mouseInsert(v) {
  if (move) {
    const x = v.clientX + 10 + "px";
    const y = v.clientY + 10 + "px";

    text.style.top = y;
    text.style.left = x;
    text.style.position = "absolute";
  }
}

// ****************************************************************************

const empty = rxjs.empty();
const counter = rxjs.timer(0, 1000);

const pauseResume$ = rxjs.fromEvent(button, "click").pipe(
  scan((acc) => !acc, true),
  startWith(true)
  //switchMap((resume) => (resume ? counter : empty))
);

pauseResume$.subscribe({
  next: (v) => {
    move = v;
    move ? (button.innerText = "Pause") : (button.innerText = "Start");
  },
});
