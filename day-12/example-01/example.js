// https://medium.com/@jorgeucano/30-d%C3%ADas-con-rxjs-d%C3%ADa-12-9115f7f978e1
const subject = new rxjs.ReplaySubject(3); // buffer 3 values for new subscribers

subject.subscribe({
  next: (v) => console.log("observer A: " + v),
});

subject.next(1);
subject.next(2);
subject.next(3);
subject.next(4);

subject.subscribe({
  next: (v) => console.log("observer B: " + v),
});

subject.next(5);
