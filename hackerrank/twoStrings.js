// Complete the twoStrings function below.
function twoStrings(s1, s2) {
    const dictionary = {};
    let hasSubstr = false;
    for (let char of s1) {
        dictionary[char] = char;
    }
    
    for (let char of s2) {
        if (dictionary[char] != undefined) {
            hasSubstr = true;
            break;
        }
    }
   
    return hasSubstr ? 'YES' : 'NO';

}

console.log(twoStrings('hello', 'world'));
console.log(twoStrings('hi', 'world'));