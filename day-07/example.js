//https://medium.com/@jorgeucano/30-d%C3%ADas-con-rxjs-d%C3%ADa-7-e7c068e7865
const observable1 = rxjs.interval(400);
const observable2 = rxjs.interval(300);

const subscription = observable1.subscribe((x) => console.log("primero: " + x));
const childSubscription = observable2.subscribe((x) =>
  console.log("segundo: " + x)
);

subscription.add(childSubscription);

setTimeout(() => {
  subscription.remove(childSubscription);
  subscription.unsubscribe();
}, 1000);
