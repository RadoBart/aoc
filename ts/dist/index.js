"use strict";
var list = [1721,
    979,
    366,
    299,
    675,
    1456];
var listLength = list.length;
console.log(list.reduce(function (acc, val, index, arr) {
    if (acc != 0) {
        return acc;
    }
    var matchingEl = arr.slice(index + 1, listLength).find(function (el) { return el + val === 2020; });
    console.log(matchingEl);
    console.log(val);
    return matchingEl ? matchingEl * val : 0;
}));
