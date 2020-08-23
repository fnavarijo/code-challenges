const pipe = (...funcs) => x => funcs.reduce((y, f) => f(y), x);
const trace = label => value => {
  console.log(`${label}: ${value}`);
  return value;
}

const encodeValues = {
  a: 1,
  e: 2,
  i: 3,
  o: 4,
  u: 5,
};

const decodedValues = {
  1: 'a',
  2: 'e',
  3: 'i',
  4: 'o',
  5: 'u',
}

const translateTo = dictionary => symbol => dictionary[symbol] || symbol;
const encodeTo = translateTo(encodeValues);
const decodeTo = translateTo(decodedValues);

function encode (word) {
  const encoding = pipe(
    encodeTo,
    trace('After translated'),
  )
  return word.split('').map(encoding).join('');
}

function decode (word) {
  const decoding = pipe(
    decodeTo,
    trace('After translated'),
  )
  return word.split('').map(decoding).join('');
}

console.log(decode(encode('hello')));
console.log(encode('How are you today?'))