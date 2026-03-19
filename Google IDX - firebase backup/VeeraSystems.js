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
    const map = new Map();
    arr.forEach((str,indx) =>
    {
        const normalized = str.toLowerCase().trim().split(" ").sort().join(" ");
        map.set(normalized,indx);
    });

    //to print
    map.forEach((value, key)=>
    {
        console.log(key, value)
    })

    //to sort map value
    const sorted = new Map([...map.entries()].sort((a,b)=>a[1]-b[1]))
    console.log(sorted)
}



// // Add JS here

//----Valid Anagram----

// function validAnagram(s,t)
// {
//     const sort = (str)=>{
//         return str.split("").sort().join("");
//     }

//     return sort(s) == sort(t) ? true : false;
// }

// console.log("----123Valid Anagrams----")
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
//         let diff = target - nums[i];
//         if(map.has(diff))
//         {
//             return [map.get(diff), i]
//         }
//         else
//             map.set(nums[i], i)
//     }
//     return result;

// }

// console.log("---------Two Sum----------")
// console.log(twoSum([2,7,11,15], 9));
// console.log(twoSum([3,2,4], 6));
// console.log(twoSum([3,3], 6));

// //------------------------------------------- Flatten n-d array

// function flatten(arr)
// {
//     let result = [];
//     while(arr.length != 0)
//     {
//         let curr = arr.pop();
//         if(Array.isArray(curr))
//             arr.push(...curr)
//         else
//             result.push(curr)
//     }
//     return result.reverse()
// }
// console.log("-------------------Flatten N-d array--------------------");
// console.log(flatten([[1, 2, 3], [2, 4, 5], [1, 2, 3, 4]]));


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



// //------------------------------------------------------------------------Fibonacci----
// function fibonacci(num)
// {

// }

// function fibonacciUsingRecursion(num)
// {
   
// }

// function fibonacciUsingMemo(num, memo = {})
// {
   

// }

// console.log("------------Fibonacci---------------------------");
// console.log(fibonacci(4));
// console.log(fibonacciUsingRecursion(4));
// console.log(fibonacciUsingMemo(4));





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

// function matchStringPattern(str, pattern)
// {    

// }

// function isAMatch(idx, src, ptn)
// {

// }

// console.log("---------------------String Pattern Matching---------------------");
// console.log(matchStringPattern("amazing", "010"));// 2
// console.log(matchStringPattern("codesignal", "100"));// 0]

// //-------------Array Manipulation------------

// function arrayManipulation(arr)
// {

// }
// console.log("-------------Array Manipulation------------");
// console.log(arrayManipulation([4, 0, 1, -2, 3])); //[4, 5, -1, 2, 1]
