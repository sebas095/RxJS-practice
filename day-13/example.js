// https://medium.com/@jorgeucano/30-d%C3%ADas-con-rxjs-d%C3%ADa-13-452405020a6
const subject = new rxjs.AsyncSubject();

subject.subscribe({
  next: (v) => console.log("Observer A: " + v),
});

subject.next(1);
subject.next(2);
subject.next(3);
subject.next(4);

subject.subscribe({
  next: (v) => console.log("Observer B: " + v),
});

subject.next(5);
subject.complete();
