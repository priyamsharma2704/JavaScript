console.log(lcs([2, 20, 4, 10, 3, 4, 5]));
console.log(lcs([0, 3, 2, 5, 4, 6, 1, 1]));
console.log(lcs([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6])); // 7
console.log(lcs([0, 0, -1])); //2


function lcs(arr)
{
    var numSet = new Set(arr);
    var longest = 0;
    for (var num of arr)
    {
        var length = 0;
        if (!numSet.has(num - 1))
        {
            length++;
            while (numSet.has(num + length))
                length++;
        }

        longest = Math.max(longest, length)
    }
    return longest;
}
