// console.log(hasDuplicates([1, 2, 3, 4]));
// console.log(hasDuplicates([1, 2, 3, 3]));

// function hasDuplicates(nums)
// {
//     var dupMap = new Map();
//     for( var num of nums)
//     {
//         if(dupMap.has(num))
//             return true;
//         else
//             dupMap.set(num,0);
//     }
//     return false
// }

// console.log(isAnagram("racecar", "carrace"));
// console.log(isAnagram("", ""));
// console.log(isAnagram("racecar", "carrace1"));
// function isAnagram(s, t)
// {
//     if (s.length != t.length)
//         return false;

//     var sMap = new Map();
//     var tMap = new Map();

//     for (sChar of s)
//         sMap.set(sChar, (sMap.get(sChar) || 0) + 1);

//     for (tChar of t)
//         tMap.set(tChar, (tMap.get(tChar) || 0) + 1);

//     console.log(sMap, tMap)

//     for (var k of sMap.keys())
//         if (sMap.get(k) != tMap.get(k))
//             return false;
//     return true;
// }

// console.log(twoSum([2, 7, 8, 9], 9));
// console.log(twoSum([7, 8, 9, 2], 10));
// console.log(twoSum([], 10));

// /*
//     space complexity: O(n)
//     time complexity : O(n)
// */

// function twoSum(arr, target)
// {
//     var map = new Map();
//     for (var i = 0; i < arr.length; i++)
//     {
//         var diff = target - arr[i];
//         if (!map.has(diff))
//             map.set(arr[i], i);
//         else
//             return [arr[map.get(diff)], arr[i]]
//     }
//     return 0
// }

// console.log(groupAnagram(["act", "pots", "tops", "cat", "stop", "hat"]));

// function groupAnagram(strs)
// {
//     var result = new Map();
//     for (var str of strs)
//     {
//         var freq = new Array(26).fill(0);

//         for (var c of str)
//             freq[c.charCodeAt(0) - 97] = 1;

//         var key = freq.join("");

//         if (result.has(key))
//             result.get(key).push(str)
//         else
//             result.set(key, [str])
//     }
//     return result;
// }

// console.log(topKFrequent([1, 2, 2, 3, 3, 3], 2))
// console.log(topKFrequent([7, 7], 1))


// function topKFrequent(nums, k)
// {
//     var freqArr = new Array(nums.length + 1).fill().map(() => []);
//     var map = new Map()
//     for (var num of nums)
//         map.set(num, (map.get(num) || 0) + 1);

//     for (var [k, v] of map)
//     {
//         freqArr[map.get(k)].push(k);
//     }

//     var result = new Array();
//     for (var i = freqArr.length - 1; i >= 0 & result.length < k; i--)
//         result.push(...freqArr[i]);

//     return result;
// }
