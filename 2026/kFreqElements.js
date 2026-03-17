console.log(topKFrequent([1, 2, 2, 3, 3, 3], 2))
console.log(topKFrequent([7, 7], 1))


function topKFrequent(nums, k)
{
    var map = new Map();

    for (var num of nums)
        map.set(num, (map.get(num) || 0) + 1);

    var bucket = new Array(nums.length + 1).fill().map(() => []);

    for (var [num, count] of map)
        bucket[count].push(num);

    var res = new Array();
    for (var i = nums.length - 1; i >= 0 && res.length < k; i--)
    {
        res.push(...bucket[i]);
    }

    return res;

}