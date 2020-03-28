function recursiveTriplet(index, tripletDic, step = 1) {
    if (step == 3) {
        return [index];
    } else {
        const nextIndex = tripletDic[index].nextIndex.shift();
        const indexPath = recursiveTriplet(nextIndex, tripletDic, step + 1);
        indexPath.push(index);
        return indexPath; 
    }
}

// Complete the countTriplets function below.
function countTriplets(arr, r) {
    const foundTriplets = {};
    let tripletsFound = 0;
    for (let index in arr) {
        if (!foundTriplets[index])
            foundTriplets[index] = { nextIndex: [] };

        const nextNumber = arr[index] * r;
        const existingNumberIdx = arr.map((n, idx) => n == nextNumber ? idx : null ).filter(n => n != null);
        foundTriplets[index].nextIndex.push(...existingNumberIdx);
    }

    const tripletsPaths = Object.assign({}, foundTriplets);
    const indexes = Object.keys(tripletsPaths);
    for (let index of indexes) {
        const nextIndexes = tripletsPaths[index].nextIndex;
        const tripletsCopy = JSON.parse(JSON.stringify(tripletsPaths));
        for (let nextIndex of nextIndexes) {
            
            const triplet = recursiveTriplet(index, tripletsCopy);
            console.log(triplet);
            if (triplet.every(n => !!n !== false)) tripletsFound++;
        }
    }

    console.log(foundTriplets);
    return tripletsFound;
}

// console.log(countTriplets([1, 2, 2, 4], 2));
console.log(countTriplets([1, 3, 9, 9, 27, 81], 3));
// console.log(countTriplets([1, 5, 5, 25, 125], 5));