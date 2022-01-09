import "./styles.css";

import { from } from "rxjs";
import { map, filter } from "rxjs/operators";

let numberObservable = from([1, 2, 3, 4, 5]);
let squareNumbers = numberObservable.pipe(
  filter((val) => val > 2),
  map((val) => val * val)
);

console.log(squareNumbers);
let subscription = squareNumbers.subscribe((result) => {
  console.log(result);
  // subscription.unsubscribe();
});

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
