// Complete the countingValleys function below.
function countingValleys(n, s) {
    let stepPos = 0
    let valleyCount = 0;
    // for (let i = 0; i < n; i++) {
    //     const directionStep = s.charAt(i) == 'D' ? 1 : -1;
    //     if (stepPos + directionStep == 0 && stepPos == 1) valleyCount++;
    //     stepPos += directionStep;
    // }

    s.split('').reduce((total, char) => {
        const directionStep = char == 'D' ? 1 : -1;
        if (total + directionStep == 0 && total == 1) valleyCount++;
        return total += directionStep
    }, 0);

    return valleyCount;
}

// console.log(countingValleys(8, 'UDDDUDUU'))
console.log(countingValleys(12, 'DDUUDDUDUUUD'))