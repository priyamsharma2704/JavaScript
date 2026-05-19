console.log(longestSubStrWoRepeating("zxyzxyz"));//3
console.log(longestSubStrWoRepeating("xxxx"));//1

function longestSubStrWoRepeating(str) {

    let map = new Map();

    let maxLen = 0;
    let left = 0;
    for (let right = 0; right < str.length; right++) {
        let char = str[right];
        if (map.has(char) && map.get(char) >= left)
            left = map.get(char) + 1;

        map.set(char, right);
        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
}