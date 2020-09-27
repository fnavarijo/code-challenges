// Print 1 to 100.
//   - If is multiple of 3, print 'Fizz'. 
//   - If is multiple of 5, print 'Buzz'.
//   - If both, print 'FizzBuzz'.

// Divisibility
const isDivisible = base => number => number % base === 0;
const isDivisibleBy3 = isDivisible(3);
const isDivisibleBy5 = isDivisible(5);

// Incrementor
const incr = number => number + 1;

// Printer
const printIfDivisible = condition => text  => number => condition(number) ? text : '';

const printFizz = printIfDivisible(isDivisibleBy3)('Fizz');
const printBuzz = printIfDivisible(isDivisibleBy5)('Buzz');

const numbersList = new Array(100).fill(1);
const fizzbuzz = numbersList
  .map((_, index) => `${printFizz(incr(index))}${printBuzz(incr(index))}` || incr(index));

console.log(fizzbuzz);