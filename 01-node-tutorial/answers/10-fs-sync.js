const { readFileSync, writeFileSync } = require("fs");
//const fs = require('fs')
console.log('start');
const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

console.log(first, second);
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result ${first}, ${second}. Hello world`,
  {flag: 'a'}
);

console.log('done with a task');
console.log('starting the next one');