
// const input = [" Is it Sunny", " Sunny Sunny it is", "Hello World", "Hello World", "hello world", " Sunny it is", "Wellow Horld"];
// function unique(str)
// {
//     let map = new Map();
//     let result = [];
//     str.forEach((s, idx) =>
//     {
//         let normalized = s.toLowerCase().trim().split(" ").sort().join(" ");
//         map.set(normalized, idx);
//     });
// console.log(map)
//     return [...map.entries()].sort((a,b) =>a[1]-b[1])
// }
// console.log(unique(input))


// console.log(findProfit([7,1,5,3,6,4]))
// console.log(findProfit([7,6,4,3,1]))

// function findProfit (prices)
// {
//     let gain = 0;
//     let buy = 999999;

//     for(let i = 0 ; i < prices.length; i++)
//     {
//         if(prices[i] < buy)
//             buy = prices[i];

//         if(prices[i] - buy > gain)
//             gain = prices[i] - buy;
//     }
//     return gain;

// }

// const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

// console.log(findMaxVol(height));
// console.log(findMaxVol([1, 1]));

// function findMaxVol(arr) {
//     let vol = 0;
//     let i = 0;
//     let j = arr.length - 1;

//     while (i < j) {
//         let c_vol = Math.min(arr[i], arr[j]) * (j - i);
//         if (c_vol > vol)
//             vol = c_vol;

//         if (arr[i] < arr[j])
//             i++
//         else
//             j--
//     }
//     return vol;

// }

// console.log(checkDupes([1, 2, 3, 1], 3));
// console.log(checkDupes([1, 0, 1, 1], 1));
// console.log(checkDupes([1, 2, 3, 1, 2, 3], 2));

// function checkDupes(arr, k) {
//     let m = new Map();

//     for (let i = 0; i < arr.length; i++) {
//         if (m.has(arr[i])) {
//             if ((i - m.get(arr[i])) <=k) {
//                 return true;
//             }
            
//         }
//         m.set(arr[i], i)
//     }
//     return false
// }



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
//         if(curr < 0 )
//             curr =0 ;
//     })
//     return max
// }


console.log(lengthOfLongestSubstring("abcabcbb"))
console.log(lengthOfLongestSubstring("bbbbb"))
console.log(lengthOfLongestSubstring("pwwkew"))

function lengthOfLongestSubstring( str)
{
    let start = 0;
    let curr = 0;
    let result = 0;
    let set = new Map();
    let s = 0;

    for(curr = 0; curr < str.length; curr++)
    {
        if(set.has(str[curr]))
            start = Math.max(start, set.get(str[curr]) + 1);

        set.set(str[curr], curr);

        if((curr - start + 1) > result)
        {
            result = (curr - start + 1);
            s = start;
        }
    }
    console.log(str.substring(s, s+result))
    return result
}