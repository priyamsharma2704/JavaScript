console.log(hasDuplicates1([1, 2, 3, 4]));
console.log(hasDuplicates2([1, 2, 3, 3]));

function hasDuplicates1(nums) {
    /* Approach 1 
    Space Compl : O(n) based on size of nums
    Time Complex: O(n) as internally iterates through all n elements of the array to populate the Set. This is O(n).
    set.size() is O(1) and nums.lenght is O(1)
    */
    var numsSet = new Set(nums);
    if (numsSet.size != nums.length) return true;
    return false;
}

function hasDuplicates2(nums) {
    /* Approach 2 
    Space Compl : O(n) based on size of nums
    Time Complex: O(n) as we iterate over all nums. "has()" is O(1)

    this is better as there is a early exit
    */
    var numsMap = new Map();

    for (var num of nums) {
        if (numsMap.has(num)) return true;
        numsMap.set(num, 1);
    }
    return false;
}
