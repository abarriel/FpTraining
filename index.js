const R = require('ramda');
let data1 = [1, 2, 3, 4];
let add = a => b => a + b;
let incr = add(1);
console.log(data1.map(incr));
let add1 = R.add(1);
incr = R.map(add1);
console.log(incr(data1));


const add = (a, b) => a + b;
console.log(data1.reduce(add, 1));
let fact =  R.reduce(R.multiply, 1);
// console.log(fact(data1));

let range = size => Array.from(new Array(size), (x, i) => i + 1);
fact = size => R.reduce(R.multiply, 1, range(size));
console.log(fact(5));
// console.log(range(10));

data1 = [
    { id: 1, label: 'data1' },
    { id: 2, label: 'data2' },
    { id: 3, label: 'data3' },
    { id: 4, label: 'data4' },
];

console.log(data1.reduce((acc, items) => ({ ...acc, [items.id]: items }), {}));
const toDict = R.reduce((acc, v) => ({...acc, [v.id]: v }), {});
console.log(data1.reduce((acc, items) => Object.assign({}, acc, { [items.id]: items}), {}));

const toPairs = R.map(x => [x.id, x])

const fromPairs = R.reduce((acc, [id, v]) => ({ ...acc, [id]: v }), {});
const makeDict = R.compose(R.fromPairs, R.toPairs);
console.log(makeDict(data1));
console.log(R.fromPairs(R.toPairs(data1)));

map = reduce et concat;

const map = R.reduce((acc, v) => R.concat(acc, [v]), []);

console.log(R.filter((x) => x % 2, data1));
const mapper = R.compose(mapper, R.concat);
const mapper = R.compose(mapper, R.concat);
console.log(map(data1));

const isOdd = x => x % 2;

let data = [1, 2 ,3 ,4 ,5 ,6];
const filterOddNumbers = R.filter(isOdd);
data = R.times((n) => n + 1, 5);
console.log(data);
console.log(filterOddNumbers(data));
const map = R.reduce((acc, v) => isOdd(v), []);
console.log(map(data));
const X = 1;
const O = 2;

let board = [
  O, X, O,
    ,O, X,
  X,X, X
];

const oneLine = (tab, line) => tab.filter((value, index) => parseInt(index / 3) === line);

const oneColumn = (tab, line) => tab.filter((value, index) => index % 3 === line);

const oneDiagonalLeft = (tab, line) => tab.filter((value, index) => parseInt(index / 3) === (index % 3));

const oneDiagonalRight = (tab, line) => tab.filter((value, index) => (parseInt(index / 3) + (index % 3) === line));

const isFull = (line, lineFilter) => (tab) => {
   const res = R.countBy(R.identity)(lineFilter(tab, line));
   return (res[X] === 3 || res[O] === 3);
};

// 0 1 2 
// 3 4 5
// 6 7 8

// MATRIX 
// 0,0 0,1 0,2
// 1,0 1,1 1,2
// 2,0 2,1 2,2

const patterns = [
  isFull(0, oneLine), 
  isFull(1, oneLine), 
  isFull(2, oneLine), 
  isFull(0, oneColumn),
  isFull(1, oneColumn),
  isFull(2, oneColumn),
  isFull(0, oneDiagonalLeft),
  isFull(2, oneDiagonalRight),
];
const isEndend = board =>  patterns.some(fct => fct(board));
console.log('Should be true', isEndend(board));
board = [
  O, X, O,
  O, O ,O,
  X, X, ,
]
console.log('Should be true', isEndend(board));
board = [
  O, X, O,
  , O ,O,
  X, X, ,
]
console.log('Should be false', isEndend(board));
board = [
  O, X, O,
  ,  ,,
  X, X, ,
]
console.log('Should be false', isEndend(board));
board = [
  O, X, O,
  ,  X, ,
  X, X, ,
]
console.log('Should be true', isEndend(board));
board = [
  , , ,
  ,  , ,
  , , ,
]
console.log('Should be false', isEndend(board));
board = [
  X, X, O,
  ,  X, ,
  , , X,
]
console.log('Should be true', isEndend(board));
