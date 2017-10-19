var countWater = function(array) {

    var max = 0;
        total = 0;
        left = 0;
        right = array.length - 1;


    array.forEach(function (elem) {

        if (array[left] <= array[right]) {
            //console.log(elem, array[left]);
            max = Math.max(max,array[left]);
            total += max - array[left];
            left++;
        } else if (array[right] < elem) {
            max = Math.max(max,array[right]);
            total += max - array[right];
            right--;
        }
    });

    return total;
};

console.log(countWater([2, 5, 1, 3, 1, 2, 1, 7, 7, 6]));
console.log(countWater([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0]));
console.log(countWater([7, 0, 1, 3, 4, 1, 2, 1]));
console.log(countWater([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0]));
console.log(countWater([2, 2, 1, 2, 2, 3, 0, 1, 2]));
console.log(countWater([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 8]));
console.log(countWater([2, 2, 2, 2, 2]));