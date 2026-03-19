//validate palindrome in a string with all possible variabtions.
//stocks but and sell
 // // Add JS here


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
let strs = [" Is it Sunny", " Sunny Sunny it is", "Hello World", "Hello World", "hello world", " Sunny it is", "Wello Horld"];
getUniqueItems(strs);

function getUniqueItems(arr)
{

}


//----Valid Anagram----

// function validAnagram(s,t)
// {
//     if(sortString(s) == sortString(t))
//         return true;
//     else
//         return false;
// }

// function sortString(str)
// {
//     return str.split("").sort().join("");
// }

// console.log("----Valid Anagrams----")
// console.log(validAnagram("anagram", "nagaram"));
// console.log(validAnagram("rat", "car"));
// console.log(validAnagram("listen", "silent")); // true
// console.log(validAnagram("hello", "world")); // false


// //--------Group Anagrams---------
/*
n: num of strings
k: num of letters in a string

time complexity:

map : O(N)
split : O(K)
sort: O( K log K)
join : O(K)

total : O(N * K log K)

inside for loop :
for loop takes : O(N)
map operations take O(1)
push takes O(1)
total: O(N)

total time complexity : O(N * KlogK)

space complexity:
map keys: atmost N keys each of size K
map values: N string each size K

total space complexity: O(N * K)
*/
// function grpAnagrams(strs)
// {
//     let map = new Map();
//     let dup = [...strs];

//     let sorted = dup.map((str, idx)=>
//             {
//                 return str.split("").sort().join("")
//             });

//     //console.log(sorted)

//     for(let i = 0 ; i < sorted.length ; i++)
//     {
//         if(!map.has(sorted[i]))
//         {
//             let vals = [];
//             vals.push(strs[i]);
//             map.set(sorted[i],vals)
//         }
//         else
//         {   
//             let vals = [];
//             vals = map.get(sorted[i]);
//             vals.push(strs[i]);
//             map.set(sorted[i], vals)
//         }
//     }
//     return Array.from(map.values());

// }

// console.log("------Group Anagrams------")
// console.log(grpAnagrams(["eat","tea","tan","ate","nat","bat"]));
// console.log(grpAnagrams([""]));
// console.log(grpAnagrams(["a"]));

// //---------------Product of Array but Self

// function productExceptSelf(nums)
// {
//     let lp = [];
//     let rp = [];

//     for(let i = 0 ; i < nums.length; i++)
//     {
//         if(i ==0)
//             lp[i] = 1;
//         else
//             lp[i] = lp[i-1] * nums[i-1];
//     }

//     for(let j = nums.length-1; j >= 0; j--)
//     {
//         if(j == nums.length-1)
//             rp[j] = 1;
//         else
//             rp[j] = rp[j+1] * nums[j+1];
//     }

//     console.log(lp, rp)
//     let res = [];
//     for(let i = 0 ; i < lp.length; i++)
//         res[i] = lp[i] * rp[i];
//     return res;
// }

// console.log("----------Product Except Self-------------")
// console.log(productExceptSelf([1,2,3,4])); // [24,12,8,6]
// console.log(productExceptSelf([-1,1,0,-3,3]));//[0,0,9,0,0]


// //------------ Valid Palindrome------------

// function isPalindrome(s)
// {
//     let str = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
//     let revStr = str.split("").reverse().join("");
//     return str == revStr  
// }
// console.log("------Valid Palindrome-----");
// console.log(isPalindrome("A man, a plan, a canal: Panama"));
// console.log(isPalindrome("race a car"));
// console.log(isPalindrome(" "));

/**
 * Determines if a string can be made into a palindrome by removing at most one character
 * and returns which character to remove (if any)
 * @param {string} s - The input string
 * @return {object} - Result containing isPalindrome boolean and characterToRemove info
 */
// function validPalindrome(s) 
// {
//     let left = 0 ; 
//     let right = s.length - 1;

//     while (left < right)
//     {
//         if(s[left] != s[right])
//         {
//             if(isPalin(s, left + 1, right))
//             {
//                 return {isPalin:true,
//                     char:s[left],
//                     index:left
//                 }
//             }
//             else if(isPalin(s, left, right - 1))
//             {
//                 return {isPalin:true,
//                     char:s[right],
//                     index:right
//                 }
//             }
//             else
//                 return{
//                     isPlain:false,
//                     char:null,
//                     index:null
//                     }

//         }

//         left++;
//         right--;
//     }
//     return {isPalin:true,
//         char:null,
//         index:null
//     };
// }

// function isPalin(str, left, right)
// {
//     while(left < right)
//     {
//         if(str[left] != str[right])
//             return false;

//         left++;
//         right--;
//     }
//     return true;
// }
// console.log(validPalindrome("aba")); // Already a palindrome
// console.log(validPalindrome("abca")); // Remove 'c' at index 2
// console.log(validPalindrome("abc")); // Can't make a palindrome
// console.log(validPalindrome("deeee")); // Remove 'd' at index 0
// console.log(validPalindrome("eccer")); // Remove 'r' at index 4

/*
Plaidrome for Numbers
*/

// function isNumPalin(num)
// {
//     let strNum = num.toString();
//     let rev = strNum.split("").reverse().join("");
//     return rev == strNum;
// }    
// console.log(isNumPalin(246))
// console.log(isNumPalin(194))
// console.log(isNumPalin(848))
// console.log(isNumPalin(52725))


// //-----------Two Sum------------

// function twoSum(nums, target)
// {
//     let m = new Map();
//     for(let i = 0; i < nums.length; i++)
//     {
//         let diff = target - nums[i];

//         if(m.has(diff))
//             return [m.get(diff),i];
//         else
//         {
//             m.set(nums[i],i);
//         }
//     }
// }

// console.log("---------Two Sum----------")
// console.log(twoSum([2,7,11,15], 9));
// console.log(twoSum([3,2,4], 6));
// console.log(twoSum([3,3], 6));

// //------------------------------------------- Flatten n-d array

//  function flatten(arr)
// {
//     let res = [];
//     while(arr.length != 0)
//     {
//         let item = arr.pop();
//         if(Array.isArray(item))
//             arr.push(...item)
//         else
//             res.push(item)
//     }
//     return res.reverse()
// }
// console.log("-------------------Flatten N-d array--------------------");
// console.log(flatten([[1, 2, 3], [2, 4, 5], [1, 2, 3, 4]]));

//----------Best Time to Buy and Sell Stock----

// function findProfilt(prices)
// {
//     let min = 99999;
//     let maxP = 0;

//     for(let i = 0 ; i < prices.length; i++)
//     {
//         min = Math.min(min, prices[i]);
//         let profit = prices[i] - min;

//         if(profit > maxP)
//             maxP = profit;
//     }
//     return maxP
// }
// console.log(findProfilt([10,1,5,6,7,1]))// output = 6

// //--------------------Triplet Counting and 3Sum

// function threeSum(nums)
// {

// }
// console.log("---------------3 SUM------------------------");
// console.log(threeSum([-1, 0, 1, 2, -1, -4])); //Output: [[-1,-1,2],[-1,0,1]]
// console.log(threeSum([0,1,1]));//Output: []
// console.log(threeSum([0,0,0]));//Output: [0,0,0]

// function getTriplets(nums, target)
// {

// }
// console.log("----------------Triplet Counting-----------------------");
// console.log(getTriplets([5, 1, 3, 4, 7], 12));// O/p = 4;


// //-----------------Daily Temperature-----------------------------

// function dailyTemperature(temp)
// {

// }

// console.log("--------------Daily Temperature--------------");
// console.log(dailyTemperature([30,38,30,36,35,40,28]));
// console.log(dailyTemperature([73,74,75,71,69,72,76,73]));


// //------------------Generate Parenthesis---------------------

// function generateParenthesis(n)
// {

// }

// console.log("--------------Generate Parenthesis--------------");
// console.log(generateParenthesis(3));
// console.log(generateParenthesis(2));


// //---------------------------ValidParenthesis-----------------

// function validParenthesis(str)
// {

// }
// console.log("----------------Valid Parenthesis---------------");
// console.log(validParenthesis("(])"));
// console.log(validParenthesis("()[]{}"));
// console.log(validParenthesis("(]"));
// console.log(validParenthesis("(])"));
// console.log(validParenthesis("]"));
// console.log(validParenthesis("[]"));

// //-----------------Arrays-------------------------------
// console.log("--------------Arrays---------------")
// var x = [73,74,75,71,69,72,76,73];

// for(let i in x)
//     console.log(x[i]);

// console.log("----");

// x.forEach((item) =>console.log(item));

// console.log("---------------------Strings----------------")
// var str = "ABCDEF"
// for(let j in str)
//     console.log(str[j]);

// console.log("----");

// for(let s of str)
//     console.log(s)




// //------------------------------------String Pattern Matching---------------------

function matchStringPattern(str, pattern)
{    
    let counter = 0;
    for(let i = 0 ; i < str.length; i++)
    {
        counter += isAMatch(i,str, pattern)
    }
    return counter;
}

function isAMatch(idx, str, ptn)
{
    let letters = {
        "0":["a", "e", "i", "o", "u"],
        "1":['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'y', 'z']
    };

    for(let i = 0 ; i < ptn.length; i++)
    {
        let arr = letters[ptn[i]];
        if(arr.indexOf(str[idx + i]) == -1)
            return 0;
    }
    return 1;
}

console.log("---------------------String Pattern Matching---------------------");
console.log(matchStringPattern("amazing", "010"));// 2
console.log(matchStringPattern("codesignal", "100"));// 0]

// //-------------Array Manipulation------------

// function arrayManipulation(arr)
// {

// }
// console.log("-------------Array Manipulation------------");
// console.log(arrayManipulation([4, 0, 1, -2, 3])); //[4, 5, -1, 2, 1]
