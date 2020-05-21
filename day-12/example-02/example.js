// https://medium.com/@jorgeucano/30-d%C3%ADas-con-rxjs-d%C3%ADa-12-9115f7f978e1

const subject = new rxjs.ReplaySubject(100, 500); // 500 windows time

subject.subscribe({
  next: (v) => console.log("observer A: " + v),
});

var i = 1;
setInterval(() => subject.next(i++), 200);

setTimeout(() => {
  subject.subscribe({
    next: (v) => console.log("Observer B: " + v),
  });
}, 1000);
