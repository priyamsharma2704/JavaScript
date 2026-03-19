// function validAnagram(s,t)
// {
//     return t.split("").sort().join("") == s.split("").sort().join("");
// }

// console.log("----Valid Anagrams----")
// console.log(validAnagram("anagram", "nagaram"));
// console.log(validAnagram("rat", "car"));
// console.log(validAnagram("listen", "silent")); // true
// console.log(validAnagram("hello", "world")); // false


// function grpAnagrams(strs)
// {
//     let m = new Map();

//     let sorted = [...strs].map((str,idx)=>
//     {
//         return str.split("").sort().join("");
//     })

//     for(let i = 0 ; i < sorted.length; i++)
//     {
//         if(!m.has(sorted[i]))
//             m.set(sorted[i],[strs[i]])
//         else
//         {
//             let item = m.get(sorted[i]);
//             item.push(strs[i])
//             m.set(sorted[i], item)
//         }
//     }

//     return Array.from(m.values());
// }


// console.log("------Group Anagrams------")
// console.log(grpAnagrams(["eat","tea","tan","ate","nat","bat"]));
// console.log(grpAnagrams([""]));
// console.log(grpAnagrams(["a"]));


// function productExceptSelf(nums)
// {
//     let lp = [];
//     let rp = [];

//     for(let i = 0 ; i < nums.length; i++)
//     {
//         if(i == 0)
//             lp[i] = 1;
//         else
//             lp[i] = lp[i-1] * nums[i-1];
//     }

//     for(let j = nums.length -1; j >=0; j--)
//     {
//         if( j == nums.length -1 )
//             rp[j] = 1;
//         else
//             rp[j] = rp[j+1] * nums[j+1]
//     }

//     let res = [];
//     for(let k = 0; k < lp.length; k++)
//     {
//         res[k] = lp[k] * rp[k]
//     }
//     return res
// }


// console.log("----------Product Except Self-------------")
// console.log(productExceptSelf([1,2,3,4])); // [24,12,8,6]
// console.log(productExceptSelf([-1,1,0,-3,3]));//[0,0,9,0,0]

function isPalindrome(s)
{
    let ss = s.replace(/[^a-zA-Z0-9]/g,"").toLowerCase()

    let sRev = ss.split("").reverse().join("");
    return sRev == ss
}

// console.log("------Valid Palindrome-----");
// console.log(isPalindrome("A man, a plan, a canal: Panama"));
// console.log(isPalindrome("race a car"));
// console.log(isPalindrome(" "));




function validPalindrome(s)
{
    let l = 0; 
    let r = s.length - 1;
    while(l < r)
    {
        if(s[l] != s[r])
        {
            if(isPalin(s,l+1,r))
            {
                return({isPalin:true,
                    char:s[l],
                    idx:l
                })
            }
            else if(isPalin(s,l,r-1))
            {
                return ({isPalin:true,
                    char:s[r],
                    idx:r
                })
            }
            else
            return({isPalin:false})
        }

        l++;
        r--;
    }
    return ({isPlain:true})
}

function isPalin(s,l,r)
{
    while ( l < r)
    {
        if(s[l] != s[r])
            return false

        l++;
        r--;
    }
    return true
}

// console.log(validPalindrome("aba")); // Already a palindrome
// console.log(validPalindrome("abca")); // Remove 'c' at index 2
// console.log(validPalindrome("abc")); // Can't make a palindrome
// console.log(validPalindrome("deeee")); // Remove 'd' at index 0
// console.log(validPalindrome("eccer")); // Remove 'r' at index 4

// function findProfilt(nums)
// {
//     let min = 99999;
//     let max = 0;

//     for(let i = 0 ; i < nums.length ; i ++)
//     {
//         min = Math.min(nums[i], min)

//         let profit = nums[i] - min;

//         if(profit > max)
//             max = profit
//     }
//     return max;
// }

// console.log(findProfilt([10,1,5,6,7,1]))// output = 6

// function flatten(nums)
// {
//     let res = [];
//     while(nums.length != 0)
//     {
//         let items = nums.pop();
//         if(Array.isArray(items))
//             nums.push(...items);
//         else
//             res.push(items)        
//     }

//     return res.reverse();
// }
// console.log(flatten([[1, 2, 3], [2, 4, 5], [1, 2, 3, 4]]));

let a = [3,2,4,6,1,5,6,3,2,7,6,4,1,7,6,2];

let m = new Map();

a.map((num, idx)=>
{
    m.set(num, (m.get(num) || 0) + 1)
})

console.log(m)
console.log(Array.from(m))
console.log(new Map(Array.from(m).sort((a,b)=>b[1]-a[1])))
console.log(new Map([...m.entries()].sort((a,b)=>b[1]-a[1])))