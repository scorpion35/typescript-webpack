import { Observable } from "rxjs";

import { createPopper } from '@popperjs/core';
import "./styles/index.scss";

const h2 = document.querySelector("#rxjs") as HTMLHeadElement;

const obs = new Observable<string>(subscriber => {
  subscriber.next("Hello, Observables!");
  subscriber.next("Hello, Observables 2!");
});

obs.subscribe(o => {
  const textNode = document.createTextNode(o);
  textNode.textContent = o;
  h2.innerHTML = textNode.textContent;
});

console.log('Hello, Webpack!');
