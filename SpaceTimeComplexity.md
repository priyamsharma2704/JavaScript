## Sets

```
    var x = [1,2,3,4]
    var set = new Set(x)
```

    Here we are creating a set out of a arr. Since in order to create a set out of arr (x) it needs to go thru all elements of arr hence the time complexity os O(n)
    Space Complexity for has()/add() is always O(1)
    .size() has O(1)

## Maps

```
    var arr = [1,2,4,5]
    var map = new Map();

    for(var num of arr)
        map.set(num, 0); //setting value for each key as 0
```

    Here we are creating a map based of an array hence the space complexity if O(n) where n is size of array.

    .has()/get()/set() has time complexity of O(1)
    map.size is O(1)

## Arrays

```
    var arr = [1,2,3,4,5]
```

    to create an arr of length, space complexity is O(n).
    arr.length has time complexity of O(1)
    arr.push() and arr.pop() are also O(1)
    arr.length is O(1)
    arr.sort() is also O(n log n)

## Strings

```
    var str = "abcdef"
```

    split("") has time complexity of O(n)
    sort() has time complexity of O(nlogn)
    join("") has time complexity of O(n)
    str.length is O(1)
