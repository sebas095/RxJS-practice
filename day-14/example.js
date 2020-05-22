// https://medium.com/@jorgeucano/30-d%C3%ADas-con-rxjs-d%C3%ADa-14-f0e603a6c8c3

function mutiplyByTen(input) {
  return rxjs.Observable.create((observer) => {
    input.subscribe({
      next: (v) => observer.next(10 * v),
      error: (err) => observer.error(err),
      complete: () => observer.complete(),
    });
  });
}

const input = rxjs.from([1, 2, 3, 4]);
const output = mutiplyByTen(input);
output.subscribe((x) => console.log(x));
