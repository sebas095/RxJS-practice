// https://medium.com/@jorgeucano/30-d%C3%ADas-con-rxjs-d%C3%ADa-15-edd5e5fddf56
const multiplyByTen = () => (source) =>
  rxjs.Observable.create((observer) => {
    source.subscribe({
      next: (v) => observer.next(10 * v),
      error: (err) => observer.error(err),
      complete: () => observer.complete(),
    });
  });

const observable = rxjs.from([1, 2, 3, 4]).pipe(multiplyByTen());
observable.subscribe((x) => console.log(x));

const observable2 = rxjs.interval(1000).pipe(multiplyByTen());

/*
const { merge } = rxjs.operators;
const observable3 = rxjs.interval(5000);
const observable4 = rxjs.interval(1000);
const merged = observable3.pipe(merge(observable4));
merged.subscribe((x) => console.log(x));
*/
