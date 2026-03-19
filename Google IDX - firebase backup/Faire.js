/*
in js
    return a list of unique items
    returned item should be last seen
    " Is it Sunny" & " Sunny it is" are considered to be same
    two words are same even irrespective of the case
    treat " Sunny Sunny it is" as a different word from " Is it Sunny" & " Sunny it is"
    the returned output order should be same as the input order
    Input: " Is it Sunny", " Sunny Sunny it is", "Hello World", "Hello World", "hello world", " Sunny it is", "Wellow Horld"
*/

// const input = [" Is it Sunny", " Sunny Sunny it is", "Hello World", "Hello World", "hello world", " Sunny it is", "Wellow Horld"];
// function unique(str)
// {
//     const map = new Map();

//     str.forEach((s, idx) =>
//     {
//         const normalized = s.toLowerCase().trim().split(" ").sort().join(" ");
//         map.set(normalized, idx);
//     });

//     const sorted = new Map([...map.entries()].sort((a,b)=>a[1]-b[1]))
//     return sorted;
// }

// console.log(unique(input))


//-------------------------------------------------------Best time to Buy and Sell stock---------------------------------------------
/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

- Take two vars: max_profit = 0 and buy_price and assing a big value to it like 9999.
- Now iterate over array items.
- Check if the array item is less than the buy_price - if YES, then update the buy_price as the current array item. 
- If NO, then find the profit between the buy_price and current element and check if it is greater than max_profit.

 */

// console.log(findProfit([7,1,5,3,6,4]))
// console.log(findProfit([7,6,4,3,1]))
// [7,6,4,3,1]

// function findProfit (prices){
//     let max_profit = 0;
//     let buy_price = 99999;

//     for(let idx in prices)
//     {
//         if(prices[idx] < buy_price)
//             buy_price = prices[idx];
//         else
//         {
//             if((prices[idx] - buy_price) > max_profit)
//                 max_profit = prices[idx] - buy_price;
//         }
//     }

//     return max_profit
// }


//--------------------------------Container with water------------------------------------------
/*
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
Find two lines that together with the x-axis form a container, such that the container contains the most water.
Return the maximum amount of water a container can store.

To make a container, you need to find the min of the two heights and then multiply it with the distance between them.

 */
// const height = [1,8,6,2,5,4,8,3,7];

// console.log(findMaxVol(height));
// console.log(findMaxVol([1,1]));

// function findMaxVol(arr)
// {
//     let max_vol = 0;
//     let i = 0;
//     let j = arr.length - 1;
//     while(i != j)
//     {
//         max_vol = Math.max(max_vol, (Math.min(arr[i], arr[j]) * (j-i)));

//         if(i < j)
//             i++;
//         else
//             j--;
//     }
//     return max_vol;
// }

//---------------------------------------------- Contains Duplicate-----------------------------------------------
/*
Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

Example 1:
Input: nums = [1,2,3,1], k = 3
Output: true

Example 2:
Input: nums = [1,0,1,1], k = 1
Output: true

Example 3:
Input: nums = [1,2,3,1,2,3], k = 2
Output: false
 */

// console.log(checkDupes([1,2,3,1], 3));
// console.log(checkDupes([1,0,1,1], 1));
// console.log(checkDupes([1,2,3,1,2,3], 2));

// function checkDupes(arr, k)
// {
//     let m = new Map();

//     for(let i = 0 ; i < arr.length; i++)
//     {
//         if(m.has(arr[i]))
//         {
//             if((i - m.get(arr[i])) <= k)
//             {
//                 return true
//             }
//         }
//         m.set(arr[i],i)
        
//     }
//     return false;
// }


//-----------------------------------------------53. Maximum Subarray----------------------------------

//Given an integer array nums, find the subarray with the largest sum, and return its sum.

 

// Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

// Example 2:
// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.

// Example 3:
// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

/*
 * keep a max_sum var and a curr_sum var
 * iterate over each item and add it to the curr_sum
 * check if the curr_sum is greater than max_sum, if YES, then update the max_sum
 * check if curr_sum < 0, if YES, the make curr_sum = 0
 */

// console.log(finddLargestSum([-2,1,-3,4,-1,2,1,-5,4]))
// console.log(finddLargestSum([1]))
// console.log(finddLargestSum([5,4,-1,7,8]))

// function finddLargestSum(arr)
// {
//     let max = -99999;
//     let curr = 0;

//     arr.forEach((item, idx) =>
//     {
//         curr += item;
//         max = Math.max(max, curr)
//         if(curr < 0)
//             curr = 0;
//     });
//     return max;
// }



/*------------------------------------------------------1. Two Sum-------------------------------------------------------

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]

*/

// console.log(twoSum([2,7,11,15], 9));
// console.log(twoSum([3,2,4], 6));
// console.log(twoSum([3,3], 6));

// function twoSum(nums, target)
// {
//     let map = new Map();
//     for(let i = 0; i < nums.length; i++)
//     {
//         if(map.has(nums[i]))
//         {
//             return [map.get(nums[i]), i]
//         }
//         map.set((target - nums[i]) , i);

//     }
// }


/*----------------------------------------Longest Substring Without Repeating Characters------------------------------------------------

Given a string s, find the length of the longest substring without repeating characters.

Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

// console.log(lengthOfLongestSubstring("abcabcbb"))
// console.log(lengthOfLongestSubstring("bbbbb"))
// console.log(lengthOfLongestSubstring("pwwkew"))

// function lengthOfLongestSubstring( str)
// {
//     let result = 0;
//     let start_idx = 0;
//     let strMap = new Map();
//     let curr_idx = 0;
//     let start = 0;
//     for( curr_idx = 0; curr_idx < str.length; curr_idx++)
//     {
//         /*If the char is already in the map , then we need to update the start index. It can be brought to the next index after the last seen position of the current char. But what is the repeating char is already past the cujrrent window. That is why need to consider the last position of starting index as well and take the MAX of it.
//          */
//         if(strMap.has(str[curr_idx]))
//             start_idx = Math.max(start_idx, strMap.get(str[curr_idx]) + 1)

//         strMap.set(str[curr_idx], curr_idx);

//         /*If the current length is greater than result, then update the result and GLOBAL start index to find the string later on */
//         if((curr_idx - start_idx + 1 )> result )
//         {
//             result = curr_idx - start_idx + 1;
//             start = start_idx;
//         }

//     }
//     console.log(str.substring(start, start + result))
//     return result;
// }