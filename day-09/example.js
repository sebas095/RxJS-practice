// https://medium.com/@jorgeucano/30-d%C3%ADas-con-rxjs-d%C3%ADa-9-fcae24a103e3
const { multicast } = rxjs.operators;
const source = rxjs.from([1, 2, 3, 4, 5, 6]);

const subject = new rxjs.Subject();
const multicasted = source.pipe(multicast(subject));

multicasted.subscribe({
  next: (v) => console.log("observer A: " + v),
});

multicasted.subscribe({
  next: (v) => console.log("observer b: " + v),
});

multicasted.connect();
