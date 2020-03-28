// Complete the repeatedString function below.
function repeatedString(s, n) {   
    const substrSize = n % s.length;
    const substr = s.substr(0, substrSize);

    let letterCounter = 0;
    for(let i = 0; i < s.length; i++) {
        if (s.charAt(i) == 'a') letterCounter++;
    }

    let substrCounter = 0;
    for(let i = 0; i < substr.length; i++) {
        if (substr.charAt(i) == 'a') substrCounter++;
    }

    return (letterCounter * (Math.floor(n/s.length))) + substrCounter;
}

console.log(repeatedString('aba', 10));
console.log(repeatedString('a', 1000000000000));