// // -------------- Best Time to Buy and Sell Stock------------

// function maxProfit(prices)
// {
//     let min = 99999;
//     let gain = 0;

//     for(let i in prices)
//     {
//         if(min > prices[i])
//             min = prices[i];

//         let profit = prices[i] - min;

//         if(gain < profit)
//             gain = profit;
//     }
//     return gain;
// }

// console.log("--------------Best Time to Buy and Sell Stock----------");
// console.log(maxProfit([7,1,5,3,6,4]));
// console.log(maxProfit([7,6,4,3,1]));


// //--------------Longest Substring Without Repeating Characters

function lengthOfLongestSubstring(s)
{
    let str = "";
    let m_len = 0;
    let i = 0;
    let j = i;
    while(j < s.length)
    {
        if(str.indexOf(s[j]) == -1)
        {
            str += s[j];
            j++;

            if(m_len < str.length)
                m_len = str.length;
        }
        else
        {
            i++;
            j = i;
            str = "";
        }


    }
    return m_len;
}

console.log("-----------Longest Substring Without Repeating Characters");
console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbb"));
console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("abcddddefghi"));



// function characterReplacement(s, k) {
//     let maxLength = 0;
//     let maxCount = 0;
//     let start = 0;
//     const count = new Array(26).fill(0); // Array to store character counts

//     for (let end = 0; end < s.length; end++) {
//         const endCharIndex = s[end].charCodeAt(0) - 'A'.charCodeAt(0);
//         count[endCharIndex]++;
//         maxCount = Math.max(maxCount, count[endCharIndex]);

//         // If the number of characters to change is greater than k, shrink the window
//         if (end - start + 1 - maxCount > k) {
//             const startCharIndex = s[start].charCodeAt(0) - 'A'.charCodeAt(0);
//             count[startCharIndex]--;
//             start++;
//         }

//         // Update the maxLength found so far
//         maxLength = Math.max(maxLength, end - start + 1);
//     }

//     return maxLength;
// }

// // Example usage
// const s = "AABABBA";
// const k = 1;
// console.log("Length of Longest Substring After Replacement:", characterReplacement(s, k)); // Output: 4
