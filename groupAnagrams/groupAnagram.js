const { cloneScriptCov } = require("@bcoe/v8-coverage");

s = "zxvsba";

//console.log(s.split("").sort().join(""));

res = groupAnagram(["eat","tea","tan","ate","nat","bat"]);
//console.log(res);

res = groupAnagram([""]);
//console.log(res);

res = groupAnagram(["a"]);
//console.log(res);

function groupAnagram(strs)
{
    var res = [];
    var sorted = [];
    var map = new Map();
    for(var i = 0 ; i < strs.length; i++)
    {
        curr = strs[i];
        curr = curr.split("").sort().join("");
        if(map[curr] == null)
        {
            map[curr] = [];
            map[curr].push(strs[i]);
        }
        else
        {
            map[curr].push(strs[i]);
        }
        console.log(sorted[i]);
    }

    for(var item in map)
    {
        res.push(map[item]);
    }

    console.log(res);

    return res;
}
