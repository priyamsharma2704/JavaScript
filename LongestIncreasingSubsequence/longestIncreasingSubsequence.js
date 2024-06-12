// The Longest Increasing Subsequence (LIS) problem is a classic dynamic programming problem often asked in technical interviews, including those on LeetCode. The goal is to find the length of the longest subsequence in a given array such that all elements of the subsequence are sorted in increasing order.

// Solution
// Here is a JavaScript solution using dynamic programming (DP). This approach has a time complexity of 
// 𝑂(𝑛2)O(n 2 ).

// Dynamic Programming Approach
// Initialize a DP Array: Create an array dp where dp[i] represents the length of the longest increasing subsequence that ends with the element at index i.
// Fill the DP Array: Iterate through the array. For each element, iterate through all previous elements to find the longest increasing subsequence that can be extended by the current element.
// Return the Result: The maximum value in the dp array will be the length of the longest increasing subsequence.
// Code Implementation
// javascript
// Copy code
// function lengthOfLIS(nums) {
//     if (nums.length === 0) return 0;

//     const dp = new Array(nums.length).fill(1);

//     for (let i = 1; i < nums.length; i++) {
//         for (let j = 0; j < i; j++) {
//             if (nums[i] > nums[j]) {
//                 dp[i] = Math.max(dp[i], dp[j] + 1);
//             }
//         }
//     }

//     return Math.max(...dp);
// }

// // Example usage:
// const nums = [10, 9, 2, 5, 3, 7, 101, 18];
// console.log(lengthOfLIS(nums)); // Output: 4
// Explanation
// Initialization:

// javascript
// Copy code
// const dp = new Array(nums.length).fill(1);
// This initializes the dp array where each element is set to 1 because the minimum length of the LIS ending at each element is at least 1 (the element itself).
// Nested Loop:

// javascript
// Copy code
// for (let i = 1; i < nums.length; i++) {
//     for (let j = 0; j < i; j++) {
//         if (nums[i] > nums[j]) {
//             dp[i] = Math.max(dp[i], dp[j] + 1);
//         }
//     }
// }
// The outer loop iterates over each element in the array, and the inner loop checks all previous elements.
// If nums[i] is greater than nums[j], it means nums[i] can extend the subsequence ending at nums[j]. Hence, update dp[i] accordingly.
// Result:

// javascript
// Copy code
// return Math.max(...dp);
// The longest increasing subsequence will be the maximum value in the dp array.
// Time Complexity
// The time complexity of this approach is 
// 𝑂(𝑛2)O(n 2 ) due to the nested loops. This is efficient for moderate-sized arrays but may be slow for very large arrays.

// Space Complexity
// The space complexity is 
// 𝑂(𝑛)O(n) due to the extra space used by the dp array.

// This solution is clear and demonstrates the fundamental dynamic programming approach to solving the LIS problem. For even larger datasets, a more efficient approach involving binary search and patience sorting can be used, which has a time complexity of 
// 𝑂(𝑛log⁡𝑛)O(nlogn).