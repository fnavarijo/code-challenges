// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
    let jumps = 0;
    let pos = 0;
    while (pos < c.length - 1) {
        pos += (c[pos + 2] == 1) ? 1 : 2
        jumps += 1;
    }
    return jumps;
}

// console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]));
console.log(jumpingOnClouds([0, 0, 1, 0, 1, 0, 0]));
// console.log(jumpingOnClouds([0, 0, 0, 0, 1, 0]));