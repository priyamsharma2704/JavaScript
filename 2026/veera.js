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
let strs = [
    " Is it Sunny",
    " Sunny Sunny it is",
    "Hello World",
    "Hello World",
    "hello world",
    " Sunny it is",
    "Wello Horld",
];
console.log(getUniqueItems(strs));
//n = lenght of strs
//m = length of each str
//k = num of waords in each str
function getUniqueItems(strs) {
    var map = new Map(); // m * n

    for (var str of strs) {
        var n_str = str.toLowerCase().trim().split(" "); // O (m) + O (m) + O (m)

        var freq = new Map(); // O(k)
        for (word of n_str) {
            freq.set(word, (freq.get(word) || 0) + 1);
        }

        var key = Array.from(freq.keys()) //O(n log n)
            .sort()
            .map((w) => w + ":" + freq.get(w))
            .join("|");

        map.set(key, str);
    }
    return Array.from(map.values());
}

function getUniqueItems_old(strs) {
    var strMap = new Map();
    for (var str of strs) {
        var normalizedStr = str
            .toLowerCase()
            .trim()
            .split(" ")
            .sort()
            .join(" ");

        strMap.set(normalizedStr, str);
    }
    console.log(strMap.values());
}
