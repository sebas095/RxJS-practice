// https://medium.com/@jorgeucano/30-d%C3%ADas-con-rxjs-d%C3%ADa-10-514da1f3005b
const { multicast } = rxjs.operators;

const source = rxjs.interval(500);
const subject = new rxjs.Subject();
const multicasted = source.pipe(multicast(subject));

let subscription1, subscription2, subscriptionConnect;

subscription1 = multicasted.subscribe({
  next: (v) => console.log("observer A: " + v),
});

subscriptionConnect = multicasted.connect();

setTimeout(() => {
  subscription2 = multicasted.subscribe({
    next: (v) => console.log("Observer B: " + v),
  });
}, 600);

setTimeout(() => {
  subscription1.unsubscribe();
}, 1200);

setTimeout(() => {
  subscription2.unsubscribe();
  subscriptionConnect.unsubscribe();
}, 2000);
