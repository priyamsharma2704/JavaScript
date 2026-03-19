// // Add JS here

// async function getProducts()
// {
//     let resp = await fetch('https://dummyjson.com/products');
//     let data = await resp.json();
//     console.log("------------Fetching Data---------------------------");
//     console.log("id:" ,data.products[0].id)
// }

// getProducts();

// //--------------------------------------------------------- Flatten n-d array

// function flatten(arr)
// {
//     let result = [];
    
//     let stack = [...arr];
//     console.log(stack)
//     while(stack.length)
//     {
//         let item = stack.pop();

//         if(Array.isArray(item))
//         {
//             stack.push(...item);
//         }
//         else
//             result.push(item);
//     }
//     return result.reverse();
// }
// console.log("-------------------Flatten N-d array--------------------");
// console.log(flatten([[1, 2, 3], [2, 4, 5], [1, 2, 3, 4]]));


// //--------------------Triplet Counting and 3Sum

// function threeSum(nums)
// {
//     let result = [];

//     nums = nums.sort((a,b) => a-b);

//     for(let i = 0; i < nums.length; i++)
//     {
//         if(i > 0 && nums[i] == nums[i-1])
//             continue;

//         let j = i + 1;
//         let k = nums.length -1;

//         while(j < k)
//         {
//             let sum = nums[i] + nums[j] + nums[k];
//             if(sum > 0)
//                 k--;
//             else if(sum < 0)
//                 j++;
//             else if(sum == 0)
//             {
//                 result.push([nums[i], nums[j], nums[k]]);
//                 while(nums[j] == nums[j+1]) j++;
//                 while(nums[k] == nums[k-1]) k--;
//                 j++;
//                 k--;
//             }
//         }
//     }
//     return result;
// }
// console.log("---------------3 SUM------------------------");
// console.log(threeSum([-1, 0, 1, 2, -1, -4])); //Output: [[-1,-1,2],[-1,0,1]]
// console.log(threeSum([0,1,1]));//Output: []
// console.log(threeSum([0,0,0]));//Output: [0,0,0]

// function getTriplets(nums, target)
// {
//     let result = 0;

//     nums = nums.sort((a,b)=>a-b);

//     for(let i = 0 ; i < nums.length; i++)
//     {
//         if(i > 0 && nums[i] == nums[i-1])
//             continue;
        
//         let j = i+1; 
//         let k = nums.length -1;

//         while(j < k)
//         {
//             let sum = nums[i] + nums[j] + nums[k];
//             if(sum < target)
//             {
//                 result += (k-j);
//                 j++
//             }
//             else
//                 k--;
//         }
//     }

//     return result;
// }
// console.log("----------------Triplet Counting-----------------------");
// console.log(getTriplets([5, 1, 3, 4, 7], 12));// O/p = 4;



// //------------------------------------------------------------------------Fibonacci----
function fibonacci(num)
{
    if(num == 0) return 0;
    if(num == 1) return 1;

    let i = 0;
    let first = 0;
    let second = 1;
    let sum = 0;

    while(i < num)
    {
        sum = first + second;
        first = second;
        second = sum;

        i++;
    }
    return sum;
}

function fibonacciUsingRecursion(num)
{
    if(num == 0) return 0;
    if(num == 1) return 1;

    return fibonacciUsingRecursion(num-1) + fibonacciUsingRecursion(num -2);
}

function fibonacciUsingMemo(num, memo = {})
{
    if(memo[num]) return memo[num];
    if(num == 0) return 0;
    if(num == 1) return 1;

    memo[num] = fibonacciUsingMemo(num-1, memo) + fibonacciUsingMemo(num-2, memo);
    return memo[num];

}

console.log("------------Fibonacci---------------------------");
console.log(fibonacci(4));
console.log(fibonacciUsingRecursion(4));
console.log(fibonacciUsingMemo(4));


// //---------------------CLASS--------------------------------
// class Collection
// {
//     constructor(words)
//     {
//         this.wordsSet = new Set(words);
//     }

//     isInDict(word)
//     {
//         return this.wordsSet.has(word) ? true : false;
//     }
// }

// let obj = new Collection(["cat","sat","kat"]);

// console.log("------------Class---------------------------");
// console.log(obj.isInDict("bat"));
// console.log(obj.isInDict("cat"));

// let arr = [5,7,3,6,34,2,5];

// let s = new Set(arr);
// console.log(s)

// //-----------------------------------Deck of Cards-------------------

// //define suits, ranks
// //define a CARD class
// //define a DECK class -> init(), deal(), shuffle()

// const suits = ["Hearts", "Spades", "Diamonds", "Clubs"];
// const ranks = ["1","2","3","4","5","6","7","8","9","10","J","Q","K","A"];

// class Card{
//     constructor(rank, suit)
//     {
//         this.rank = rank;
//         this.suit = suit;
//     }

//     toString()
//     {
//         return '${this.rank} of ${this.suit}';
//     }
// }

// class Deck
// {
//     constructor()
//     {
//         this.cards = [];
//         this.initializeDeck();
//     }

//     initializeDeck()
//     {
//         for(var i in this.suits)
//         {
//             for(var j in this.ranks)
//             {
//                 this.cards.push(new Card(j, i));
//             }
//         }
//     }

//     deal()
//     {
//         this.cards.pop();
//     }

//     shuffle()
//     {
//         for (let i = this.cards.length - 1; i > 0; i--) {
//             const j = Math.floor(Math.random() * (i + 1));
//             [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
//         }
//     }
// }

// let deck1 = new Deck();
// deck1.shuffle();
// console.log(deck1.cards.map(card => card.toString()).join(', '));


// //-----------------Daily Temperature-----------------------------

// function dailyTemperature(temp)
// {
//     let length = temp.length;
//     let result = new Array(length).fill(1);
//     let stack = [];

//     for(i = length - 1; i > 0; i--)
//     {
//         while(stack.length && temp[i] > temp[stack[stack.length -1]])
//             stack.pop();
    
//         result[i] = stack.length ? stack[stack.length-1] - i : 0;
//         stack.push(i);
//     }
//     return result;
// }

// console.log("--------------Daily Temperature--------------");
// console.log(dailyTemperature([30,38,30,36,35,40,28]));
// console.log(dailyTemperature([73,74,75,71,69,72,76,73]));


// //------------------Generate Parenthesis---------------------

// function generateParenthesis(n)
// {
//     let result = [];
//     let i = 0;
//     let j = 0;

//     var backtrack = function(open, close, str)
//     {
//         if(open > n || close > n || close > open)
//             return;

//         if(open == close && str.length == n*2)
//         {
//             result.push(str);
//             return;
//         }

//         if(open < n)
//             backtrack(open + 1, close, str + "(");
//         if(close < n)
//             backtrack(open, close + 1, str+")");
//     }
//     backtrack(i , j , "");
//     return result;
// }

// console.log("--------------Generate Parenthesis--------------");
// console.log(generateParenthesis(3));
// console.log(generateParenthesis(2));


// //---------------------------ValidParenthesis-----------------

// function validParenthesis(str)
// {
//     let stack = [];
//     let isValid = true;
//     for(let i = 0; i < str.length; i++)
//     {
//         switch(str[i])
//         {
//             case '}':
//                 {
//                     if(stack.length && stack[stack.length-1] == "{")
//                         stack.pop();
//                     else
//                         isValid = false;
//                     break;
//                 }
//             case ']':
//                 {
//                     if(stack.length && stack[stack.length-1] == "[")
//                         stack.pop();
//                     else
//                         isValid = false;
//                     break;
//                 }
//             case ')':
//                 {
//                     if(stack.length && stack[stack.length-1] == "(")
//                         stack.pop();
//                     else
//                         isValid = false;
//                     break;
//                 }
//             default:
//                 {
//                     stack.push(str[i]);
//                 }
//         }
//     }
//     if(isValid == false)
//         return isValid;
    
//     return stack.length ? false : true;
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
//     let counter = 0;
//     for(let i in str)
//     {
//         let result = isAMatch(parseInt(i), str, pattern);

//         counter += result;
//     }
//     return counter;
// }

// function isAMatch(idx, src, ptn)
// {
//     let letters = {
//         "0":["a", "e", "i", "o", "u"],
//         "1":['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'y', 'z']
//     };

//     for(let j = 0 ; j < ptn.length; j++)
//     {
//         let arr = letters[ptn[j]];
//         if(arr.indexOf(src[idx + j]) == -1)
//         {
//             return 0;
//         }
//     }
//     return 1;
// }

// console.log("---------------------String Pattern Matching---------------------");
// console.log(matchStringPattern("amazing", "010"));// 2
// console.log(matchStringPattern("codesignal", "100"));// 0]

// //-------------Array Manipulation------------

// function arrayManipulation(arr)
// {
//     let result = [];

//     result = arr.map((item, idx) =>
//     {
//         let prev = arr[idx - 1] !== undefined? arr[idx - 1]: 0;
//         let curr = arr[idx] !== undefined? arr[idx]: 0;
//         let next = arr[idx + 1] !== undefined? arr[idx + 1]: 0;
//         return prev + curr + next;
//     });

//     return result;
// }
// console.log("-------------Array Manipulation------------");
// console.log(arrayManipulation([4, 0, 1, -2, 3])); //[4, 5, -1, 2, 1]
