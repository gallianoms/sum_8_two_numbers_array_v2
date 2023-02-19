"use strict";
exports.__esModule = true;
// const arr = [1,3,6,9] // False
var arr = [1, 6, 2, 10]; // True 6 + 2 = 8
var sum = function (arr, num) {
    var complements = arr.map(function (item) { return num - item; });
    return arr.some(function (item, idx) {
        while (idx < complements.length) {
            if (item === complements[idx + 1])
                return true;
            idx++;
        }
        return false;
    });
};
console.log(sum(arr, 8)); // complements [ 7, 2, 6, -2 ]
