res = validAnagram("anagram", "nagaram");
console.log(res);
res = validAnagram("rat", "cat");
console.log(res);
function validAnagram(s, t)
{
    var s_map = new Map();
    var t_map = new Map();

    for(var i = 0 ; i < s.length; i++)
    {
        if(!s_map[s[i]])
            s_map[s[i]] = 1;
        else
            s_map[s[i]] += 1;
    }

    for(var j = 0 ; j < t.length; j++)
    {
        if(!t_map[t[j]])
            t_map[t[j]] = 1;
        else
            t_map[t[j]] += 1;
    }

    for(var i = 0 ; i < s.length; i++)
    {
        var key = s[i];
        var value = s_map[key];

        if(t_map[key] != value)
            return false;
    }
    return true;
}