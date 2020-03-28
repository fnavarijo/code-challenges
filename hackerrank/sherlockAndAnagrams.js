// Complete the sherlockAndAnagrams function below.
function sherlockAndAnagrams(s) {
    const dictionary = {};
    let rangeSubstr = 1;
    let pairs = 0;
    while (rangeSubstr < s.length) {
        for (let i = 0; i < s.length; i++) {
            const finalPos = i + rangeSubstr;
            if (finalPos <= s.length) {
                const substr = s.substring(i, i + rangeSubstr);
                const orderedSubstr = substr.split('').sort().join('');
                if (!dictionary[orderedSubstr]) dictionary[orderedSubstr] = 1;
                else dictionary[orderedSubstr] += 1;
            }
        }
        rangeSubstr++;
    }

    for (let word of Object.keys(dictionary)) {
        const times = dictionary[word];
        const posibleCombinations = (times*(times - 1)/2);
        if (times != 0) pairs += posibleCombinations;
    }

    return pairs;
}


console.log(sherlockAndAnagrams('abba'));
console.log(sherlockAndAnagrams('abcd'));
console.log(sherlockAndAnagrams('ifailuhkqq'));
console.log(sherlockAndAnagrams('kkkk'));