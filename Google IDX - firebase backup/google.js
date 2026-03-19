//----Valid Anagram----

 function validAnagram(s,t)
{
    // const sortString = (str) =>{
    //     return str.split("").sort().join("");
    // }

    // return sortString(s) == sortString(t) ? true: false
}

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
//     for( let i in nums)
//     {
//         let diff = target - nums[i];
//         if(!map.has(diff))
//         {
//             map.set(nums[i], i);
//         }
//         else
//         {
//             result = [map.get(diff), i];
//         }
//     }
//     return result;
// }

// console.log("---------Two Sum----------")
// console.log(twoSum([2,7,11,15], 9));
// console.log(twoSum([3,2,4], 6));
// console.log(twoSum([3,3], 6));

// //--------Group Anagrams---------
// function grpAnagrams(words)
// {
//     let copy = [...words];
//     let result = [];

//     copy = copy.map((item) =>{
//         return item.split("").sort().join("")
//     });

//     let map = new Map();

//     for(let i in copy)
//     {
//         if(!map.has(copy[i]))
//         {
//             let arr = new Array();
//             arr.push(words[i]);
//             map.set(copy[i], arr);
//         }
//         else
//         {
//             let curr = map.get(copy[i]);
//             curr.push(words[i]);
//             map.set(copy[i],curr);
//         }
//     }

//     map.forEach((value,key)=>
//     {
//         result.push(value);
//     })
//     return result;
// }

// console.log("------Group Anagrams------")
// console.log(grpAnagrams(["eat","tea","tan","ate","nat","bat"]));
// console.log(grpAnagrams([""]));
// console.log(grpAnagrams(["a"]));

// //--------------------------------------------------------- Flatten n-d array

// function flatten(arr)
// {
//     let result = [];

//     while(arr.length)
//     {
//         let curr = arr.pop();

//         if(Array.isArray(curr))
//         {
//             arr.push(...curr);
//         }
//         else
//         {
//             result.push(curr);
//         }
//     }

//     return result.reverse();
// }
// console.log("-------------------Flatten N-d array--------------------");
// console.log(flatten([[1, 2, 3], [2, 4, 5], [1, 2, 3, 4]]));



// //---------------------------ValidParenthesis-----------------
// function validParenthesis(str)
// {
//     let stack = [];

//     if(str.length == 1)
//         return false;

//     let isValid = true;

//     for(let i in str)
//     {
//         switch(str[i])
//         {
//             case ")":
//                 {
//                     if(stack.length && stack[stack.length - 1] == "(")
//                         stack.pop();
//                     else
//                         isValid =false;
//                     break;
//                 }
//             case "]":
//                 {
//                     if(stack.length && stack[stack.length - 1] == "[")
//                         stack.pop();
//                     else
//                         isValid =false;
//                     break;
//                 }
//             case "}":
//                 {
//                     if(stack.length && stack[stack.length - 1] == "{")
//                         stack.pop();
//                     else
//                         isValid =false;
//                     break;
//                 }
//             default: stack.push(str[i]);
//         }
//     }
//     if(!isValid)
//         return isValid;

//     return stack.length?false:true;
// }


// console.log("----------------Valid Parenthesis---------------");
// console.log(validParenthesis("(])"));
// console.log(validParenthesis("()[]{}"));
// console.log(validParenthesis("(]"));
// console.log(validParenthesis("]"));
// console.log(validParenthesis("[]"));


// //-------------Array Manipulation------------

// function arrayManipulation(arr)
// {

// }
// console.log("-------------Array Manipulation------------");
// console.log(arrayManipulation([4, 0, 1, -2, 3])); //[4, 5, -1, 2, 1]



// //------------------------------------String Pattern Matching---------------------
// function matchStringPattern(str, pattern)
// {

// }

// function isMatching(idx, str, pat)
// {

// }


// console.log("---------------------String Pattern Matching---------------------");
// console.log(matchStringPattern("amazing", "010"));// 2
// console.log(matchStringPattern("codesignal", "100"));// 0]


// let a = [3,2,4,6,1,5,6,3,2,7,6,4,1,7,6,2];

// let m = new Map();

// a.map((item, idx) =>
// {
//     m.set(item, (m.get(item) || 0) + 1);
// });

// console.log(m);

// const s = new Map([...m.entries()].sort((a,b)=>b[1]-a[1]))
// console.log(s)


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