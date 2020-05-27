// https://medium.com/@jorgeucano/base-30-d%C3%ADas-con-rxjs-d%C3%ADa-19-3dfa6c64c29b
// https://medium.com/@jorgeucano/30-d%C3%ADas-con-rxjs-d%C3%ADa-20-786f488a8d37

// npm install rxjs

//  npm
import { Observable, from } from "rxjs";
import { map } from "rxjs/operators";

//commonjs
const { Observable } = require("rxjs");

// cdn
const { Observable, from } = rxjs;
const { map, filter } = rxjs.operators;

from([1, 2, 3, 4])
  .pipe(
    filter((x) => x % 2 === 0),
    map((x) => x + " es par")
  )
  .subscribe({
    next: (x) => console.log(x),
  });
