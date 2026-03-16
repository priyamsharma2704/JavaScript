console.log(topKFrequent([1, 2, 2, 3, 3, 3], 2))
function topKFrequent(arr, k)
{
    var res = [];
    var freqMap = new Map();
    for (var num of arr)
        freqMap.set(num, (freqMap.get(num) || 0) + 1);

    var bucket = new Array(arr.length + 1).fill().map(() => [])

    for (var [key, value] of freqMap)
        bucket[value].push(key);

    for (var i = bucket.length - 1; i >= 0 && res.length < k; i--)
        res.push(...bucket[i]);
    return res
}