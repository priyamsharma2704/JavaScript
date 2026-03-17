function longestConsecutive(nums) {
    var length = 0;
    var longest = 0;
    var s = new Set(nums);
    for(var num of s) {
        if(!s.has(num - 1)) {
            length = 1;
            while(s.has(num + length)) {
                length++;
            }
        }
        longest = Math.max(longest, length);
    }
    return longest;
}

console.log(longestConsecutive([9,1,4,7,3,-1,0,5,8,-1,6]));