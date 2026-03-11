console.log(groupAnagram(["act", "pots", "tops", "cat", "stop", "hat"]));

function groupAnagram(strArr)
{
    var anagramMap = new Map();

    for (var str of strArr)
    {
        var freq = new Array(26).fill(0);

        for (var char of str)
            freq[char.charCodeAt(0) - 97] = 1;

        freq = freq.join(',');

        if (anagramMap.has(freq))
        {
            anagramMap.get(freq).push(str)
        }
        else
            anagramMap.set(freq, [str]);

        console.log(anagramMap)
    }
}