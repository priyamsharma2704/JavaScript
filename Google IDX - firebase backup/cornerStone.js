// // Add JS here

//----Valid Anagram----

function validAnagram(s,t)
{
    const sort = (str) =>
    {
        return str.split("").sort().join("");
    }        

    res = sort(s) == sort(t) ? true: false;
    return res;
}

console.log("----Valid Anagrams----")
console.log(validAnagram("anagram", "nagaram"));
console.log(validAnagram("rat", "car"));
console.log(validAnagram("listen", "silent")); // true
console.log(validAnagram("hello", "world")); // false

//-----------Two Sum------------

function twoSum(nums, target)
{
    let m = new Map();
    let res = [];
    for(let i in nums)
    {
        let diff = target - nums[i];
        if(m.has(diff))
            res = [m.get(diff), i];
        else
            m.set(nums[i],i);
    }
    return res;
}

console.log("---------Two Sum----------")
console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,3], 6));

//--------------------------------------------------------- Flatten n-d array

function flatten(arr)
{
    let result = [];
    while(arr.length != 0)
    {
        let curr = arr.pop();
        if(Array.isArray(curr))
            arr.push(...curr);
        else
            result.push(curr);
    }

    result = result.reverse();
    return result;
}
console.log("-------------------Flatten N-d array--------------------");
console.log(flatten([[1, 2, 3], [2, 4, 5], [1, 2, 3, 4]]));


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
function fibonacci(num)
{

}

function fibonacciUsingRecursion(num)
{
   
}

function fibonacciUsingMemo(num, memo = {})
{
   

}

// console.log("------------Fibonacci---------------------------");
// console.log(fibonacci(4));
// console.log(fibonacciUsingRecursion(4));
// console.log(fibonacciUsingMemo(4));





// //-----------------Daily Temperature-----------------------------

function dailyTemperature(temp)
{
    let stack = [];
    let result = new Array(temp.length).fill(1);

    for(let  i = temp. length-1; i > 0; i--)
    {
        while(stack.length && temp[i] > temp[stack[stack.length -1]])
            stack.pop();

        result[i] = stack.length ? stack[stack.length - 1] - i: 0;
        stack.push(i);
    }

    return result;
}

console.log("--------------Daily Temperature--------------");
console.log(dailyTemperature([30,38,30,36,35,40,28]));
console.log(dailyTemperature([73,74,75,71,69,72,76,73]));


// //------------------Generate Parenthesis---------------------

// function generateParenthesis(n)
// {
    
// }

// console.log("--------------Generate Parenthesis--------------");
// console.log(generateParenthesis(3));
// console.log(generateParenthesis(2));


//---------------------------ValidParenthesis-----------------

function validParenthesis(str)
{
    let stack = [];
    let isValid = true;
    
    if(str.length == 0 || str.length == 1)
        return false;

    for(let i = 0 ; i < str.length; i++)
    {
        switch(str[i])
        {
            case ')' : {
                if(stack.length && stack[stack.length -1] == '(')
                    stack.pop();
                else
                    isValid = false;
                break;
            }
            case ']' : {
                if(stack.length && stack[stack.length -1] == '[')
                    stack.pop();
                else
                    isValid = false;
                break;
            }
            case '}' : {
                if(stack.length && stack[stack.length -1] == '{')
                    stack.pop();
                else
                    isValid = false;
                break;
            }
            default: {
                stack.push(str[i]);
            }
        }
    }

    if(!isValid)
        return false;

    return stack.length ? false : true;
}
console.log("----------------Valid Parenthesis---------------");
console.log(validParenthesis("(])"));
console.log(validParenthesis("()[]{}"));
console.log(validParenthesis("(]"));
console.log(validParenthesis("(])"));
console.log(validParenthesis("]"));
console.log(validParenthesis("[]"));

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


//--------Group Anagrams---------
function grpAnagrams(arr)
{
    let result = [];
    let arrCpy = [...arr];

    let sortedCpy = arrCpy.map((item, idx) =>{
        return item.split("").sort().join("")
    });

    let m = new Map();
    for(let i in sortedCpy)
    {
        if(!m.has(sortedCpy[i]))
        {
            let value = [arr[i]];
            m.set(sortedCpy[i], value);
        }
        else
        {
            let curr = m.get(sortedCpy[i]);
            curr.push(arr[i]);
            m.set(sortedCpy[i], curr);
        }
    }

    m.forEach((val ,key) =>
    {
        result.push(key)
    })
    return result;
}

console.log("------Group Anagrams------")
console.log(grpAnagrams(["eat","tea","tan","ate","nat","bat"]));
console.log(grpAnagrams([""]));
console.log(grpAnagrams(["a"]));