function list(names) {
  const hasMoreElements = names.length > 1;
  const namesList = names.map(({ name }) => name);
  const lastName = hasMoreElements ? namesList.pop() : null;
  let nameString = namesList.join(', ');
  nameString += lastName ? ` & ${lastName}` : '';
  return nameString;
}

console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]));
console.log(list([{name: 'Bart'},{name: 'Lisa'}]));
console.log(list([{name: 'Bart'}]));