// Complete the hourglassSum function below.
function hourglassSum(arr) {
    let maxValue = -64;
    for(let i = 1; i <= arr.length - 2; i++) {
        for(let j = 1; j <= arr[i].length - 2; j++) {
            const sum = arr[i][j] + arr[i - 1][j - 1] + arr[i - 1][j] + arr[i - 1][j + 1] + arr[i + 1][j - 1] + arr[i + 1][j] + arr[i + 1][j + 1];
            if (sum > maxValue) maxValue = sum;
        }
    }
    return maxValue;
} 


const matrix = [[1, 1, 1, 0, 0, 0],
                [0, 1, 0, 0, 0, 0],
                [1, 1, 1, 0, 0, 0],
                [0, 0, 2, 4, 4, 0],
                [0, 0, 0, 2, 0, 0],
                [0, 0, 1, 2, 4, 0]];
console.log(hourglassSum(matrix))