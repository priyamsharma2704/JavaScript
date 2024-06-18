/*
Your task is to calculate the number of substrings of source that match pattern. 

We’ll say that a substring source[l..r] matches pattern if the following three conditions are met:
– The pattern and substring are equal in length.
– Where there is a 0 in the pattern, there is a vowel in the substring. 
– Where there is a 1 in the pattern, there is a consonant in the substring. 

Vowels are ‘a‘, ‘e‘, ‘i‘, ‘o‘, ‘u‘, and ‘y‘. All other letters are consonants.
*/

function stringPatternMatching(src, ptn)
{
    src = src.toLowerCase();
    let counter = 0;
    for(let i in src)
    {
        let result = isPatternMatching(i,src, ptn );
        counter += result;
    }
    return counter;
}

function isPatternMatching(idx, str, pattern)
{

    let lettersMap = 
    {
        "0":["a", "e", "i", "o", "u"],
        "1":['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'y', 'z']
    };

    for(let i = 0 ; i < pattern.length; i++)
    {
        let arr = lettersMap[pattern[i]];
        if(arr.indexOf(str[parseInt(idx)+i]) == -1)
        {
            return 0;
        }
    }
    return 1;
}

console.log(stringPatternMatching("amazing", "010"));// 2
console.log(stringPatternMatching("codesignal", "100"));// 0