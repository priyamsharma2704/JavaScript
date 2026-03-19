// console.log("----CHALLENGES----")

// //----Contains Duplicate----

// function containsDupes(arr)
// {
//     let map = new Map();

//     for(let i in arr)
//     {
//         if(!map.has(arr[i]))
//             map.set(arr[i], 1);

//         else
//             return true;
//     }
//     return false;
// }
// console.log("----Contains Duplicate----")
// console.log(containsDupes([1,2,3,1]));
// console.log(containsDupes([1,2,3,4]));
// console.log(containsDupes([1,1,1,3,3,4,3,2,4,2]));



// //----Valid Anagram----

// function validAnagram(s,t)
// {
//     if(s.length !== t.length)
//         return false;

//     let sortedString = (str) => str.split("").sort().join("");

//     return sortedString(s) === sortedString(t);
// }

// console.log("----Valid Anagrams----")
// console.log(validAnagram("anagram", "nagaram"));
// console.log(validAnagram("rat", "car"));
// console.log(validAnagram("listen", "silent")); // true
// console.log(validAnagram("hello", "world")); // false

// //-----------Two Sum------------

// function twoSum(nums, target)
// {
//     let result = [];

//     let map = new Map();
//     for(let i in nums)
//     {
//         let diff = target - nums[i]
//         if(map.has(nums[i]))
//         {
//             return([map.get(nums[i]), i]);
//         }
//         else
//         {
//             map.set(diff, i);
//         }
//     }
//     return result;
// }

// console.log("---------Two Sum----------")
// console.log(twoSum([2,7,11,15], 9));
// console.log(twoSum([3,2,4], 6));
// console.log(twoSum([3,3], 6));


// //--------Group Anagrams---------

// function grpAnagrams(strs)
// {
//     let result = [];
//     let sorted = strs.map((str)=>str.split("").sort().join(""))
//     //console.log(sorted);

//     let map = new Map();
//     for(let i in sorted)
//     {
//         if(!map.has(sorted[i]))
//         {
//             let arr = [strs[i]];
//             map.set(sorted[i], arr);
//         }
//         else
//         {
//             let currArr = map.get(sorted[i]);
//             currArr.push(strs[i])
//             map.set(sorted[i], currArr);
//         }
//     }
    
//     map.forEach((value,key) =>
//     {
//         result.push(value);
//     })
//     return result;
// }

// console.log("------Group Anagrams------")
// console.log(grpAnagrams(["eat","tea","tan","ate","nat","bat"]));
// console.log(grpAnagrams([""]));
// console.log(grpAnagrams(["a"]));


// //-----------Top K Frequent Elements

// function topK(nums, target)
// {
//     let result = [];
//     let map = new Map();
//     nums.forEach((num) =>
//     {
//         map.set(num, (map.get(num) || 0) + 1);
//     });

//     let sortedMap = new Map([...map.entries()].sort((a,b)=>b[1]-a[1]));

//     count = 0;
//     sortedMap.forEach((value,key) =>
//     {
//         if(count < target)
//             result.push(key);
//         count++;
//     });
//     return result;
// }

// console.log("-------Top K Freq Elements------")
// console.log(topK([1,1,1,2,2,2,2,2,2,3], 2));
// console.log(topK([1], 1));

// //---------------Product of Array but Self

// function productExceptSelf(nums)
// {
//     let lp = [];
//     let rp = [];
//     let result = [];

//     for(let i in nums)
//     {
//         if(i == 0)
//             lp[i] = 1;
//         else
//             lp[i] = lp[i-1] * nums[i-1];
//     }

//     for(let j = nums.length - 1; j >= 0 ; j--)
//     {
//         if(j == nums.length - 1)
//             rp[j] = 1;
//         else
//             rp[j] = rp[j+1] * nums[j+1];
//     }
// console.log(rp)
//     for(let k in nums)
//     {
//         result[k] = lp[k] * rp[k];
//     }
//     return result;
// }

// console.log("----------Product Except Self-------------")
// console.log(productExceptSelf([1,2,3,4])); // [24,12,8,6]
// console.log(productExceptSelf([-1,1,0,-3,3]));//[0,0,9,0,0]

// //-----------------Longest Consecutive Sequence----------
// function longestConsecutive(nums)
// {
//     let streak = 0;
//     let max_streak = 0;

//     let sortedNums = [...nums].sort((a,b) => a-b);

//     for(let i in sortedNums)
//     {
//         if( i > 0 && sortedNums[i - 1] + 1 == sortedNums[i])
//             streak++;
//         else
//             streak = 0;

//         if(max_streak < streak)
//             max_streak = streak;
//     }
//     return max_streak + 1;
// }

// console.log("---------Longest Consecutive--------");
// console.log(longestConsecutive([100,4,200,1,3,2]));
// console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]));


// //------------ Valid Palindrome------------

// function isPalindrome(s)
// {
//     let str = s.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();
//     let reverseS = str.split("").reverse().join("");
//     return str === reverseS;
// }

// console.log("------Valid Palindrome-----");
// console.log(isPalindrome("A man, a plan, a canal: Panama"));
// console.log(isPalindrome("race a car"));
// console.log(isPalindrome(" "));


// //---------------3 Sum ----------

// function threeSum(nums)
// {
//     let result= [];
//     nums.sort((a,b) => a-b)

//     for(var i = 0 ; i < nums.length; i++)
//     {
//         if( i > 0 && nums[i] == nums[i-1])
//             continue;
        
//         let j = i+1;
//         let k = nums.length - 1;

//         while( j < k)
//         {
//             let sum = nums[i] + nums[j] + nums[k];

//             if(sum < 0 )
//                 j++;
//             else if(sum > 0)
//                 k--;
//             else if(sum == 0)
//             {
//                 result.push([nums[i], nums[j], nums[k]]);
//                 while(nums[j] == nums[j+1])j++;
//                 while(nums[k] == nums[k-1]) k--;

//                 j++;
//                 k--;
//             }
//         }
//     }
//     return result;
// }
// console.log("-----3 Sum-------")
// console.log(threeSum([-1, 0, 1, 2, -1, -4])); //Output: [[-1,-1,2],[-1,0,1]]
// console.log(threeSum([0,1,1]));//Output: []
// console.log(threeSum([0,0,0]));//Output: [0,0,0]


// //----------Triplet Counting------------------

// function getTriplets(nums, target)
// {
//     let result = [];

//     nums.sort((a,b) => a-b);
//     let count = 0;
//     for(let i = 0 ; i < nums.length; i++)
//     {
//         if(i > 0 && nums[i] == nums[i-1])
//             continue;

//         let j = i + 1;
//         let k = nums.length - 1;

//         while(j < k)
//         {
//             let sum = nums[i] + nums[j] + nums[k];

//             if(sum < target)
//             {
//                 count += (k-j);
//                 j++;
//             }
//             else
//                 k--;
//         }
//     }
//     return count;
// }
// console.log("-----Tiplet Counting-------")
// console.log(getTriplets([5, 1, 3, 4, 7], 12));// O/p = 4;


let a = [3,2,4,6,1,5,6,3,2,7,6,4,1,7,6,2];

let m = new Map();

a.map((a1) =>
{
    m.set(a1, (m.get(a1) || 0) + 1);
})
console.log(m);

let s = new Map([...m.entries()].sort((a,b) =>b[1] - a[1]));
//                      OR
console.log(new Map(Array.from(m).sort((a,b)=>b[1]-a[1])))
console.log(s)

