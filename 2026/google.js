/*
Given two lists of elements A and B (can be anything strings, integers etc), compute the diff between them. Note that each of the lists can contain duplicates.

The diff should return two lists:

 Elements in A that are not in B
 Elements in B that are not in A


Diff([1,2,3,4], [1,2,3]] = [4] and [] */

console.log(diff([1, 2, 3, 4], [1, 2, 3]));
function diff(arrA, arrB) {
    var mapA = new Map();
    var mapB = new Map();

    for (var num of arrA) {
        mapA.set(num, (mapA.get(num) || 0) + 1);
    }
    for (var num of arrB) {
        mapB.set(num, (mapB.get(num) || 0) + 1);
    }

    //console.log(mapA, mapB);

    var diffA = new Array();
    for (var [key, val] of mapA) {
        var valA = val;
        var valB = mapB.get(key) || 0;

        var diff = valA - valB;
        //console.log(diff);
        for (var i = 0; i < diff; i++) diffA.push(key);
    }

    var diffB = new Array();
    for (var [key, val] of mapB) {
        var valB = val;
        var valA = mapA.get(key) || 0;

        var diff = valB - valA;
        //console.log(diff);
        for (var i = 0; i < diff; i++) diffB.push(key);
    }
    return [diffA, diffB];
}
