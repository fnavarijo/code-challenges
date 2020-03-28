from functools import reduce;

def reduceFunction(beforeArray, numbers):
    if (beforeArray[len(beforeArray) - 1] != numbers):
        beforeArray.append(numbers);
    return beforeArray;

def filterArray(numbersArray):
    numbersReduced = reduce(reduceFunction, numbersArray, [[]])
    numbersReduced.pop(0);
    return numbersReduced;

def threesum(numberArray):
    resultArray = [];
    for number1 in numberArray:
        for number2 in numberArray:
            for number3 in numberArray:
                sumResult = number1 + number2 + number3;
                if (sumResult == 0):
                    arrayValues = [number1, number2, number3];
                    resultArray.append(arrayValues);
    for orderedArray in resultArray:
        orderedArray.sort();     
    resultArray.sort();

    return filterArray(resultArray);


print(threesum([-1, 0, 1, 2, -1, -4]));