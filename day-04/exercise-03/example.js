// https://medium.com/@jorgeucano/30-d%C3%ADas-con-rxjs-d%C3%ADa-4-238a80e72809
function foo() {
  console.log("Hello 1");
  return 42;
  return 100;
}

console.log(foo());

const fooRxJS = rxjs.Observable.create((observer) => {
  console.log("Hello 2");
  observer.next(42);
  observer.next(100);
  observer.next(200);

  setTimeout(() => {
    observer.next(300);
  }, 1000);
});

console.log("before");
fooRxJS.subscribe((x) => {
  console.log(x);
});
console.log("after");
