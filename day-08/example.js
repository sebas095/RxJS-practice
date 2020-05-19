// https://medium.com/@jorgeucano/30-d%C3%ADas-con-rxjs-d%C3%ADa-08-74ac559e80cf

const subject = new rxjs.Subject();

subject.subscribe({
  next: (v) => console.log("ObserverA " + v),
});

subject.subscribe({
  next: (v) => console.log("ObserverB " + v),
});

const observable = rxjs.from([1, 2, 3]);

observable.subscribe(subject);
