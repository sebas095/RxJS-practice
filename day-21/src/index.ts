import { Observable, fromEvent, combineLatest } from "rxjs";
import {
  map,
  filter,
  scan,
  tap,
  take,
  repeat,
  withLatestFrom,
} from "rxjs/operators";

const _days = document.getElementById("weekDays");
const day$ = fromEvent(_days, "click").pipe(
  map((ev) => (ev.target as any).innerHTML)
);

const _newspapers = document.getElementById("newspapers");
const newspaper$ = fromEvent(_newspapers, "click").pipe(
  map((ev) => (ev.target as any).innerHTML),
  //tap((v) => console.log(v)),
  scan((news, edit) => {
    if (news.includes(edit)) {
      return news;
    }
    return [...news, edit];
  }, [])
  //tap((v) => console.log(v))
);

const _next = document.getElementById("next");
const sendNews$ = fromEvent(_next, "click").pipe(map((ev) => true));

const voldemort$ = combineLatest([day$, newspaper$, sendNews$]).pipe(
  map(([day, newspapers, sendNews]) => ({ day, newspapers }))
);

const jorge$ = voldemort$.pipe(
  filter(
    ({ day, newspapers }) => day === "Domingo" && newspapers.includes("ABC")
  ),
  take(1),
  repeat()
);

jorge$.subscribe((v) => console.log("Jorge: ", v));

const harryPotter$ = sendNews$.pipe(
  withLatestFrom(newspaper$, day$),
  map(([sendNews, day, newspapers]) => {
    console.log("Harry Potter", { day, newspapers });
    return { day: day[0], newspapers };
  })
);

const joe$ = harryPotter$.pipe(
  filter(
    ({ day, newspapers }) => day === "Domingo" && newspapers.includes("ABC")
  ),
  take(1),
  repeat()
);

joe$.subscribe((v) => console.log("Joe: ", v));
