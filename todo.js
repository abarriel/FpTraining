const R = require('ramda');

const todos = [
  {
    id: 1,
    label: 'Learning JS stack',
    type: 'learning',
    tasks: [
      {
        id: 1,
        description: 'Learn Promises',
        isDone: false,
        runningTime: 24,
      },
      {
        id: 2,
        description: 'Learn Async.js',
        isDone: true,
        runningTime: 45,
      },
      {
        id: 3,
        description: 'Learn Ramda.js',
        isDone: false,
        runningTime: 13,
      },
    ]
  },
  {
    id: 2,
    label: 'Learning how to craft a SPA',
    dueDate: new Date(2017, 4, 22),
    type: 'learning',
    tasks: [
      {
        id: 1,
        description: 'Learn React',
        isDone: true,
        runningTime: 22,
      },
      {
        id: 2,
        description: 'Learn Redux',
        isDone: false,
        runningTime: 7,
      },
    ]
  },
  {
    id: 3,
    label: 'code first sample',
    dueDate: new Date(2017, 4, 22),
    type: 'coding',
  },
  {
    id: 4,
    label: 'implement tests',
    dueDate: new Date(2019, 12, 11),
    type: 'coding',
  },
];

// 1
console.log('Mapper 1');
const mapper = R.compose(
  R.values,
  R.pick([ 'type', 'label', 'dueDate']),
)
const arrayTodos = R.map((value, index) => mapper(value), todos);
console.log(arrayTodos);
console.log('\n');

// 1
const getValues = R.map(R.values);
const pickValues = R.map(R.pick([ 'type', 'label', 'dueDate']));
const mapper2 = R.compose(getValues, pickValues)
console.log(mapper2(todos));
console.log('\n');

const handler = R.compose(
  R.values,
  R.pick([ 'type', 'label', 'dueDate']),
)
const mapperr = R.compose(
  R.map(R.values),
  R.map(handler),
)
console.log(mapper2(todos));
console.log('\n');


// test 2
const incomingMessage = ({ dueDate }) => dueDate > Date.now();

const mapper3 = R.compose(
  mapper2,
  R.filter(incomingMessage),
)

console.log(mapper3(todos));
console.log('\n');
 // test 3
const isLearning = ({ type }) => type === 'learning';
const teste = (acc, v, array) => {
  console.log('ok');
  console.log(acc);
  console.log(v);
  console.log(array);
  return acc + v;
};

console.log('Mapper 3');
const mapper4 = R.compose(
  R.reduce(R.add, 0),
  R.map(R.propOr(0, 'runningTime')),
  R.reduce(R.concat, []),
  R.map(R.propOr(0, 'tasks')),
  R.filter(isLearning),
)

console.log(mapper4(todos));
console.log('\n');
// test4

// console.log(todos);
console.log('\n');
console.log('Mapper 4');
const test = (a, b, c) => {
  return ;
};
const filterBy = (filter) => R.filter(filter);
const pluckBy = (whichItem) => R.pluck(whichItem);
const mapper5 = R.compose(
  R.chain(pluckBy('runningTime')),
  pluckBy('tasks'),
  filterBy(isLearning),
)
console.log('\n');
console.log(mapper5(todos));