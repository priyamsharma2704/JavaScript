res = twoSum([2,7,11,15], 9);
console.log(res);

res = twoSum([3,2,4], 6);
console.log(res);

res = twoSum([3,3], 6);
console.log(res);


function twoSum(nums, target)
{
    var res = [];
    var map = new Map();
    for(var i = 0 ; i < nums.length; i++)
    {
        var diff = target - nums[i];
        if(map[nums[i]] != null)
        {
            res[0] = map[nums[i]];
            res[1] = i;
            return res;
        }
        else
        {
            map[diff] = i;
        }
    }
    return res;
}