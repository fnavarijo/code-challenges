// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    const reference = {};
    let pairsCount = 0;
    for (let i = 0; i < n; i++) {
        if (!reference[ar[i]]) reference[ar[i]] = 1;
        else {
            pairsCount += 1;
            reference[ar[i]] = 0;
        } 
    }

    // const pairs = Object.keys(reference);
    // let pairsCount = 0;
    // for (let i = 0; i < pairs.length; i++) {
    //     pairsCount += Math.floor(reference[pairs[i]] / 2);
    // }

    return pairsCount;
}


console.log(sockMerchant(9, [10,20,20,10,10,30,50,10,20]));

