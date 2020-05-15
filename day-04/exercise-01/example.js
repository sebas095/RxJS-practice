// https://medium.com/@jorgeucano/30-d%C3%ADas-con-rxjs-d%C3%ADa-4-238a80e72809
function foo() {
  console.log("Hello");
  return 42;
}

const x = foo();
console.log(x);

const y = foo();
console.log(y);

//rxjs
const fooRxjs = rxjs.Observable.create((observer) => {
  console.log("Hello");
  observer.next(42);
});

fooRxjs.subscribe((x) => {
  console.log(x);
});

fooRxjs.subscribe((y) => {
  console.log(y);
});
