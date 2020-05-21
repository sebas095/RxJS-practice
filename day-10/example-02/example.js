// https://medium.com/@jorgeucano/30-d%C3%ADas-con-rxjs-d%C3%ADa-10-514da1f3005b
const { multicast, refCount } = rxjs.operators;

const source = rxjs.interval(500);
const subject = new rxjs.Subject();
const refCounted = source.pipe(multicast(subject), refCount());

let subscription1, subscription2, subscriptionConnect;

console.log("ObserverA subscribed");
subscription1 = refCounted.subscribe({
  next: (v) => console.log("Observer A: " + v),
});

setTimeout(() => {
  console.log("ObserverB subscribe");
  subscription2 = refCounted.subscribe({
    next: (v) => console.log("Observer B: " + v),
  });
}, 600);

setTimeout(() => {
  console.log("Observer A unsubscribed");
  subscription1.unsubscribe();
}, 1200);

setTimeout(() => {
  console.log("observer B unsubscribed");
  subscription2.unsubscribe();
}, 2000);
