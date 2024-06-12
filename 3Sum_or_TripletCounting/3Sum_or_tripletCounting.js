// Problem Statement
// Count the number of triplets in an array such that the sum of the triplet is LESS than a given value.

const { constrainedMemory } = require("process");

// Solution
// To solve this problem, we can use a two-pointer approach. Here’s a detailed solution:

// Sort the array: This helps in using the two-pointer technique efficiently.
// Use a loop to fix the first element: For each fixed element, use two pointers to find pairs that sum up to a value less than the given threshold.
// Move the pointers accordingly: If the sum is less than the given value, move the left pointer to the right. If it’s greater, move the right pointer to the left.
// Implementation
// Here is the JavaScript code to count such triplets:

// javascript
// Copy code
// function countTriplets(arr, sum) {
//     let n = arr.length;

//     // Sort the array
//     arr.sort((a, b) => a - b);

//     let count = 0;

//     // Fix the first element as arr[i]
//     for (let i = 0; i < n - 2; i++) {
//         let j = i + 1, k = n - 1;

//         // Use two pointers to find pairs with sum less than sum - arr[i]
//         while (j < k) {
//             if (arr[i] + arr[j] + arr[k] < sum) {
//                 // If sum of triplet is less than the given sum
//                 // All elements from j to k-1 can form a triplet with arr[i] and arr[j]
//                 count += (k - j);
//                 j++;
//             } else {
//                 k--;
//             }
//         }
//     }

//     return count;
// }

// // Example usage:
// let arr = [5, 1, 3, 4, 7];
// let sum = 12;
// console.log(countTriplets(arr, sum)); // Output: 4
// Explanation
// Sort the Array: The array is sorted to efficiently apply the two-pointer technique.
// Outer Loop: The outer loop fixes the first element of the triplet. It runs from the start to the third-last element.
// Two Pointers: The two pointers j and k start from i + 1 and the last element, respectively. The inner while loop checks if the sum of the triplet is less than the given sum.
// If the sum of the triplet is less than the given value, then all elements between j and k can form valid triplets with arr[i]. Thus, (k - j) is added to the count.
// If the sum is greater or equal, decrement k to reduce the sum.
// Complexity
// Time Complexity: O(n^2) due to the nested loop and the two-pointer traversal.
// Space Complexity: O(1) as no extra space is used apart from the input array.
// This solution ensures that you efficiently count the triplets while maintaining readability and simplicity.

function threeSum(nums)
{
    nums = nums.sort((a,b) =>a-b);
    let result = [];
    let count = 0;
    for(let i = 0; i < nums.length; i++)
    {
        //if the current value to i is same as previous i, continue in that case
        if(i > 0 && nums[i] == nums[i-1])
            continue;
        
        let j = i+1;
        let k = nums.length -1;
        while(j < k)
        {
            let sum = nums[i] + nums[j] + nums[k];

            if(sum > 0)
                k--;
            else if(sum < 0)
                j++;
            else if(sum == 0)
            {
                result.push([nums[i], nums[j], nums[k]]);
                while(nums[j] == nums[j+1])j++;
                while(nums[k] == nums[k-1])k--;
                j++;
                k--;
            }
        }
    }
    return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4])); //Output: [[-1,-1,2],[-1,0,1]]
console.log(threeSum([0,1,1]));//Output: []
console.log(threeSum([0,0,0]));//Output: [0,0,0]

// to count the TRIPLETS
function getTriplets(nums, target)
{
    let count = 0;
    for(let  i = 0 ; i < nums.length; i++)
    {
        if(i > 0 && nums[i] == nums[i-1])
            continue;

        let j = i+1;
        let k = nums.length -1;

        while(j < k)
        {
            let sum = nums[i] + nums[j] + nums[k];
            if(sum < target)
            {
                count += (k-j);
                j++;
            }
            else
                k--;
        }
    }
    return count;
}

console.log(getTriplets([5, 1, 3, 4, 7], 12));// O/p = 4;
