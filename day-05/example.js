// https://medium.com/@jorgeucano/30-d%C3%ADas-con-rxjs-d%C3%ADa-5-d07c52ac1812

const observable = rxjs.Observable.create((observer) => {
  // subscribe
  const id = setInterval(() => {
    observer.next("hola");
  }, 1000);

  // unsubscribe
  return () => {
    clearInterval(id);
  };
});

const subscription = observable.subscribe((x) => console.log(x));
subscription.unsubscribe();

function subscribe(observer) {
  const id = setInterval(() => {
    observer.next("hola");
  }, 1000);

  return function unsubscribe() {
    clearInterval(id);
  };
}

const unsubscribe = subscribe({ next: (x) => console.log(x) });
unsubscribe();
