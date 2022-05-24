let names = 'Vlocity';

function foo() {
  names = 'Developer';
  return function name() {};
}

foo();
console.log(names);
