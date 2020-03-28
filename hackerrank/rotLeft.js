function rotLeft(a, d) {
    // for (let i = d; i < a.length; i++) {
    //     resultArray.push(a[i]);
    // }

    // for (let i = 0; i < d; i++) {
    //     resultArray.push(a[i]);
    // }

    for (let i = 0; i < d; i++) {
        const shifter = a[0];

        for (let j = 0; j < a.length; j++) {
            a[j] = a[j + 1];
        }

        a[a.length - 1] = shifter;
    }
    return a;
}

console.log(rotLeft([1, 2, 3, 4, 5], 4));