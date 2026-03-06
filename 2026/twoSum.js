console.log(twoSum([2, 7, 8, 9], 9));
console.log(twoSum([7, 8, 9, 2], 10));
console.log(twoSum([], 10));

/*
    space complexity: O(n)
    time complexity : O(n)
*/

function twoSum(arr, target) {
    var numsMap = new Map();

    if (arr.length == 0) return [];
    for (var i = 0; i < arr.length; i++) {
        var diff = target - arr[i];

        if (numsMap.has(diff)) return [arr[numsMap.get(diff)], arr[i]];
        numsMap.set(arr[i], i);
    }
}
