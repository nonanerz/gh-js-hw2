var countWater = function(array) {

    var step = 0;
        left = 0;
        total = 0;
        right = array[array.length - 1];

    array.forEach(function (elem, index) {
        left > elem ? total = total + (left - elem) : (left = elem, step = index);
    });

    for (i = array.length - 1; i > step; i--) {
        array[i] > right ? right = array[i] : null;
        total = total - (array[step] - right);
    }

    return total;
};

console.log(countWater([2, 5, 1, 3, 1, 2, 1, 7, 7, 6]));
console.log(countWater([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0]));
console.log(countWater([7, 0, 1, 3, 4, 1, 2, 1]));
console.log(countWater([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0]));
console.log(countWater([2, 2, 1, 2, 2, 3, 0, 1, 2]));
console.log(countWater([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 8]));
console.log(countWater([2, 2, 2, 2, 2]));