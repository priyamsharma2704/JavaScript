/*
Time Complexity: 
split = O(n)
sort() = O(nlogn)
join() = O(n)

Space Complexity:
since split() creates a new array of size n hence O(n)

*/

console.log(isAnagram("racecar", "carrace"));
console.log(isAnagram("", ""));
console.log(isAnagram("racecar", "carrace1"));
function isAnagram(s, t) {
    if (s.length != t.length) return false;
    var sortStr = (str) => str.split("").sort().join("");
    return sortStr(s) == sortStr(t);
}
/*------------------ 2nd approach (better one)---------------------------- */
/*This approach is better than above as here the time complexity is O(n) becuz we iterate over two for loops for s and t and then final for loop that goes over n items store in the map.

space complexity: O(n) since we create two maps of n in worst case

NOTE: for plain js objects we use for (var x in obj){}
but for Maps, Sets, and Arrays we use for(var x of map.keys()/set/arr){} to get the items/keys directly
 */
console.log(isAnagram2("racecar", "carrace"));
console.log(isAnagram2("", ""));
console.log(isAnagram2("JAR", "JAM"));
function isAnagram2(s, t) {
    if (s.length != t.length) return false;
    var sMap = new Map();
    var tMap = new Map();

    for (var char of s) sMap.set(char, sMap.get(char) + 1 || 0);

    for (var char of t) tMap.set(char, tMap.get(char) + 1 || 0);

    //since we have already checked the lengths of s and t hence the size of these maps should be same

    for (var charKey of sMap.keys()) {
        if (sMap.get(charKey) != tMap.get(charKey)) return false;
    }
    return true;
}
