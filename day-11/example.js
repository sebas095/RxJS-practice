// https://medium.com/@jorgeucano/30-d%C3%ADas-con-rxjs-d%C3%ADa-11-bf99fc2c683a
const subject = new rxjs.BehaviorSubject(0); // valor inicial

subject.subscribe({
  next: (v) => console.log("Observer A" + v),
});

subject.next(1);
subject.next(2);

subject.subscribe({
  next: (v) => console.log("Observer B" + v),
});

subject.next(3);
