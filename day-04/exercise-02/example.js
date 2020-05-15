// https://medium.com/@jorgeucano/30-d%C3%ADas-con-rxjs-d%C3%ADa-4-238a80e72809
function foo() {
  console.log("Hello");
  return 42;
}

console.log("antes");
console.log(foo());
console.log("despues");

const fooRxjs = rxjs.Observable.create((observer) => {
  console.log("Hello");
  observer.next(42);
});

console.log("antes");
fooRxjs.subscribe((x) => {
  console.log(x);
});
console.log("despues");
