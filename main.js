import { add, sub, div, mul } from './modules/operations.js';

console.log(add(1, 2));
console.log(sub(6, 2));
console.log(div(4, 2));
console.log(mul(10, 2));

let count = 0;
let maxCount = 6;

// eventlyssnare på knappen
document.getElementById('btn').addEventListener('click', counter());
