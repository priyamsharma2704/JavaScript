function topK(nums, k)
{
    let result = [];

    let map = new Map();

    nums.map((num) =>
    {
        map.set(num, (map.get(num) || 0) + 1);
    });

    let sortedNums = new Map([...map.entries()].sort((a,b) => b[1]-a[1]))
    console.log(sortedNums);

    let count = 0;

    sortedNums.forEach((value,key) =>
    {
        if(count < k)
            result.push(key);
        count++;
    });
    return result;
}

console.log(topK([1,1,1,2,2,2,2,2,2,3], 2));
console.log(topK([1], 1));