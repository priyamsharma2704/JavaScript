/*
Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.

An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

Input: strs = ["act","pots","tops","cat","stop","hat"]
Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]

Input: strs = ["x"]
Output: [["x"]]

Input: strs = [""]
Output: [[""]]

space complexity : o(n*k) as for the map, n is the num of strings and k is the length of each string
freq array and key array will have fixed space complexity o(1) as the size is fixed (26).

time complexity: outer loop run for n times
                 inner lopp runs for k times
                 .join() take o(k) 
*/

console.log(groupAnagram(["act", "pots", "tops", "cat", "stop", "hat"]));

function groupAnagram(strs)
{
    var groups = new Map();

    for (var str of strs)
    {
        var freq = new Array(26).fill(0);
        for (var char of str)
        {
            freq[char.charCodeAt(0) - 97]++;
        }

        var key = freq.join(',');

        if (!groups.get(key))
            groups.set(key, []);
        groups.get(key).push(str);
    }

    return Array.from(groups.values())
}