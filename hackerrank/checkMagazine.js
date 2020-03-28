function removeFromArray(array) {
    return (idx) => array.slice(0, idx).concat(array.slice(idx + 1))
}

function checkMagazine(magazine, note) {
    let canReplicate = 'Yes';
    let magazineStash = magazine.slice();
    for(let word of note) {
        let idx = magazineStash.findIndex(mword => mword == word);
        let removeByIdx = removeFromArray(magazineStash);
        if (idx == -1) {
            canReplicate = 'No';
            break;
        };
        magazineStash = removeByIdx(idx);
    }
    console.log(canReplicate);
}

let marray = ['give', 'me', 'one', 'grand', 'today', 'night'];
let narray = ['give', 'one', 'grand', 'today'];
checkMagazine(marray, narray);

let marray2 = ['two', 'times', 'three', 'is', 'not', 'four'];
let narray2 = ['two', 'times', 'two', 'is', 'four'];
checkMagazine(marray2, narray2);