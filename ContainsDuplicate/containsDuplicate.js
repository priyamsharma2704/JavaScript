ret = containsDuplicate([1,2,3,1]);
console.log(ret);
function containsDuplicate(nums)
{
    var map = new Map();
    for(var i = 0 ; i < nums.length; i++)
    {
        if(!map[nums[i]])
            map[nums[i]] = 1;
        else
            map[nums[i]] += 1;
    }

    for(var item in map)
    {
        if(map[item] >=2)
            return true;
    }
    return false;
}